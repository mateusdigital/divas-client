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
import { useEffect } from "react";
// -----------------------------------------------------------------------------
import Link from "next/link";
// -----------------------------------------------------------------------------
import PageUrls from "@/utils/PageUrls";
import UserLogged from "@/components/Logic/UserLogged";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
import LoginUser from "@/components/User/Login/LoginUser";
// -----------------------------------------------------------------------------
import styles from "./styles/LoginPage.module.css";


// -----------------------------------------------------------------------------
function LoginPage()
{
  //
  return (<>
    <UserLogged requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>
      {/*  */}
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          {/*  */}
          <div className={styles.loginContainer}>
            {/*  */}
            <div className={styles.artContainer}>
              <img src="https://placehold.co/600x400"></img>
            </div>

            {/*  */}
            <div className={styles.loginUserContainer}>
              <LoginUser/>
            </div>
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
              <MaterialIcon icon="favorite"> </MaterialIcon>
              <MaterialIcon icon="favorite"> </MaterialIcon>
              <MaterialIcon icon="favorite"> </MaterialIcon>
            </div>
          </div>
        </div>
      </div>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default LoginPage;
