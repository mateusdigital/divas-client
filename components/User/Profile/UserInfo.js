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
import styles from "./UserInfo.module.css";

// -----------------------------------------------------------------------------
function UserInfo({user}) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePhotoSplit}>
        <img className={styles.profilePhoto} src={user.profilePhotoUrl}></img>
      </div>

      <div className={styles.profileInfoSplit}>
        <span className={styles.profileNamesContainer}>
          <span className={styles.profileFullname}>{user.fullname}</span>
          <span className={styles.profileUsername}>@{user.username}</span>
        </span>


        <div className={styles.profileStatsContainer}>
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.followers.length}</span>
            <span className={styles.profileStatDescription}>Followers</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.following.length}</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.designItems.length}</span>
            <span className={styles.profileStatDescription}>Designs</span>
          </div>

          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.likes}</span>
            <span className={styles.profileStatDescription}>Likes</span>
          </div>
        </div>

        <div className={styles.profileDescription}>
          <span>
            {user.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac turpis porta, elementum velit vitae, blandit tortor. Nunc blandit aliquet erat nec auctor. Nam lobortis purus sed neque accumsan ullamcorper. Vivamus dolor felis, viverra a porta id, blandit eget magna. Cras ornare, ipsum id blandit porttitor.
          </span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserInfo;
