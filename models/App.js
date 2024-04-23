import NET from "@/app/NET";

//
import User from "@/models/User";


// -----------------------------------------------------------------------------
class App
{
  static _currentLoggedUser;

  static async GetCurrentLoggedUser()
  {
    if(App._currentLoggedUser == null) {
      const user_id = "6601bed20f723b2f4f98f05b";
      const api_url = NET.Make_API_Url("usersId", user_id);

      const response = await NET.GET(api_url);
      const data     = await response.json();

      const user = User.CreateFromServerData(data);
      this._currentLoggedUser = user;
    }

    return App._currentLoggedUser;
  }
};


// -----------------------------------------------------------------------------
export default App;