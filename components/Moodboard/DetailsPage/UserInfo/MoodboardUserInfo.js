//----------------------------------------------------------------------------//
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
//  File      : MoodboardUserInfo.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import React, { useRef } from "react";
import { useState, useEffect } from "react";
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import UserService from "@/services/UserService";
import _Link from "@/components/Link"
import ActionButton from "@/components/UI/Buttons/ActionButton";
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
// -----------------------------------------------------------------------------
import styles from "./MoodboardUserInfo.module.css";
import { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";
import ProfileImage from "@/components/UI/Images/ProfileImage";

// -----------------------------------------------------------------------------
function MoodboardUserInfo({moodboardModel})
{
  //
  const followButtonRef = useRef();
  const [ownerUserModel, setOwnerUserModel] = useState(null);
  const loggedUser = useLoggedUserContext();

  //
  useEffect(()=>{
    const _GetUser = async ()=>{
      const result = await UserService.GetUserWithId(moodboardModel.owner);
      if(!result.IsValid()) {
        ToastUtils.ResultError(result);
        return;
      }

      const user_model = result.value;
      setOwnerUserModel(user_model);
    }

    if(moodboardModel.owner) {
      _GetUser();
    }
  }, [moodboardModel.owner]);

  //
  const _HandleFollowClicked = async () =>{
    const result = await UserService.ToggleFollowUser({
      userId: loggedUser._id,
      targetId: ownerUserModel._id
    });

    if(!result.IsValid()) {
      ToastUtils.ResultError(result);
      return;
    }

    const value = result.value;
    followButtonRef.current.innerText = (value.isFollowing)
      ? "Unfollow"
      : "Follow";
  }

  function _CalculateFollowButtonText()
  {
    const targetId = ownerUserModel._id;
    if(loggedUser.following.includes(targetId)) {
      return "Unfollow"
    }
    return "Follow";
  }


  // Not ready...
  if(!ownerUserModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  const user_url = NET.Make_Navigation_Url(PageUrls.UserOtherProfile, ownerUserModel.username);

  return (
    <div className={styles.container}>
      <div>
        <span>Created by: </span>
        <_Link href={user_url}>
          <div className={styles.userInfoContainer}>
            <ProfileImage
              className={styles.profilePhoto}
              userModel={ownerUserModel}
            />

            <div>
              {ownerUserModel.fullname}
              @{ownerUserModel.username}
            </div>
          </div>
        </_Link>
      </div>
      <div>
        {
          (
            (ownerUserModel && ownerUserModel._id) &&
            (loggedUser     && loggedUser._id)     &&
            (loggedUser._id != ownerUserModel._id)
          ) &&
          (
            <ActionButton
              ref={followButtonRef}
              onClick={_HandleFollowClicked}>
              {_CalculateFollowButtonText()}
            </ActionButton>
          )
        }
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardUserInfo;