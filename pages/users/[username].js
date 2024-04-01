//~---------------------------------------------------------------------------//
//                               *       +                                    //
//                         "                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           "=/_       \     |                               //
//                        *   |  "=._    |                                    //
//                             \     `=./`,        "                          //
//                          .   "=.__.=" `="      *                           //
//                 +                         +                                //
//                      O      *        "       .                             //
//                                                                            //
//  File      : [username].js                                                 //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
//  License   : See project"s COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, lazy, Suspense } from "react";
//
import NET from "@/app/NET";
//
import Layout             from "@/components/Layout";
import UserInfo           from "@/components/User/Profile/UserInfo";
import CategoriesBar      from "@/components/User/Profile/CategoriesBar";
import CategoriesBarNames from "@/components/User/Profile/CategoriesBarNames";

// Conditional rendering based on the selected category
const DesignsGrid = lazy(() => import("@/components/Design/DesignsGrid"));
const LikesGrid   = lazy(() => import("@/components/Design/LikesGrid"));

// -----------------------------------------------------------------------------
function UserProfile()
{
  //
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState(null);
  const [categoryComponent, setCategoryComponent] = useState(null);

  // Fetch User Information from server.
  useEffect(() => {
    const api_url = NET.Make_API_Url("users", username);
    if (username) {
      fetch(api_url)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user:", error)
        });
    }
  }, [username]);

  // Handle Category Selection
  const [selectedCategory, setSelectedCategory] = useState(CategoriesBarNames[1]);
  const handle_category_selection = (category) => {
    setSelectedCategory(category);
    setCategoryComponent(getComponentForCategory(category));
  };


  const getComponentForCategory = (category) => {
    switch (category) {
      case "Likes":
        return <LikesGrid user={user} />;
      case "Designs":
        return <DesignsGrid user={user} />;
      case "Uploads":
        return <DesignsGrid user={user} />;
      case "Collections":
        return <DesignsGrid user={user} />;
      case "Challenges":
        return <DesignsGrid user={user} />;
      default:
        return null;
    }
  };

  //
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <UserInfo user={user}></UserInfo>
      <CategoriesBar
        currentSelectedCategory={selectedCategory}
        OnCategoryClickCallback={handle_category_selection}>
      </CategoriesBar>
      <Suspense fallback={<div>Loading...</div>}>
        {categoryComponent}
      </Suspense>
    </Layout>
  );
}

// -----------------------------------------------------------------------------
export default UserProfile;
