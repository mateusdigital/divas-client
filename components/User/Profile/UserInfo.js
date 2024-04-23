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
function UserInfo({ user }) {
  return (
    <div className={styles.profileContainer}>
      {/* Photo */}
      <div className={styles.profilePhotoSplit}>
        <img className={styles.profilePhoto} src={user.profilePhotoUrl}></img>
      </div>

      <div className={styles.profileInfoSplit}>
        {/* User - Fullname / handle */}
        <span className={styles.profileNamesContainer}>
          <span className={styles.profileFullname}>{user.fullname}</span>
          <span className={styles.profileUsername}>@{user.username}</span>
        </span>

        {/* Stats */}
        <div className={styles.profileStatsContainer}>
          {/* Followers */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.followers.length}</span>
            <span className={styles.profileStatDescription}>Followers</span>
          </div>
          {/* Following */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.following.length}</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>
          {/* Design Items */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.moodboards.length}</span>
            <span className={styles.profileStatDescription}>Moodboards</span>
          </div>
          {/* Likes */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{user.likes}</span>
            <span className={styles.profileStatDescription}>Likes</span>
          </div>
        </div>

        {/* Description */}
        <div className={styles.profileDescription}>
          <span>
            {user.description}
          </span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserInfo;
