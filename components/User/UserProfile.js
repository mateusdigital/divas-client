
// -----------------------------------------------------------------------------
import React from "react";
import { useState, Suspense, useEffect } from "react";
// -----------------------------------------------------------------------------
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";
// -----------------------------------------------------------------------------
import MoodboardGrid from "../Moodboard/Grid/MoodboardGrid";
import DraftsGrid from "../CategoriesViews/Drafts/Grid/DraftsGrid";
import LikesGrid from "../CategoriesViews/Likes/Grid/LikesGrid";
import FollowersGrid from "../CategoriesViews/Users/Grid/FollowersGrid";
import FollowingGrid from "../CategoriesViews/Users/Grid/FollowingGrid";


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
      debugger;
      return null;
  }
}


//
// Component
//

// -----------------------------------------------------------------------------
function UserProfile({userModel})
{
  console.log(userModel.username);
  //
  const [categoryComponent, setCategoryComponent] = useState(null);
  const [selectedCategory, setSelectedCategory]   = useState("Moodboards");

  // Handle Category Selection
  const _HandleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);

    const category_component = _GetComponentForCategoryName(categoryName, userModel);
    setCategoryComponent(category_component);
  };

  useEffect(()=>{
    console.log("model changd");
    if(userModel) {
      const name = selectedCategory || _CATEGORIES_BAR_NAMES[0]
      _HandleCategorySelection(name);
    }
  }, [userModel])

  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  return (<>
    <UserInfo userModel={userModel}/>

    <CategoriesBar
      currentSelectedCategory={selectedCategory}
      categoriesNames={_CATEGORIES_BAR_NAMES}
      onCategoryClickCallback={_HandleCategorySelection}
    />
    <Suspense>
      {categoryComponent}
    </Suspense>
  </>);
}

// -----------------------------------------------------------------------------
export default UserProfile;
