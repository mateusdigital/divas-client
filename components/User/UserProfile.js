

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, lazy, Suspense } from "react";
//
import NET from "@/app/NET";
//
import MainLayout    from "@/components/Layout/MainLayout";
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";

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
  return (
    <MainLayout>
      <UserInfo userModel={userModel}>
      </UserInfo>

      <CategoriesBar
        currentSelectedCategory={selectedCategory}
        OnCategoryClickCallback={_HandleCategorySelection}>
      </CategoriesBar>

      <Suspense fallback={<div>Loading...</div>}>
        {categoryComponent}
      </Suspense>
    </MainLayout>
  );
}

// -----------------------------------------------------------------------------
export default UserProfile;
