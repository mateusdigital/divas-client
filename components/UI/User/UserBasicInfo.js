import React from 'react';
import NET from '@/app/NET';
import {PageUrls} from "@/utils/PageUtils"
import _Link from '@/components/Link';

import styles from './UserBasicInfo.module.css';

const UserBasicInfo = ({userModel}) => {
  if(!userModel) {
    return;
  }

  // ---------------------------------------------------------------------------
  const user_url = NET.Make_Navigation_Url(PageUrls.UserOtherProfile, userModel.username);

  // ---------------------------------------------------------------------------
  return (<>
    <_Link href={user_url}>
      <UserBasicInfo.Container
        userModel={userModel}
        className="customContainerClass"
      >
        <div>
          <UserBasicInfo.ProfilePhoto className={styles.profilePhoto} />
        </div>
        <div>
          <UserBasicInfo.Name className={styles.name}/>
          <UserBasicInfo.Username className={styles.username} />
        </div>
      </UserBasicInfo.Container>
    </_Link>
  </>)
};

// -----------------------------------------------------------------------------
UserBasicInfo.Container = ({ userModel, children, className }) => {
  return (
    <div className={`${styles.itemContainer} ${className}`}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { userModel });
      })}
    </div>
  );
};

// -----------------------------------------------------------------------------
UserBasicInfo.ProfilePhoto = ({ userModel, className }) => {
  return (
    <ProfileImage
      className={`${styles.profilePhoto} ${className}`}
      userModel={userModel}
    />
  );
};

// -----------------------------------------------------------------------------
UserBasicInfo.Name = ({ userModel, className, children }) => {
  return (
    <div className={className}>
      {children || userModel.fullname}
    </div>
  );
};

// -----------------------------------------------------------------------------
UserBasicInfo.Username = ({ userModel, className }) => {
  return (
    <div className={className}>
      @{userModel.username}
    </div>
  );
};

export default UserBasicInfo;