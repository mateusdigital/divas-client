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
  const details_url = NET.Make_Navigation_Url("moodboard", moodboardModel._id);
  const photo_url   = NET.Make_Local_Image_Url(moodboardModel.photoUrl);

  return (
    <div>
      <Link href={details_url}>
        <img src={photo_url}></img>
      </Link>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGridItem;
