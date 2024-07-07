//~---------------------------------------------------------------------------//
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
//  File      : LikesGrid.js                                                  //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-01                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//

// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
// -----------------------------------------------------------------------------
import App from '@/models/App';
// -----------------------------------------------------------------------------
import EmptyGridPlaceholder from "@/components/UI/Grid/EmptyGridPlaceholder.js";
import DesignGridItem from "@/components/Moodboard/Grid/MoodboardGrid";
// -----------------------------------------------------------------------------
import styles from "./LikesGrid.module.css";


// -----------------------------------------------------------------------------
function LikesGrid({ userModel })
{
  const [likeItems, setLikeItems] = useState([]);

  //
  useEffect(() => {
    const _FetchLikes = async () => {
      try {
        if(userModel.likes.length == 0) {
          return;
        }

        const result = await App.GetMultipleMoodboardWithIds(userModel.moodboards);
        if(result.IsError()) {
          ToastUtils.ResultError(result);
          return;
        }
      }
      catch(ex) {

      }
    };

    _FetchLikes();
  }, []);

  //
  return (
    <div className={styles.designsGridContainer}>
      <div className={styles.designsGrid}>
        { likeItems.length != 0 &&
          likeItems.map((likeItem) => (
            <DesignGridItem key={likeItem._id} moodboard={likeItem} />
          ))
        }
      </div>
      { likeItems.length == 0 &&
          <EmptyGridPlaceholder/>
      }
    </div>
  );
}

// -----------------------------------------------------------------------------
export default LikesGrid;