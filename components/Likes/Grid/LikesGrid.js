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
import React from 'react';
import { useEffect, useState } from 'react';
// -----------------------------------------------------------------------------
import ToastUtils from '@/utils/Toast';
// -----------------------------------------------------------------------------
import MoodboardGrid from '@/components/Moodboard/Grid/MoodboardGrid';
import MoodboardService from "@/services/MoodboardService";

// -----------------------------------------------------------------------------
function LikesGrid({ userModel })
{
    const _FetchMoodboards = async (userModel, setMoodboardsFunc) => {
      const result = await MoodboardService.GetAllLikedByUser(userModel._id);
      if(result.IsError()) {
        ToastUtils.ResultError(result);
        return;
      }

      setMoodboardsFunc(result.value);
    };
  // ---------------------------------------------------------------------------
  return (<>
    <MoodboardGrid
      userModel={userModel}
      fetchMoodboardsFunc={_FetchMoodboards}/>
  </>)
}

// -----------------------------------------------------------------------------
export default LikesGrid;