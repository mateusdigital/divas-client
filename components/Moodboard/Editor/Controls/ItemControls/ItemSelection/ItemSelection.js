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
//  File      : ItemSelection.js                                              //
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
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import ItemsGrid from "../ItemsGrid/ItemsGrid.js";
import styles from "./ItemSelection.module.css";

// -----------------------------------------------------------------------------
function Component({category, OnSelectedCategoryChanged})
{
  //
  return (<>
    <button onClick={()=>{ OnSelectedCategoryChanged(null); }}>
      <MaterialIcon icon="arrow_back_ios_new"></MaterialIcon>
      <span>Select new category</span>
    </button>

    <input type="text">
    </input>

    <ItemsGrid
      category={category}
    >
    </ItemsGrid>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;