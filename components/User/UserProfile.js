
// -----------------------------------------------------------------------------
import { useState, Suspense } from "react";
// -----------------------------------------------------------------------------
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";
// -----------------------------------------------------------------------------
import CATEGORIES_BAR_NAMES from "@/models/CategoriesBarNames";
import GetComponentForCategoryName from "@/models/CategoriesBarFactory";


// -----------------------------------------------------------------------------
function UserProfile({userModel})
{
  //
  const [categoryComponent, setCategoryComponent] = useState(null);
  const [selectedCategory, setSelectedCategory]   = useState(CATEGORIES_BAR_NAMES[0]);

  // Handle Category Selection
  const _HandleCategorySelection = (categoryName) => {
    setSelectedCategory(categoryName);

    const category_component = GetComponentForCategoryName(categoryName, userModel);
    setCategoryComponent(category_component);
  };

  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  return (<>
    <UserInfo userModel={userModel}/>

    {/* <CategoriesBar
      currentSelectedCategory={selectedCategory}
      OnCategoryClickCallback={_HandleCategorySelection}/>

    <Suspense fallback={<div>Loading...</div>}>
      {categoryComponent}
    </Suspense> */}
  </>);
}

// -----------------------------------------------------------------------------
export default UserProfile;
