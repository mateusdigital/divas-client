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
import Link from "next/link";
//
import App from "@/models/App";
import UserProfile from "@/components/User/UserProfile";

// -----------------------------------------------------------------------------
function ProfilePage ()
{
  //
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    const GetLoggedUser = async () => {
      const logged_user = await App.GetCurrentLoggedUser();
      setLoggedUser(logged_user);
    }
    GetLoggedUser();
  }, []);

  //
  if (!loggedUser) {
    return <div>Loading...</div>;
  }

  //
  return <UserProfile user={loggedUser}></UserProfile>
}

// -----------------------------------------------------------------------------
export default ProfilePage;
