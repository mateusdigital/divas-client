//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : App.js                                                        //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-23                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
// -----------------------------------------------------------------------------
import User from "@/models/User";
import Assert from "@/utils/Assert";
// -----------------------------------------------------------------------------
const Endpoints = require("@/divas-shared/shared/API/Endpoints");


// -----------------------------------------------------------------------------
class Result
{
  static Valid(value)
  {
    return new Result(value, null);
  }

  static async ResponseError(error)
  {
    const msg = await error.json();
    return new Result(null, error, msg);
  }

  static LogicError(msg)
  {
    const error = new Error(msg);
    return new Result(null, error, { message: msg });
  }

  // ---------------------------------------------------------------------------
  static ExceptionError(error)
  {
    return new Result(null, error, { message: error.message });
  }

  constructor(value, error, errorJson)
  {
    this.value     = value;
    this.error     = error;
    this.errorJson = errorJson;
  }


  IsValid() { return this.value  && !this.error; }
  IsError() { return this.error; }
}


// -----------------------------------------------------------------------------
class App
{

  //
  // User
  //

  // ---------------------------------------------------------------------------
  static _currentLoggedUser;

  static SetCurrentLoggedUser(data)
  {
    if(!App._currentLoggedUser || App._currentLoggedUser._id == data._id) {
      const userModel = User.CreateFromServerData(data);
      App._currentLoggedUser = userModel;
    }

    return Result.Valid(App._currentLoggedUser);
  }

  // ---------------------------------------------------------------------------
  static async GetCurrentLoggedUser()
  {
    if(App._currentLoggedUser == null) {
      return Result.LogicError("No logged users");
    }

    return Result.Valid(App._currentLoggedUser);
  }

  // ---------------------------------------------------------------------------
  static async TryToLoginUserWithData(data)
  {
    try {
      const api_url  = NET.Make_API_Url(Endpoints.User.Login);
      const response = await NET.POST_JSON(api_url, data);

      if(response.status != StatusCodes.OK) {
        return Result.ResponseError(response);
      }

      const json = await response.json();
      return App.SetCurrentLoggedUser(json);
    }
    catch(error) {
      return Result.ExceptionError(error);
    }
  }


  // ---------------------------------------------------------------------------
  static async GetUserWithUsername(username)
  {
    Assert.NotNull(username);

    const api_url = NET.Make_API_Url(Endpoints.User.GetByUsername, username);

    const response = await NET.GET(api_url);
    if(response.status != StatusCodes.OK) {
      return Result.ResponseError(response);
    }

    const data = await response.json();
    const user = User.CreateFromServerData(data);

    return Result.Valid(user);
  }

  // ---------------------------------------------------------------------------
  static async GetUserWithId(id)
  {
    Assert.NotNull(id, "id is null");

    const api_url = NET.Make_API_Url(Endpoints.User.GetById, id);

    const response = await NET.GET(api_url);
    if(response.status != StatusCodes.OK) {
      return await Result.ResponseError(response);
    }

    const data = await response.json();
    const user = User.CreateFromServerData(data);

    return Result.Valid(user);
  }

  // ---------------------------------------------------------------------------
  static async CreateUserWithData(data, photo)
  {
    //
    Assert.NotNullOrEmpty(data.username);
    Assert.NotNullOrEmpty(data.email);
    Assert.NotNullOrEmpty(data.password);

    Assert.NotNullOrEmpty(data.fullname);
    Assert.NotNullOrEmpty(data.description);

    Assert.NotNull(photo);

    //
    {
      const form_data = new FormData();
      form_data.append("profilePhoto", photo);

      const api_url  = NET.Make_API_Url(Endpoints.User.UploadProfilePhoto);
      const response = await NET.POST_DATA(api_url, form_data);

      if(response.status != StatusCodes.CREATED) {
        return await Result.ResponseError(response);
      }

      const response_data  = await response.json();
      data.profilePhotoUrl = response_data.profilePhotoPath;
    }

    //
    {
      const api_url  = NET.Make_API_Url(Endpoints.User.Create);
      const response = await NET.POST_JSON(api_url, data);

      if(response.status != StatusCodes.CREATED) {
        return await Result.ResponseError(response);
      }

      const json = await response.json();
      const user = User.CreateFromServerData(json);
      return Result.Valid(user);
    }
  }


  //
  // Moodboard
  //

  // ---------------------------------------------------------------------------
  static async GetMoodboardWithId(id)
  {
    Assert.NotNull(id, "id can't be null");

    const api_url = NET.Make_API_Url("moodboard", id);

    const response = await NET.GET(api_url);
    if(response.status != 200) {
      return null;
    }

    // @TODO(mateusdigital): Create model for moodboard.
    const data = await response.json();
    return data;
  }
};


// -----------------------------------------------------------------------------
export default App;