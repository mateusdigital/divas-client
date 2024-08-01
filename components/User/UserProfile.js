
// -----------------------------------------------------------------------------
import { useState, Suspense, useEffect } from "react";
// -----------------------------------------------------------------------------
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";
// -----------------------------------------------------------------------------
import MoodboardGrid from "../Moodboard/Grid/MoodboardGrid";
import LikesGrid from "../Likes/Grid/LikesGrid";


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
    case "Moodboards":  return <MoodboardGrid userModel={userModel}></MoodboardGrid>;
    case "Likes":       return <LikesGrid     userModel={userModel}></LikesGrid>;
    case "Drafts": return <div></div>;
    // case "Uploads":     return <div></div>;

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
  //
  const [categoryComponent, setCategoryComponent] = useState(null);
  const [selectedCategory, setSelectedCategory]   = useState(null);

  // Handle Category Selection
  const _HandleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);

    const category_component = _GetComponentForCategoryName(categoryName, userModel);
    setCategoryComponent(category_component);
  };

  useEffect(()=>{
    if(userModel && !categoryComponent) {
      _HandleCategorySelection(_CATEGORIES_BAR_NAMES[0]);
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

    <Suspense fallback={<div>Loading...</div>}>
      {categoryComponent}
    </Suspense>
  </>);
}

// -----------------------------------------------------------------------------
export default UserProfile;
