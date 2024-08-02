
// -----------------------------------------------------------------------------
import React from 'react';
// -----------------------------------------------------------------------------
import Link from 'next/link';
// -----------------------------------------------------------------------------
import NET from '@/app/NET';
// -----------------------------------------------------------------------------
import { PageUrls } from '@/utils/PageUtils';
// -----------------------------------------------------------------------------
import CachedImage from '@/components/UI/Images/CachedImage';
import ImageDefaults from '@/components/UI/Images/ImageDefaults';
// -----------------------------------------------------------------------------
import styles from "./UserGridItem.module.css";


// -----------------------------------------------------------------------------
function UserGridItem({userModel})
{
  //
 // @XXX why two pageurls???
  const url = PageUrls.UserOtherProfile;
  const details_url = NET.Make_Navigation_Url(url , userModel.username);
  const photo_url   = NET.Make_External_Image_Url(userModel.photoUrl);

  //
  return (
    <div className={styles.container}>
      <Link href={details_url}>
        <CachedImage
          imageUrl={photo_url}
          imagePlaceholderUrl={ImageDefaults.PLACEHOLDER_URL_USER_GRID_ITEM}
        />
      </Link>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default UserGridItem;
