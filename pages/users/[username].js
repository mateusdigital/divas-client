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
import { useEffect, useState } from "react";
//
import Constants from "@/app/Constants";
//
import Layout        from "@/components/Layout";
import UserInfo      from "@/components/User/Profile/UserInfo";
import CategoriesBar from "@/components/User/Profile/CategoriesBar";
import DesignsGrid   from "@/components/Design/DesignsGrid";


// -----------------------------------------------------------------------------
function UserProfile() {
  //
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState(null);

  //
  useEffect(() => {
    const apiUrl = Constants.Make_API_Url("users", username);
    if (username) {
      fetch(apiUrl)
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

  //
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <UserInfo user={user}></UserInfo>
      <CategoriesBar></CategoriesBar>
      <DesignsGrid user={user}></DesignsGrid>
    </Layout>
  );
}

export default UserProfile;
