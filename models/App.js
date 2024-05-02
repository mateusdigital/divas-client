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
        if(!response.ok) {
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

    const api_url = NET.Make_API_Url("users", username);

    const response = await NET.GET(api_url);
    if(response.status != 200) {
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

    const api_url = NET.Make_API_Url("usersId", id);

    const response = await NET.GET(api_url);
    if(response.status != 200) {
      return null;
    }

    const data = await response.json();
    const user = User.CreateFromServerData(data);

    return user;
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