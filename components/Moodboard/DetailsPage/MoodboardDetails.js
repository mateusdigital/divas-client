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
//  File      : MoodboardDetails.js                                           //
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
import React, { useRef, useState } from "react";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
import ToastUtils from "@/utils/Toast";
// -----------------------------------------------------------------------------
import MainLayout from "@/components/Layout/MainLayout";
import MaterialIcon from "@/components/MaterialIcon";
import TextButton from "@/components/UI/Buttons/TextButton";
// -----------------------------------------------------------------------------
import UserLoggedContext, { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";
import MoodboardService from "@/services/MoodboardService";
// -----------------------------------------------------------------------------
import MoodboardUserInfo from "./UserInfo/MoodboardUserInfo";
import MoodboardComments from "./Comments/MoodboardComments";
import MoodboardItemsCarrousel from "./ItemsCarrousel/MoodboardItemsCarrousel";
// -----------------------------------------------------------------------------
import CachedImage from "@/components/UI/Images/CachedImage";
import ImageDefaults from "@/components/UI/Images/ImageDefaults";
// -----------------------------------------------------------------------------
import styles from "./MoodboardDetails.module.css";

// -----------------------------------------------------------------------------
function _Content({moodboardModel})
{
  if (!moodboardModel) {
    return;
  }

  //
  const moodboard_title = moodboardModel.title
    ? moodboardModel.title
    : "Untitled...";


  // ---------------------------------------------------------------------------
  const moodboardCommentsRef = useRef();
  const userModel = useLoggedUserContext();

  const [commentsCount, setCommentsCount] = useState(moodboardModel.commentsCount);
  const [likesCount, setLikesCount] = useState(moodboardModel.likesCount);
  const [likeButtonClassName, setLikeButtonClassName] = useState(styles.statIcon);

  // ---------------------------------------------------------------------------
  const _HandleAddCollection = () => {
  };

  const _HandleShareClicked = () => {
  };

  const _HandleCommentsClicked = () => {
  };

  //
  const _HandleLikeClicked = async () => {
    const result = await MoodboardService.ToggleLikeForMoodboardWithId({
      moodboardId: moodboardModel._id,
      ownerId: userModel._id,
      targetUserId: moodboardModel.owner
    });

    if(!result.IsValid()) {
      ToastUtils.ResultError(result);
      return;
    }

    const value = result.value;
    setLikesCount(value.likesCount);

    if(value.isLiked) {
      setLikeButtonClassName(`${styles.statIcon} ${styles.likedIcon}`);
    } else {
      setLikeButtonClassName(`${styles.statIcon}`);
    }
  };

  const _HandleCommentsChanged = (count)=>{
    setCommentsCount(count);
  }


  //
  return (
    <>
      <div className={styles.container}>
        {/* Moodboard Image */}
        <div className={styles.imageContainer}>
          <CachedImage
            imageUrl={moodboardModel.photoUrl}
            imagePlaceholderUrl={ImageDefaults.PLACEHOLDER_URL_MOODBOARD_DETAILS}
          />
        </div>

        {/* Info Container */}
        <div className={styles.infoContainer}>
          <MoodboardUserInfo moodboardModel={moodboardModel}/>

          {/* Design Item Info */}
          <div className={styles.itemInfoContainer}>
            <span className={styles.itemInfoTitle}>
              {moodboard_title}
            </span>

            <span className={styles.itemInfoDescription}>
              {moodboardModel.description}
            </span>
          </div>
          {/* -Design Item Info */}

          {/* Other */}
          <div className={styles.otherContainer}>
            {/* Collection Button */}
            <TextButton onClick={_HandleAddCollection}>
              Add to Collection
            </TextButton>

            <div className={styles.statsContainer}>
              {/* Share Button */}
              <MaterialIcon
                className={styles.statIcon}
                icon="share"
                onClick={_HandleShareClicked}
              />

              {/* Comments Button */}
              <MaterialIcon
                className={styles.statIcon}
                icon="chat_bubble"
                onClick={_HandleCommentsClicked}
              >
                {commentsCount}
              </MaterialIcon>

              {/* Likes button */}
              <MaterialIcon
                className={likeButtonClassName}
                icon="favorite"
                onClick={_HandleLikeClicked}
              >
                {likesCount}
              </MaterialIcon>
            </div>
          </div>
          {/* -Other */}

          {/* Comments  */}
          <MoodboardComments
            moodboardModel={moodboardModel}
            onCommentsChanged={_HandleCommentsChanged}
          />
          {/* -Comments */}
        </div>
        {/* -Info Container */}
      </div>

      {/* Items Carrousel */}
      <MoodboardItemsCarrousel moodboardModel={moodboardModel}/>
      {/* -Items Carrousel */}
  </>);
}

function MoodboardDetails({moodboardModel})
{
  return (
    <MainLayout>
      <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
        <_Content moodboardModel={moodboardModel}/>
      </UserLoggedContext>
    </MainLayout>
  )
}
// -----------------------------------------------------------------------------
export default MoodboardDetails;
