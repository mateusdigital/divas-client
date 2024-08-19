// -----------------------------------------------------------------------------
import React from 'react';
// -----------------------------------------------------------------------------
import NET from '@/app/NET';
import _Link from '@/components/Link';
// -----------------------------------------------------------------------------
import { PageUrls } from '@/utils/PageUtils';
// -----------------------------------------------------------------------------
import CachedImage from '@/components/UI/Images/CachedImage';
import ImageDefaults from '@/components/UI/Images/ImageDefaults';
// -----------------------------------------------------------------------------
import styles from "./Feed.module.css";
import ProfileImage from '../UI/Images/ProfileImage';

// -----------------------------------------------------------------------------
function FeedItem({moodboardModel, onClick})
{
  if(!moodboardModel) {
    return null;
  }

  const user = moodboardModel.owner;

  //
  const user_url    = NET.Make_Navigation_Url(PageUrls.UserOtherProfile, user.username);
  const details_url = NET.Make_Navigation_Url(PageUrls.MoodboardDetails, moodboardModel._id);
  const photo_url   = NET.Make_External_Image_Url(moodboardModel.photoUrl);


  //
  return (
    <div className={styles.itemContainer}>
      <_Link href={user_url}>
        <div className={styles.userInfoContainer}>
          <ProfileImage
            className={styles.profilePhoto}
            userModel={user}
          />

          <div>
            {user.fullname}
            @{user.username}
          </div>
        </div>
      </_Link>

      <div>
        <_Link href={details_url}>
          <CachedImage
            imageUrl={photo_url + "a"}
            imagePlaceholderUrl={ImageDefaults.PLACEHOLDER_URL_MOODBOARD_GRID_ITEM}
          />
        </_Link>

      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
export default FeedItem;
