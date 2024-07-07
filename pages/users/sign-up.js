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
import Panel from "@/components/UI/Containers/Panel";
import SignUpForm from "@/components/User/Login/SignUpForm";
// -----------------------------------------------------------------------------
import styles from "../styles/LoginPage.module.css";



// -----------------------------------------------------------------------------
function CreatePage()
{
  return (<>
    <UserLogged requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>
      <div className={styles.mainContainer}>
        <Panel className="margin-top-2">
          <SignUpForm/>
        </Panel>
      </div>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default CreatePage;
