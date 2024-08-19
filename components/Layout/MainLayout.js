
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
//  File      : MainLayout.js                                                 //
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
// -----------------------------------------------------------------------------
import Sidebar from "@/components/Sidebar/Sidebar";
// -----------------------------------------------------------------------------
import styles from "./MainLayout.module.css";


// -----------------------------------------------------------------------------
function MainLayout({ children, pageName}) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.layoutContainer}>
        <Sidebar pageName={pageName}/>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MainLayout;
