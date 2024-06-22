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
import NET from "@/app/NET";
import CachedImage from "@/components/UI/CachedImage/CachedImage";

// -----------------------------------------------------------------------------
import styles from "./UserInfo.module.css";

// -----------------------------------------------------------------------------
function UserInfo({ userModel })
{
  return (
    <div className={styles.profileContainer}>
      {/* Photo */}
      <div className={styles.profilePhotoSplit}>
        <CachedImage
          className={styles.profilePhoto}
          imageUrl={
            NET.Make_Local_Image_Url(userModel.profilePhotoUrl)
          }/>
      </div>

      <div className={styles.profileInfoSplit}>
        {/* User - Fullname / handle */}
        <span className={styles.profileNamesContainer}>
          <span className={styles.profileFullname}>{userModel.fullname}</span>
          <span className={styles.profileUsername}>@{userModel.username}</span>
        </span>

        {/* Stats */}
        <div className={styles.profileStatsContainer}>
          {/* Followers */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{userModel.followers.length}</span>
            <span className={styles.profileStatDescription}>Followers</span>
          </div>
          {/* Following */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{userModel.following.length}</span>
            <span className={styles.profileStatDescription}>Following</span>
          </div>
          {/* Design Items */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{userModel.moodboards.length}</span>
            <span className={styles.profileStatDescription}>Moodboards</span>
          </div>
          {/* Likes */}
          <div className={styles.profileStatContainer}>
            <span className={styles.profileStatValue}>{userModel.likes} ? {userModel.likes} : 0</span>
            <span className={styles.profileStatDescription}>Likes</span>
          </div>
        </div>

        {/* Description */}
        <div className={styles.profileDescription}>
          <span>
            {userModel.description}
          </span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserInfo;
