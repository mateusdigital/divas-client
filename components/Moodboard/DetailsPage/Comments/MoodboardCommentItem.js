

//
import styles from "./MoodboardComments.module.css";

// -----------------------------------------------------------------------------
function MoodboardCommentItem({commentItemModel})
{
  // Ready...
  return (
    <div className={styles.commentContainer}>
      <img className={styles.userImage} src={commentItemModel.userImage}></img>
      <span className={styles.userName}>{commentItemModel.userName}</span>
      <span className={styles.commentContent}>{commentItemModel.commentContent}</span>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardComments;