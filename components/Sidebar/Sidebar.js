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
import { useEffect, useState } from "react";
import Link from "next/link";
//
import App from "@/models/App";
//
import styles from './Sidebar.module.css';


// -----------------------------------------------------------------------------
function Sidebar()
{
  const material_symbol_style = "material-symbols-outlined";

  //
  const [loggedUser, setLoggedUser] = useState(null);
  useEffect(() => {
    const GetLoggedUser = async () => {
      const logged_user = await App.GetCurrentLoggedUser();
      setLoggedUser(logged_user);
    }
    GetLoggedUser();
  }, []);

  //
  return (
    <div className={styles.sideBarContainer}>
      {/* Logo */}
      <img src="/img/logo.png" alt="Logo" />

      {/* Items */}
      <div className={styles.sideBarItemsContainer}>
        {/* Profile */}
        <Link href="/profile" className={styles.sideBarItemContainer}>
          <img
            className={styles.sideBarItemProfileImage}
            src={loggedUser ? loggedUser.profilePhotoTinyUrl : ""}>
          </img>
          <span className={styles.sideBarItemTitle}>Profile</span>
        </Link>

        {/* Create */}
        <Link href="/create" className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>add_box</span>
          <span className={styles.sideBarItemTitle}>Create</span>
        </Link>

        {/* Feed */}
        <Link href="/feed" className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>rss_feed</span>
          <span className={styles.sideBarItemTitle}>Feed</span>
        </Link>

        {/* Discover */}
        <Link href="/discover" className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>explore</span>
          <span className={styles.sideBarItemTitle}>Discover</span>
        </Link>

        {/* Messages */}
        <Link href="/messages" className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>chat</span>
          <span className={styles.sideBarItemTitle}>Messages</span>
        </Link>

        {/* More */}
        <Link href="/more" className={styles.sideBarItemContainer}>
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>menu</span>
          <span className={styles.sideBarItemTitle}>More</span>
        </Link>

      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default Sidebar;
