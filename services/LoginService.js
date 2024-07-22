// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
// -----------------------------------------------------------------------------
import NET    from "@/app/NET";
import Result from "@/app/Result";
// -----------------------------------------------------------------------------
import UserModel from "@/models/UserModel";

// -----------------------------------------------------------------------------
class LoginService
{
  // ---------------------------------------------------------------------------
  static _currentLoggedUser;

  // ---------------------------------------------------------------------------
  static _SetCurrentLoggedUser(serverData)
  {
    const user_model = UserModel.CreateFromServerData(serverData);

    LoginService._currentLoggedUser = user_model;
    LoginService._currentLoggedUser.PersistData();

    return Result.Valid(LoginService._currentLoggedUser);
  }

  // ---------------------------------------------------------------------------
  static async GetCurrentLoggedUser()
  {
    if(LoginService._currentLoggedUser == null) {
      const user_model = UserModel.LoadData();
      if(!user_model) {
        return Result.Invalid();
      }

      if(user_model) {
        const result = await LoginService.TryToLoginUserWithData({
          username: user_model.username,
          password: user_model.password
        });

        if(!result.IsValid()) {
          return result;
        }

        const fetched_model = result.value;
        return LoginService._SetCurrentLoggedUser(fetched_model);
      }
    }

    return Result.Valid(LoginService._currentLoggedUser);
  }

  // ---------------------------------------------------------------------------
  static async TryToLoginUserWithData({username, password})
  {
    try {
      const api_url  = NET.Make_API_Url(Endpoints.User.Login);
      const response = await NET.POST_JSON(api_url, {username, password});

      if(response.status != StatusCodes.OK) {
        return Result.ResponseError(response);
      }

      const json = await response.json();
      return LoginService._SetCurrentLoggedUser(json);
    }
    catch(error) {
      return Result.ExceptionError(error);
    }
  }

  // ---------------------------------------------------------------------------
  static async TryToLogoutUser()
  {
    LoginService._currentLoggedUser.DeleteData();
    LoginService._currentLoggedUser = null;
  }
}

// -----------------------------------------------------------------------------
export default LoginService;