

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, lazy, Suspense } from "react";
//
import NET from "@/app/NET";
//
import MainLayout    from "@/components/Layout/MainLayout";
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";

import CATEGORIES_BAR_NAMES from "@/components/User/Profile/CategoriesBarNames";

// Conditional rendering based on the selected category
const DesignsGrid = lazy(() => import("@/components/Design/DesignsGrid"));
const LikesGrid   = lazy(() => import("@/components/Design/LikesGrid"));

// -----------------------------------------------------------------------------
function UserProfile({user})
{
  //
  const [categoryComponent, setCategoryComponent] = useState(null);

  // Handle Category Selection
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES_BAR_NAMES[0]);
  const handle_category_selection = (category) => {
    setSelectedCategory(category);
    setCategoryComponent(getComponentForCategory(category));
  };

  const getComponentForCategory = (category) => {
    switch (category) {
      case "Likes":       return <LikesGrid user={user} />;
      case "Designs":     return <DesignsGrid user={user} />;
      case "Uploads":     return <DesignsGrid user={user} />;
      case "Collections": return <DesignsGrid user={user} />;
      case "Challenges":  return <DesignsGrid user={user} />;

      default:
        return null;
    }
  };

  //
  if (!user) {
    return <div>Loading...</div>;
  }

  //
  return (
    <MainLayout>
      <UserInfo user={user}>
      </UserInfo>

      <CategoriesBar
        currentSelectedCategory={selectedCategory}
        OnCategoryClickCallback={handle_category_selection}>
      </CategoriesBar>

      <Suspense fallback={<div>Loading...</div>}>
        {categoryComponent}
      </Suspense>
    </MainLayout>
  );
}

// -----------------------------------------------------------------------------
export default UserProfile;
