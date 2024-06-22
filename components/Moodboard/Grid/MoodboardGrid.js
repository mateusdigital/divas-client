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
//
import NET from '@/app/NET';
import ToastUtils from '@/utils/Toast';
//
import MoodboardGridItem from './MoodboardGridItem';
//
import styles from "./MoodboardGrid.module.css";
import App from '@/models/App';


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
        {moodboards.map((moodboard) => (
          <MoodboardGridItem key={moodboard._id} moodboardModel={moodboard} />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGrid;