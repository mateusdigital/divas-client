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
//
import MainLayout from "@/components/Layout/MainLayout";
import MaterialIcon from "@/components/MaterialIcon";
import MoodboardUserInfo from "./MoodboardUserInfo";
import MoodboardComments from "./MoodboardComments";
import MoodboardItemsCarrousel from "./MoodboardItemsCarrousel";

//
import styles from "./MoodboardDetails.module.css";

// -----------------------------------------------------------------------------
function MoodboardDetails({moodboardModel})
{
  //
  return (
    <MainLayout>
      <div className={styles.moodboardContainer}>
        <div className={styles.moodboardImageContainer}>
          <img src={moodboardModel.imageUrl}></img>
        </div>

        {/* Info Container */}
        <div className={styles.moodboardInfoContainer}>
          <MoodboardUserInfo moodboardModel={moodboardModel}>
          </MoodboardUserInfo>

          {/* Design Item Info */}
          <div className={styles.moodboardItemInfoContainer}>
            <span className={styles.moodboardItemTitle}>
              {moodboardModel.title ? moodboardModel.title : "Untitled..."}
            </span>
            <span className={styles.moodboardItemDescription}>
              {moodboardModel.description}
            </span>
          </div>
          {/* -Design Item Info */}

          {/* Comments  */}
          <MoodboardComments moodboardModel={moodboardModel}>
          </MoodboardComments>
          {/* -Comments */}

          {/* Other */}
          <div className={styles.moodboardOtherContainer}>
            {/* Collection Button */}
            <button>
              Add to collection
            </button>

            <div className={styles.moodboardStatsContainer}>
              {/* Share Button */}
              <button>
                <MaterialIcon
                  className={styles.moodboardOtherStat}
                  icon="share">
                </MaterialIcon>
              </button>

              {/* Comments Button */}
              <button>
                <MaterialIcon
                  className={styles.moodboardOtherStat}
                  icon="chat_bubble">
                    {moodboardModel.commentsCount}
                </MaterialIcon>
              </button>

              {/* Likes button */}
              <button>
                <MaterialIcon
                  className={styles.moodboardOtherStat}
                  icon="favorite">
                    {moodboardModel.likesCount}
                </MaterialIcon>
              </button>

            </div>
          </div>
          {/* -Other */}
        </div>
        {/* -Info Container */}

        {/* Items Carrousel */}
        <MoodboardItemsCarrousel moodboardModel={moodboardModel}>
        </MoodboardItemsCarrousel>
        {/* -Items Carrousel */}
      </div>
    </MainLayout>
  )
}

// -----------------------------------------------------------------------------
export default MoodboardDetails;