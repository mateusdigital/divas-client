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
//  File      : CategoryButtonBottom.js                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-14                                                    //
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
import style from "./CategoryButton.module.css";

// -----------------------------------------------------------------------------
function Component({icon, content, handler})
{
  return (
    <div className={style.categoryContainer} onClick={handler}>
      <MaterialIcon className={style.categoryIcon} icon={icon}>
      </MaterialIcon>

      <span className={style.categoryTextContent}>
        {content}
      </span>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default Component;