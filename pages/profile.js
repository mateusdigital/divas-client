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
//  File      : profile.js                                                    //
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
import { useEffect, useState } from "react";
//
import App from "@/models/App";
import UserProfile from "@/components/User/UserProfile";
import ToastUtils from "@/utils/Toast";


// -----------------------------------------------------------------------------
function ProfilePage()
{
  //
  const [loggedUserResult, setLoggedUserResult] = useState(null);
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await App.GetCurrentLoggedUser();
      if(result.IsValid()) {
        setLoggedUserResult(result);
      } else {
        ToastUtils.ResultError(result);
      }
    }

    _GetLoggedUser();
  }, []);

  // Not ready...
  if (!loggedUserResult) {
    return <div>Loading...</div>;
  }

  // Ready...
  return <UserProfile userModel={loggedUserResult.value}></UserProfile>
}

// -----------------------------------------------------------------------------
export default ProfilePage;
