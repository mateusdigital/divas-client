import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
// -----------------------------------------------------------------------------
import User from "@/models/User";
import Assert from "@/utils/Assert";
// -----------------------------------------------------------------------------
const Endpoints = require("@/divas-shared/shared/API/Endpoints");


// -----------------------------------------------------------------------------
class App
{
  //
  // User
  //

  // ---------------------------------------------------------------------------
  static _currentLoggedUser;

  // ---------------------------------------------------------------------------
  static async GetCurrentLoggedUser()
  {
    if(App._currentLoggedUser == null) {
      try {
        const user_id = "6601bed20f723b2f4f98f05b";
        const api_url = NET.Make_API_Url(Endpoints.User.GetById, user_id);

        const response = await NET.GET(api_url);
        if(response.status != StatusCodes.OK) {
          return null;
        }

        const data = await response.json();
        const user = User.CreateFromServerData(data);

        this._currentLoggedUser = user;
      }
      catch(error) {
        debugger;
      }
    }

    return App._currentLoggedUser;
  }

  // ---------------------------------------------------------------------------
  static async GetUserWithUsername(username)
  {
    Assert.NotNull(username, "username is null");

    const api_url = NET.Make_API_Url(Endpoints.User.GetByUsername, username);

    const response = await NET.GET(api_url);
    if(response.status != StatusCodes.OK) {
      return null;
    }

    const data = await response.json();
    const user = User.CreateFromServerData(data);

    return user;
  }

  // ---------------------------------------------------------------------------
  static async GetUserWithId(id)
  {
    Assert.NotNull(id, "id is null");

    const api_url = NET.Make_API_Url(Endpoints.User.GetById, id);

    const response = await NET.GET(api_url);
    if(response.status != StatusCodes.OK) {
      return null;
    }

    const data = await response.json();
    const user = User.CreateFromServerData(data);

    return user;
  }

  // ---------------------------------------------------------------------------
  static async CreateUserWithData(data)
  {
    // Assert.NonNullNotEmpty(data.username);
    // Assert.NonNullNotEmpty(data.email);
    // Assert.NonNullNotEmpty(data.password);

    // Assert.NonNullNotEmpty(data.name);
    // Assert.NonNullNotEmpty(data.description);

    Assert.NotNull(data.profilePhoto, "profile photo can't be null");


    const form_data = new FormData();
    form_data.append("profilePhoto", data.profilePhoto);

    const api_url = NET.Make_API_Url(Endpoints.User.UploadProfilePhoto);
    const response = await NET.POST_DATA(api_url, {
      body: form_data
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('Failed to upload file');
    }

    return response;
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