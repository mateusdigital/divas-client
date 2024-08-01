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
//  File      : User.js                                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-23                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//
import Cookies from "js-cookie";


// -----------------------------------------------------------------------------
class UserModel
{
  //
  // Factory
  //

  // ---------------------------------------------------------------------------
  static CreateFromServerData(data)
  {
    return new UserModel(data)
  }

  // ---------------------------------------------------------------------------
  // @Notice: Not meant to be constructed by hand.
  constructor({
    _id,
    fullname,
    description,
    profilePhotoUrl,
    username,
    email,
    password,
    followers,
    following,
    likes,
    moodboards,
  }) {
    // Info
    this._id = _id;

    this.fullname    = fullname;
    this.description = description;

    // Photo
    this.profilePhotoUrl     = profilePhotoUrl;
    this.profilePhotoTinyUrl = this._MakeTinyUrl(profilePhotoUrl);

    // Login
    this.username = username;
    this.email    = email;
    this.password = password; // @XXX:remove this password...

    // Social
    this.followers = followers;
    this.following = following;
    this.likes     = likes;

    // Moodboard
    this.moodboards = moodboards;
  }

  NeedsFetch()
  {
    return true;
  }


  //
  // Cookies
  //

  // ---------------------------------------------------------------------------
  PersistData()
  {
    Cookies.set("loggedUser", JSON.stringify(this), { expires: 7 }); // @check: 7 what????
  }

  DeleteData()
  {
    Cookies.remove("loggedUser");
  }

  // ---------------------------------------------------------------------------
  static LoadData()
  {
      const cookie_user = Cookies.get("loggedUser");
      if(!cookie_user) {
        return null;
      }
      return JSON.parse(cookie_user);
  }

  //
  // Helper Methods
  //

  // ---------------------------------------------------------------------------
  _MakeTinyUrl(photoUrl)
  {
    // @TODO(mateusdigital): Add logic to create the different sizes of the photo...
    return photoUrl;
  }
};

// -----------------------------------------------------------------------------
export default UserModel;