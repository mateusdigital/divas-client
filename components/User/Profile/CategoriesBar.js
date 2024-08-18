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
import React from "react";
import { useEffect, useState } from "react";
// -----------------------------------------------------------------------------
import styles from "./CategoriesBar.module.css";



export function CategoriesBar({ children })
{
  return <div className={styles.contentContainer}>{children}</div>;
}

export function CategoriesBarItem({ children, onClick, isSelected})
{
  //
  const class_name = styles.title + " " + ((isSelected) ? styles.selected : "");

  //
  return (
    <span className={class_name} onClick={onClick}>
      {children}
    </span>
  )
}