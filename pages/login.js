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
//  File      : login.js                                                      //
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
import Link from "next/link";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import UserLoggedContext from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import Panel         from "@/components/UI/Containers/Panel";
import LoginUserForm from "@/components/User/Login/LoginUserForm";
// -----------------------------------------------------------------------------
import styles from "./styles/LoginPage.module.css";


// -----------------------------------------------------------------------------
function LoginPage()
{
  //
  return (<>
    <UserLoggedContext requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>
      {/*  */}
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          {/*  */}
          <div className={styles.topContainer}>
            {/*  */}
            <div className={styles.artContainer}>
              <img src="https://placehold.co/600x400"></img>
            </div>

            {/*  */}
            <Panel>
              <LoginUserForm/>
            </Panel>
          </div>

          {/*  */}
          <div className={styles.bottomContainer}>
            <div className={styles.linksContainer}>
              <ul>
                <li><Link href={PageUrls.DocsHelp}>Help</Link></li>
                <li><Link href={PageUrls.DocsTerms}>Terms</Link></li>
                <li><Link href={PageUrls.DocsPrivacy}>Privacy</Link></li>
                <li><Link href={PageUrls.DocsCopyright}>Copyright Policy</Link></li>
              </ul>
            </div>

            <div className={styles.socialContainer}>
              <Link href=""><img src="/img/icons8-facebook-50.png"/></Link>
              <Link href=""><img src="/img/icons8-instagram-50.png"/></Link>
            </div>
          </div>
        </div>
      </div>
    </UserLoggedContext>
  </>);
}

// -----------------------------------------------------------------------------
export default LoginPage;
