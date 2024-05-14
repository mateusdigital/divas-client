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
//  File      : MoodboardControls.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-02                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import CategoriesSelection from "./CategoriesSelection/CategoriesSelection";
// -----------------------------------------------------------------------------
import styles from "./MoodboardControls.module.css";

// -----------------------------------------------------------------------------
function MoodboardControls()
{
  return (
    <div className={styles.controlsContainer}>
      {/* Select Category Input */}
      <div className={styles.selectCategoryContainer}>
        <span>Select new category</span>
        <input type="text"></input>
      </div>
      {/* -Select Category Input */}

      {/* Moodboard Categories */}
      <CategoriesSelection>
      </CategoriesSelection>
      {/* -Moodboard Categories */}
    </div>
  )
}

// -----------------------------------------------------------------------------
export default MoodboardControls;