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
import UserLogged, { useLoggedUserContext } from "@/components/Logic/UserLogged";


// -----------------------------------------------------------------------------
function _Content()
{
  const loggedUser = useLoggedUserContext();
  if(!loggedUser) {
    return null;
  }

  return (<>
    <MainLayout pageName={PageUrls.UserOwnProfile}>
      <UserProfile userModel={loggedUser}/>
    </MainLayout>
  </>);
}

// -----------------------------------------------------------------------------
function ProfilePage()
{
  return (
    <UserLogged requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <_Content/>
    </UserLogged>
  );
}
// -----------------------------------------------------------------------------
export default ProfilePage;
