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
import React from "react";
// -----------------------------------------------------------------------------
import Link from "next/link";
import { useState, useEffect } from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import ToastUtils from "@/utils/Toast";
import UserService from "@/services/UserService";
import ActionButton from "@/components/UI/Buttons/ActionButton";
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
// -----------------------------------------------------------------------------
import styles from "./MoodboardUserInfo.module.css";
import { PageUrls } from "@/utils/PageUtils";

// -----------------------------------------------------------------------------
function MoodboardUserInfo({moodboardModel})
{
  //
  const [ownerUserModel, setOwnerUserModel] = useState(null);

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


  // Not ready...
  if(!ownerUserModel) {
    return <div>Loading...</div>;
  }

  // Ready...

  const username    = ownerUserModel.username;
  const profile_url = NET.Make_Navigation_Url(PageUrls.UserOtherProfile, username);

  return (
    <div className={styles.container}>
      <div>
        <span>Created by: </span>
        <span className={styles.userName}><Link href={profile_url}>{username}</Link></span>
      </div>
      <div>
        <ActionButton>Follow</ActionButton>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardUserInfo;