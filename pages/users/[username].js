//~---------------------------------------------------------------------------//
//                               *       +                                    //
//                         "                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           "=/_       \     |                               //
//                        *   |  "=._    |                                    //
//                             \     `=./`,        "                          //
//                          .   "=.__.=" `="      *                           //
//                 +                         +                                //
//                      O      *        "       .                             //
//                                                                            //
//  File      : [username].js                                                 //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
//  License   : See project"s COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
// -----------------------------------------------------------------------------
import { useEffect, useState } from "react";
// -----SS------------------------------------------------------------------------
import UserProfile from "@/components/User/UserProfile";
import UserService from "@/services/UserService";


// -----------------------------------------------------------------------------
function ProfilePageForUser()
{
  //
  const router = useRouter();
  const { username } = router.query;

  //
  const [userModel, setUserModel] = useState(null);
  
  useEffect(()=>{
    const _GetUser = async ()=>{
      const user_model = await UserService.GetUserWithUsername(username);
      setUserModel(user_model);
    }
    
    if(username) {
      _GetUser();
    }
  }, [username]);

  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  return <UserProfile userModel={userModel}></UserProfile>
}

// -----------------------------------------------------------------------------
export default ProfilePageForUser;
