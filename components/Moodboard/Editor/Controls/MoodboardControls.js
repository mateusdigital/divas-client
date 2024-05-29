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
import CategoriesSelection from "./CategoryControls/CategoriesSelection/CategoriesSelection";
import ItemsSelection from "./ItemControls/ItemSelection/ItemSelection.js";

// -----------------------------------------------------------------------------
import styles from "./MoodboardControls.module.css";

// -----------------------------------------------------------------------------
function Component()
{
  //
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(null);

  //
  const _Render = () => {
    if(!currentSelectedCategory) {
      return (<>
        <div className={styles.controlsContainer}>
          {/* Select Category Input */}
          <div className={styles.selectCategoryContainer}>
            <span>Select new category</span>
            <input type="text"></input>
          </div>
          {/* -Select Category Input */}

          {/* Moodboard Categories */}
          <CategoriesSelection OnSelectedCategoryChanged={(category)=>{
              setCurrentSelectedCategory(category)
          }}>
          </CategoriesSelection>
          {/* -Moodboard Categories */}
        </div>
      </>);
    };

    return (<>
      <ItemsSelection
        category={currentSelectedCategory}
        OnSelectedCategoryChanged={(category)=>{
          setCurrentSelectedCategory(category);
      }}>
      </ItemsSelection>
    </>);
  }

  //
  return (<>
      {_Render()}
      <span>
        {currentSelectedCategory ? currentSelectedCategory : "no category"}
      </span>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;