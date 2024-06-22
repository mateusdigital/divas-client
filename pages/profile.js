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
import MainLayout from "@/components/Layout/MainLayout";
import UserProfile from "@/components/User/UserProfile";
// -----------------------------------------------------------------------------
import PageUrls from "@/utils/PageUrls";
import UserLogged, { useLoggedUser } from "@/components/Logic/UserLogged"; // Import useLoggedUser hook


// -----------------------------------------------------------------------------
function ProfilePage()
{

  const loggedUserResult = useLoggedUser();

  // Ready...
  return (<>
    <UserLogged requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <MainLayout>
        <UserProfile userModel={loggedUserResult}/>
      </MainLayout>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default ProfilePage;
