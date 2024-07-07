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
import { useState } from "react";
// -----------------------------------------------------------------------------
import Link from "next/link";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import NET from "@/app/NET";
import UserLogged, {useLoggedUserContext } from "@/components/Logic/UserLogged";
import PageUrls from "@/utils/PageUrls";
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./Sidebar.module.css";


// -----------------------------------------------------------------------------
function _SidebarLink({href, children})
{
  if(!href){
    debugger;
  }

  const active = (_PageName == href) ? styles.sideBarActive : "";
  const class_name = `${styles.sideBarItemContainer} ${active}`;

  return (
    <Link href={href}
      className={class_name}>
      {children}
    </Link>
  );
}

// -----------------------------------------------------------------------------
function _SidebarItem({icon, children})
{
  return (
    <MaterialIcon
      className={styles.sideBarItemContainer}
      iconStyle={styles.sideBarItemIcon}
      icon={icon}
    >
      <span className={styles.sideBarItemTitle}>
        {children}
      </span>
    </MaterialIcon>
  )
}
let _PageName = null;

// -----------------------------------------------------------------------------
function _Content({pageName})
{
  const material_symbol_style = "material-symbols-outlined";
  const loggedUser = useLoggedUserContext();
  const [ currentPageName, setCurrentPageName ] = useState(pageName);

  if(!loggedUser) {
    return null;
  }

  _PageName = currentPageName;

  //
  return (
    <div className={styles.contentContainer}>
      {/* Logo */}
      <DivasLogo className={styles.sideBarLogo}/>

      {/* Items */}
      <div className={styles.sideBarItemsContainer}>
        {/* Profile */}
        <_SidebarLink href={PageUrls.UserOwnProfile}>
          <img
            className={styles.sideBarItemProfileImage}
            src={
              loggedUser ? NET.Make_Local_Image_Url(loggedUser.profilePhotoTinyUrl) : ""
            }>
          </img>
          <span className={styles.sideBarItemTitle}>Profile</span>
        </_SidebarLink>

        {/* Create */}
        <_SidebarLink href={PageUrls.MoodboardCreate}>
          <_SidebarItem icon="add_box"> Create </_SidebarItem>
        </_SidebarLink>

        {/* Feed */}
        <_SidebarLink href={PageUrls.FeedUser}>
          <_SidebarItem icon="rss_feed"> Feed </_SidebarItem>
        </_SidebarLink>

        {/* Discover */}
        <_SidebarLink href={PageUrls.FeedMain}>
          <_SidebarItem icon="explore"> Discover </_SidebarItem>
        </_SidebarLink>

        {/* Messages */}
        <_SidebarLink href={PageUrls.UserMessages}>
          <_SidebarItem icon="message"> Messages </_SidebarItem>
        </_SidebarLink>

        {/* More */}
        <_SidebarLink href={PageUrls.SidebarMore}>
          <_SidebarItem icon="menu"> More </_SidebarItem>
        </_SidebarLink>


        {/* More */}
        <Link
          href="/login"
          className={styles.sideBarItemContainer}
          onClick={()=>{ App.TryToLogoutUser(); }}
          >
          <span className={`${material_symbol_style} ${styles.sideBarItemIcon}`}>menu</span>
          logout
        </Link>

      </div>
    </div>
  );
}
// -----------------------------------------------------------------------------
function Sidebar({pageName})
{
  return (
    <UserLogged requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <_Content pageName={pageName}/>
    </UserLogged>
  );
}
// -----------------------------------------------------------------------------
export default Sidebar;
