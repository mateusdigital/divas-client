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
//  File      : MaterialIcon.js                                               //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-16                                                    //
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
const SYMBOL_STYLE = "material-symbols-outlined";



// -----------------------------------------------------------------------------
function MaterialIcon({icon, iconStyle, className, onClick, children})
{
  //
  iconStyle = iconStyle || "";
  className = className || "";

  //
  if(onClick) {
    className += " clickable";
  }

  //
  return (
    <div className={className} onClick={onClick}>
      <span className={`${SYMBOL_STYLE} ${iconStyle}`}>{icon}</span>
      {children}
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MaterialIcon;
