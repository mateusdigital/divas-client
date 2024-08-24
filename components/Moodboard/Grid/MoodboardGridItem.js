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
import React from 'react';
// -----------------------------------------------------------------------------
import NET from '@/app/NET';
import _Link from '@/components/Link';
// -----------------------------------------------------------------------------
import { PageUrls } from '@/utils/PageUtils';
// -----------------------------------------------------------------------------
import CachedImage from '@/components/UI/Images/CachedImage';
import ImageDefaults from '@/components/UI/Images/ImageDefaults';
// -----------------------------------------------------------------------------
import styles from "./MoodboardGridItem.module.css";


// ------------------------------------------n-----------------------------------
function MoodboardGridItem({moodboardModel})
{
  //
  const details_url = NET.Make_Navigation_Url(PageUrls.MoodboardDetails, moodboardModel._id);
  const photo_url   = NET.Make_External_Image_Url(moodboardModel.photoUrl);

  //
  return (
    <div className={styles.container}>
      <_Link href={details_url}>
        <CachedImage
          imageUrl={photo_url}
          imagePlaceholderUrl={ImageDefaults.PLACEHOLDER_URL_MOODBOARD_GRID_ITEM}
        />
      </_Link>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGridItem;
