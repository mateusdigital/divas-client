
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
    case "Moodboards":  return ;
    case "Liked":       return ;
    case "Drafts":      return ;
    case "Followers":   return ;
    case "Following":   return ;
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
    for(let i = 0; i < categories_info.length; ++i) {
      if(categories_info[i].title == selectedCategoryTitle) {
        setCategoryComponent(categories_info[i].element);
      }
    }
  }, [selectedCategoryTitle])



  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  const categories_info = [
    { title: "Moodboards", element: (<MoodboardGrid userModel={userModel}/>), pred: ()=>{return true; } },
    { title: "Drafts",     element: (<LikesGrid     userModel={userModel}/>), pred: ()=>{return loggedUser && loggedUser._id == userModel._id; } },
    { title: "Liked",      element: (<DraftsGrid    userModel={userModel}/>), pred: ()=>{return true; } },
    { title: "Following",  element: (<FollowersGrid userModel={userModel}/>), pred: ()=>{return true; } },
    { title: "Followers",  element: (<FollowingGrid userModel={userModel}/>), pred: ()=>{return true; } },
  ];

  // Ready...
  return (<>
    <UserInfo userModel={userModel}/>

    <CategoriesBar>
      {categories_info.map((category) => {
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
