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
//  File      : ItemsGrid.js                                                  //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-29                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import {useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import MoodboardService from "@/services/MoodboardService.js";
// -----------------------------------------------------------------------------
import Item from "../Item/Item.js";
// -----------------------------------------------------------------------------
import styles from "./ItemsGrid.module.css";


// -----------------------------------------------------------------------------
function ItemsGrid({category})
{
  //
  const [items, setItems] = useState(null);

  //
  useEffect(() => {
    const _GetItems = async () => {
      const value = await MoodboardService.GetMoodboardItemsForCategory(category);
      setItems(value);
    };

    if (category) {
      _GetItems();
    }
  }, [category]);


  //
  if (!items) {
    return (
      <span>Loading...</span>
    );
  }

  //
  return (
    <div className={styles.gridContainer}>
      {items.map((data, index) => {
        return <Item key={index} itemModel={data}></Item>;
      })}
    </div>
  );
}

// -----------------------------------------------------------------------------
export default ItemsGrid;
