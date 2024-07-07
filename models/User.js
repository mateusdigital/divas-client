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
class User
{
  // ---------------------------------------------------------------------------
  static CreateFromServerData(data)
  {
    return new User(data)
  }

  // ---------------------------------------------------------------------------
  constructor({
    _id,
    fullname,
    description,
    profilePhotoUrl,
    username,
    email,
    followers,
    following,
    likes,
    moodboards,
   })
  {
    // Info
    this._id             = _id;

    this.fullname        = fullname;
    this.description     = description;

    // Photo
    this.profilePhotoUrl     = profilePhotoUrl;
    this.profilePhotoTinyUrl = this._MakeTinyUrl(profilePhotoUrl);

    // Login
    this.username = username;
    this.email    = email;

    // Social
    this.followers = followers;
    this.following = following;
    this.likes     = likes;

    // Moodboard
    this.moodboards = moodboards;
  }

  SaveData()
  {
    Cookies.set("loggedUser", JSON.stringify(this), { expires: 7 });
  }

  static LoadData()
  {
      const cookie_user = Cookies.get("loggedUser");
      if(!cookie_user) {
        return null;
      }
      return JSON.parse(cookie_user);
  }


  // ---------------------------------------------------------------------------
  _MakeTinyUrl(photoUrl)
  {
    // @TODO(mateusdigital): Add logic to create the different sizes of the photo...
    return photoUrl;
  }
};


// -----------------------------------------------------------------------------
export default User;