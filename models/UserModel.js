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

import NET from '@/app/NET';
import {PageUrls} from "@/utils/PageUtils";

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
  constructor(data)
  {
    Object.keys(data).forEach(key => {
      this[key] = data[key];
    });
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

  // ---------------------------------------------------------------------------
  static ProfileUrl(userModel)
  {
    const user_url = NET.Make_Navigation_Url(PageUrls.UserOtherProfile, userModel.username);
    return user_url;
  }

  // ---------------------------------------------------------------------------
  static ProfileImageUrl(userModel)
  {
    const img_url = NET.Make_External_Image_Url(userModel.profilePhotoUrl);
    return img_url;
  }
};

// -----------------------------------------------------------------------------
export default UserModel;
