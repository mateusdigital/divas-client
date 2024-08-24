// -----------------------------------------------------------------------------
import {User} from "@/divas-shared/shared/API/Endpoints.js";
import UserModel from "@/models/UserModel.js";
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

  let actualUserModel = useLoggedUserContext();
  if(userModel) {
    actualUserModel = userModel;
  }

  if(!actualUserModel) {
    return;
  }

  const class_name = `${className}  ${styles.photoContainer}`;
  const image_url  = UserModel.ProfileImageUrl(actualUserModel);
  const image_alt  = `Profile image for: ${actualUserModel.username}`;

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
