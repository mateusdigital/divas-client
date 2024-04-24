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


// -----------------------------------------------------------------------------
function ProfilePage()
{
  //
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const logged_user = await App.GetCurrentLoggedUser();
      setLoggedUser(logged_user);
    }

    _GetLoggedUser();
  }, []);

  // Not ready...
  if (!loggedUser) {
    return <div>Loading...</div>;
  }

  // Ready...
  return <UserProfile userModel={loggedUser}></UserProfile>
}

// -----------------------------------------------------------------------------
export default ProfilePage;
