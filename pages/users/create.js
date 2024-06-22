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
//  File      : create.js                                                     //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-13                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import UserLogged from "@/components/Logic/UserLogged";
import PageUrls from "@/utils/PageUrls";
// -----------------------------------------------------------------------------
import CreateUser from "@/components/User/Create/CreateUser";


// -----------------------------------------------------------------------------
function Component()
{
  return (<>
    <UserLogged requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>
      <CreateUser></CreateUser>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;
