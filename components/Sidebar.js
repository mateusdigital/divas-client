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
  const material_symbol_style = "material-symbols-outlined";

  return (
    <div className={styles.sideBarContainer}>
      {/* Logo */}
      <img src="/img/logo.png" alt="Logo" />

      {/* Items */}
      <div className={styles.sideBarItemsContainer}>
        {/* Profile */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}></span>
          <span className={styles.sideBarItemTitle}>Profile</span>
        </div>

        {/* Create */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>add_box</span>
          <span className={styles.sideBarItemTitle}>Create</span>
        </div>

        {/* Feed */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>rss_feed</span>
          <span className={styles.sideBarItemTitle}>Feed</span>
        </div>

        {/* Discover */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>explore</span>
          <span className={styles.sideBarItemTitle}>Discover</span>
        </div>

        {/* Messages */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>chat</span>
          <span className={styles.sideBarItemTitle}>Messages</span>
        </div>

        {/* More */}
        <div className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>menu</span>
          <span className={styles.sideBarItemTitle}>More</span>
        </div>

      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default Sidebar;
