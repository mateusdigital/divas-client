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
//  File      : MoodboardGridItem.js                                          //
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
import Link from 'next/link';
//
import NET from '@/app/NET';
//
import styles from "./MoodboardGridItem.module.css";


// -----------------------------------------------------------------------------
function MoodboardGridItem({moodboardModel})
{
  const moodboard_details_url = NET.Make_Navigation_Url("moodboard", moodboardModel._id);
  return (
    <div>
      <Link href={moodboard_details_url}>
        <img src={moodboardModel.imageUrl}></img>
      </Link>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGridItem;
