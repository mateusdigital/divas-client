// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
// -----------------------------------------------------------------------------
import CachedImage   from "./CachedImage";
import ImageDefaults from "./ImageDefaults";
// -----------------------------------------------------------------------------
import { useLoggedUserContext } from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import styles from "./ProfileImage.module.css";

// -----------------------------------------------------------------------------
function ProfileImage({userModel, className})
{
  if(!userModel) {
    userModel = useLoggedUserContext();
  }

  if(!userModel) {
    return;
  }

  const class_name = `${className}  ${styles.photoContainer}`;
  const image_url  = NET.Make_External_Image_Url(userModel.profilePhotoUrl)
  const image_alt  = `Profile image for: ${userModel.username}`;

  //
  return (<>
    <div className={class_name}>
      <CachedImage
        className={styles.photoContainerImg}
        imageUrl={image_url}
        imagePlaceholderUrl={ImageDefaults.PLACEHOLDER_URL_PROFILE}
        alt={image_alt}
      />
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default ProfileImage;