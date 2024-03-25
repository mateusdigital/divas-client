//~---------------------------------------------------------------------------//
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
//  File      : UserInfo.js                                                   //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//


// -----------------------------------------------------------------------------
import styles from "./css/UserInfo.module.css";

// -----------------------------------------------------------------------------
function UserInfo({user}) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePhotoSplit}>
        <img className={styles.profilePhoto} src="https://placehold.co/260"></img>
      </div>

      <div className={styles.profileInfoSplit}>
        <h1 className={styles.profileHeader}>{user.name}</h1>

        <div className={styles.profileStatsContainer}>
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>1234</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>1234</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>1234</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>1234</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>
        </div>

        <div className={styles.profileDescription}>
          <p>
            {user.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac turpis porta, elementum velit vitae, blandit tortor. Nunc blandit aliquet erat nec auctor. Nam lobortis purus sed neque accumsan ullamcorper. Vivamus dolor felis, viverra a porta id, blandit eget magna. Cras ornare, ipsum id blandit porttitor.
          </p>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserInfo;
