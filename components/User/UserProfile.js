
// -----------------------------------------------------------------------------
import React from "react";
import { useState, Suspense, useEffect } from "react";
// -----------------------------------------------------------------------------
import UserInfo      from "@/components/User/Profile/UserInfo";
import { CategoriesBar, CategoriesBarItem } from "@/components/User/Profile/CategoriesBar";
// -----------------------------------------------------------------------------
import MoodboardGrid from "../Moodboard/Grid/MoodboardGrid";
import DraftsGrid from "../CategoriesViews/Drafts/Grid/DraftsGrid";
import LikesGrid from "../CategoriesViews/Likes/Grid/LikesGrid";
import FollowersGrid from "../CategoriesViews/Users/Grid/FollowersGrid";
import FollowingGrid from "../CategoriesViews/Users/Grid/FollowingGrid";
import { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";


//
// Helpers
//

// -----------------------------------------------------------------------------
const _CATEGORIES_BAR_NAMES = [
  "Moodboards",
  "Drafts",
  "Likes",
  "Followers",
  "Following"
];

// -----------------------------------------------------------------------------
function _GetComponentForCategoryName(name, userModel)
{
  switch (name) {
    case "Moodboards":  return <MoodboardGrid userModel={userModel}/>;
    case "Likes":       return <LikesGrid     userModel={userModel}/>;
    case "Drafts":      return <DraftsGrid    userModel={userModel}/>;
    case "Followers":   return <FollowersGrid userModel={userModel}/>;
    case "Following":   return <FollowingGrid userModel={userModel}/>;
    default:
      return null;
  }
}


//
// Component
//

// -----------------------------------------------------------------------------
function UserProfile({userModel})
{
  const loggedUser = useLoggedUserContext();

  //
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState("Moodboards");
  const [categoryComponent, setCategoryComponent] = useState(null);

  useEffect(()=>{
    const component = _GetComponentForCategoryName(selectedCategoryTitle, userModel)
    setCategoryComponent(component)
  }, [selectedCategoryTitle])



  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  const titles = [
    { title: "Moodboards", pred: ()=>{return true; } },
    { title: "Drafts",     pred: ()=>{return loggedUser && loggedUser._id == userModel._id; } },
    { title: "Liked",      pred: ()=>{return true; } },
    { title: "Following",  pred: ()=>{return true; } },
    { title: "Followers",  pred: ()=>{return true; } },
  ];

  // Ready...
  return (<>
    <UserInfo userModel={userModel}/>

    <CategoriesBar>
      {titles.map((category) => {
        if(category.pred && !category.pred()) {
          return null;
        }

        return (
          <CategoriesBarItem
            key={category.title}
            isSelected={category.title == selectedCategoryTitle}
            onClick={()=>{
              setSelectedCategoryTitle(category.title);
            }}
          >
            {category.title}
          </CategoriesBarItem>
        )
      })}
    </CategoriesBar>

    <Suspense>
      {categoryComponent}
    </Suspense>
  </>);
}

// -----------------------------------------------------------------------------
export default UserProfile;
