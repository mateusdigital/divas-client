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
//  File      : CategoriesBar.js                                              //
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
import { useEffect, useState } from "react";
//
import CATEGORIES_BAR_NAMES from "./CategoriesBarNames";
//
import styles from "./CategoriesBar.module.css";


// -----------------------------------------------------------------------------
function CategoriesBar({currentSelectedCategory, OnCategoryClickCallback}) {
  //
  const [selectedCategory, setSelectedCategory] = useState(currentSelectedCategory);

  //
  const handle_category_click = (category) => {
    setSelectedCategory(category);
    OnCategoryClickCallback(category);
  };

  //
  return (
    <div className={styles.categoriesBarItemsContainer}>
      {CATEGORIES_BAR_NAMES.map((category, index) => (
        <div
          key={index} className={styles.categoriesBarItemContainer}
          onClick={() => handle_category_click(category)}
        >
          <span
            className={`${styles.categoriesBarItemTitle} ${
              selectedCategory === category
                ? styles.selectedCategory
                : styles.unselectedCategory
            }`}
          >
            {category}
          </span>
        </div>
      ))}
    </div>
  );
}

// -----------------------------------------------------------------------------
export default CategoriesBar;
