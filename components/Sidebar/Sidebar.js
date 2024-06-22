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
import Link from "next/link";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import { useLoggedUser } from "@/components/Logic/UserLogged"; // Import useLoggedUser hook
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
  return (
    <Link href={href} className={styles.sideBarItemContainer}>
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
function Sidebar()
{
  const material_symbol_style = "material-symbols-outlined";
  const loggedUserResult = useLoggedUser();

  //
  return (
    <div className={styles.contentContainer}>
      {/* Logo */}
      <DivasLogo/>

      {/* Items */}
      <div className={styles.sideBarItemsContainer}>
        {/* Profile */}
        <_SidebarLink href={PageUrls.UserOwnProfile}>
          <img
            className={styles.sideBarItemProfileImage}
            src={loggedUserResult ? loggedUserResult.value.profilePhotoTinyUrl : ""}>
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
export default Sidebar;
