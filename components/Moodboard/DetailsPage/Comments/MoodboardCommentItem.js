
// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCommentItem.module.css";
import ProfileImage from "@/components/UI/Images/ProfileImage";

// -----------------------------------------------------------------------------
function MoodboardCommentItem({commentModel})
{
  const user_model = commentModel.targetUser;

  // Ready...
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <ProfileImage
          userModel={user_model}
          className={styles.profileImage}
          />
        <span className={styles.userName}>{user_model.username}:</span>
      </div>

      <div className={styles.commentContainer}>
        <span className={styles.commentContent}>
          {commentModel.content}
        </span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardCommentItem;