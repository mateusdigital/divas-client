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
import React from 'react';
// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
// -----------------------------------------------------------------------------
import ToastUtils from '@/utils/Toast';
// -----------------------------------------------------------------------------
import EmptyGridPlaceholder from "@/components/UI/Grid/EmptyGridPlaceholder.js";
import MoodboardService from "@/services/MoodboardService";
// -----------------------------------------------------------------------------
import MoodboardGridItem from './MoodboardGridItem';
// -----------------------------------------------------------------------------
import styles from "./MoodboardGrid.module.css";


// -----------------------------------------------------------------------------
function MoodboardGrid({ userModel, fetchMoodboardsFunc, onClick })
{
  //
  const [moodboards, setMoodboards] = useState([]);

  if(!fetchMoodboardsFunc) {
    fetchMoodboardsFunc = async (userModel, setMoodboardsFunc) => {
      if(userModel.moodboards.length == 0) {
        return;
      }

      const result = await MoodboardService.GetAllForUserId(userModel._id);
      if(result.IsError()) {
        ToastUtils.ResultError(result);
        return;
      }

      setMoodboardsFunc(result.value);
    };
  }

  //
  useEffect(() => {
    fetchMoodboardsFunc(userModel, setMoodboards);
  }, [userModel.moodboards]);

  //
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {
          moodboards.length != 0 &&
          moodboards.map((moodboard) => (
            <MoodboardGridItem
              key={moodboard._id}
              moodboardModel={moodboard}
              onClick={onClick}
            />
          ))
        }
      </div>


      {/* There's no moodboards add a placeholder */}
      {
        moodboards.length == 0 &&
          <EmptyGridPlaceholder/>
      }
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGrid;
