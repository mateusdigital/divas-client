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
//  File      : sidebar.js                                                    //
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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
//
import Constants from '@/app/Constants';
//
import styles from './Sidebar.module.css';


// -----------------------------------------------------------------------------
function Sidebar() {
  //
  //

  return (
    <div className={styles.sideBarContainer}>
      <img src="/img/logo.png" alt="Logo" />

      <div className={styles.sideBarItemsContainer}>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>Profile</span>
        </div>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>Create</span>
        </div>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>Feed</span>
        </div>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>Discover</span>
        </div>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>Messages</span>
        </div>

        <div className={styles.sideBarItemContainer}>
          <span className={`material-symbols-outlined ${styles.sideBarItemIcon}`}>favorite</span>
          <span className={styles.sideBarItemTitle}>More</span>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
