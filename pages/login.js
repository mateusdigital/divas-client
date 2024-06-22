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
import App from "@/models/App";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
import LoginUser from "@/components/User/Login/LoginUser";
// -----------------------------------------------------------------------------
import styles from "./styles/LoginPage.module.css";


// -----------------------------------------------------------------------------
function LoginPage()
{

  //
  const { NavigateTo } = UsePageRouter();

  //
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await App.GetCurrentLoggedUser();
      if(result.IsValid()) {
        NavigateTo(PageUrls.UserOwnProfile);
      }
    }
    _GetLoggedUser();
  }, []);


  //
  return (<>
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
            <LoginUser></LoginUser>
          </div>
        </div>

        {/*  */}
        <div className={styles.bottomContainer}>
          <div className={styles.linksContainer}>
            <ul>
              <li><Link href="/doc/help">Help</Link></li>
              <li><Link href="/doc/terms">Terms</Link></li>
              <li><Link href="/doc/privacy">Privacy</Link></li>
              <li><Link href="/doc/copyright">Copyright Policy</Link></li>
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
  </>);
}

// -----------------------------------------------------------------------------
export default LoginPage;
