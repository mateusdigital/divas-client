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
//  File      : MoodboardGrid.js                                              //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
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
import ToastUtils from '@/utils/Toast';
// -----------------------------------------------------------------------------
import EmptyGridPlaceholder from "@/components/ui/Grid/EmptyGridPlaceholder.js";
import MoodboardGridItem from './MoodboardGridItem';
// -----------------------------------------------------------------------------
import styles from "./MoodboardGrid.module.css";


// -----------------------------------------------------------------------------
function MoodboardGrid({ userModel })
{
  //
  const [moodboards, setMoodboards] = useState([]);

  //
  useEffect(() => {
    const _FetchMoodboards = async () => {
      if(userModel.moodboards.length == 0) {
        return;
      }

      const result = await App.GetMultipleMoodboardWithIds(userModel.moodboards);
      if(result.IsError()) {
        ToastUtils.ResultError(result);
        return;
      }

      setMoodboards(result.value);
    };

    _FetchMoodboards();
  }, [userModel.moodboards]);

  //
  return (
    <div className={styles.moodboardGridContainer}>
      <div className={styles.moodboardGrid}>
        { moodboards.length != 0 &&
          moodboards.map((moodboard) => (
            <MoodboardGridItem key={moodboard._id} moodboardModel={moodboard} />
          ))
        }
      </div>

        {
          moodboards.length == 0 &&
            <EmptyGridPlaceholder/>
        }
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGrid;