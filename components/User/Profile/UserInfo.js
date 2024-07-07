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
import ProfileImage from "@/components/UI/Images/ProfileImage";
// -----------------------------------------------------------------------------
import styles from "./UserInfo.module.css";

// -----------------------------------------------------------------------------
function UserInfo({ userModel })
{
  return (
    <div className={styles.contentContainer}>
      {/* Photo */}
      <div className={styles.photoContainer}>
        <ProfileImage className={styles.profilePhoto}/>
      </div>

      <div className={styles.infoContainer}>
        {/* User - Fullname / handle */}
        <div className={styles.namesContainer}>
          <span className={styles.fullname}>{userModel.fullname}</span>
          <span className={styles.username}>@{userModel.username}</span>
        </div>

        {/* Stats */}
        <div className={styles.statsContainer}>
          {/* Followers */}
          <div className={styles.statContainer}>
            <span className={styles.statValue}>{userModel.followers.length}</span>
            <span className={styles.statText}>Followers</span>
          </div>
          {/* Following */}
          <div className={styles.statContainer}>
            <span className={styles.statValue}>{userModel.following.length}</span>
            <span className={styles.statText}>Following</span>
          </div>
          {/* Design Items */}
          <div className={styles.statContainer}>
            <span className={styles.statValue}>{userModel.moodboards.length}</span>
            <span className={styles.statText}>Moodboards</span>
          </div>
          {/* Likes */}
          <div className={styles.statContainer}>
            <span className={styles.statValue}>{userModel.likes ? userModel.likes : 0}</span>
            <span className={styles.statText}>Likes</span>
          </div>
        </div>

        {/* Description */}
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>{userModel.description}</span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserInfo;
