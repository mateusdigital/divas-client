// -----------------------------------------------------------------------------
import UserModel from "@/models/UserModel.js";
import React from 'react';
// -----------------------------------------------------------------------------
import _Link from '@/components/Link';
import ProfileImage from "@/components/UI/Images/ProfileImage";
// -----------------------------------------------------------------------------
import styles from './UserBasicInfo.module.css';


// -----------------------------------------------------------------------------
const UserBasicInfo = ({userModel}) => {
  if(!userModel) {
    return;
  }

  // ---------------------------------------------------------------------------
  return (<>
    <div className={styles.container}>
      <UserBasicInfo.ProfilePhoto
        className={styles.profilePhoto}
        userModel={userModel}
      />

      <div className={styles.nameContainer}>
        <UserBasicInfo.Name     userModel={userModel} />
        <UserBasicInfo.Username userModel={userModel} />
      </div>
    </div>
  </>)
};


// -----------------------------------------------------------------------------
UserBasicInfo.ProfilePhoto = ({ userModel, className }) => {
  if(!userModel) {
    return;
  }

  const user_url   = UserModel.ProfileUrl(userModel);
  const class_name = `${styles.profilePhoto} ${className}`;

  console.log(styles.profilePhoto);
  return (
    <_Link href={user_url}>
      <ProfileImage
        className={class_name}
        userModel={userModel}
      />
    </_Link>
  );
};

// -----------------------------------------------------------------------------
UserBasicInfo.Name = ({ userModel, className, children }) => {
  if(!userModel) {
    return;
  }

  const user_url   = UserModel.ProfileUrl(userModel);
  const class_name = `${styles.name} ` + ((className) ? className : "");

  return (
    <_Link href={user_url} className={class_name}>
      {children || userModel.fullname}
    </_Link>
  );
};

// -----------------------------------------------------------------------------
UserBasicInfo.Username = ({ userModel, className }) => {
  if(!userModel) {
    return;
  }

  const user_url   = UserModel.ProfileUrl(userModel);
  const class_name = `${styles.username} ` + ((className) ? className : "");

  return (
    <_Link href={user_url} className={class_name}>
      @{userModel.username}
    </_Link>
  );
};

export default UserBasicInfo;
