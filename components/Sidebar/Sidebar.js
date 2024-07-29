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
import React from "react";
// -----------------------------------------------------------------------------
import { useState } from "react";
// -----------------------------------------------------------------------------
import Link from "next/link";
// -----------------------------------------------------------------------------
import UserLoggedContext, { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";
// -----------------------------------------------------------------------------
import Assert from "@/utils/Assert";
import { PageUrls, usePageRouter } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import DivasLogo    from "@/components/UI/DivasLogo";
import ProfileImage from "@/components/UI/Images/ProfileImage";
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./Sidebar.module.css";
import LoginService from "@/services/LoginService";



// -----------------------------------------------------------------------------
let _PageName = null; // @Incomplete: do we need this???


// -----------------------------------------------------------------------------
function _SidebarLink({href, children})
{
  Assert.NotNullOrEmpty(href);

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


// -----------------------------------------------------------------------------
function _Content({pageName})
{
  const loggedUser = useLoggedUserContext();
  if(!loggedUser) {
    return null;
  }
  
  //
  const [ currentPageName, setCurrentPageName ] = useState(pageName);
  _PageName = currentPageName;

  const { NavigateTo } = usePageRouter();


  //
  return (
    <div className={styles.contentContainer}>
      {/* Logo */}
      <DivasLogo className={styles.sideBarLogo}/>

      {/* Items */}
      <div className={styles.sideBarItemsContainer}>
        {/* Profile */}
        <_SidebarLink href={PageUrls.UserOwnProfile}>
          <ProfileImage
            userModel={loggedUser}
            className={styles.sideBarItemProfileImage}
          />
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
          onClick={()=>{
            LoginService.TryToLogoutUser();
            NavigateTo(PageUrls.UserLogin);
          }}
        >
          <_SidebarItem icon="menu"> logout</_SidebarItem>
        </Link>
      </div>
    </div>
  );
}


// -----------------------------------------------------------------------------
function Sidebar({pageName})
{
  return (
    <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <_Content pageName={pageName}/>
    </UserLoggedContext>
  );
}
// -----------------------------------------------------------------------------
export default Sidebar;
