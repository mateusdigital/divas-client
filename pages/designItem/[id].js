//----------------------------------------------------------------------------//
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
//  File      : [id].js                                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-16                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, lazy, Suspense } from "react";
//
import NET from "@/app/NET";
//
import MainLayout from "@/components/MainLayout";

import styles from "./DesignItemDetails.module.css";
import MaterialIcon from "@/components/MaterialIcon";

// -----------------------------------------------------------------------------
function DesignItemDetails()
{
  //
  const router = useRouter();
  const { id } = router.query;

  const [designItem, setDesignItem] = useState(null);
  const [ownerUser, setOwnerUser] = useState(null);

  // Fetch Design Information from server.
  useEffect(() => {
    const api_url = NET.Make_API_Url("designItem", id);
    if (id) {
      NET.GET(api_url)
        .then((res)   => { return res.json(); })
        .then((data)  => { setDesignItem(data); })
        .catch((error)=> { console.error("Error fetching design item:", error) });
      }
    }, [id]);

  useEffect(()=>{
    if(designItem) {
      const api_url = NET.Make_API_Url("usersId", designItem.owner);
      NET.GET(api_url)
        .then((res)   => { return res.json(); })
        .then((data)  => { setOwnerUser(data); })
        .catch((error)=> { console.error("Error fetching user item:", error) });
    }
  }, [designItem]);


  //
  if (!designItem) {
    return (
      <MainLayout>
        return <div>Loading...</div>;
      </MainLayout>
    )
  }

  //
  return (
    <MainLayout>
      <div className={styles.designItemContainer}>
        <div className={styles.designItemImageContainer}>
          <img src={designItem.imageUrl}></img>
        </div>

        {/* Info Container */}
        <div className={styles.designItemInfoContainer}>
          {/* User Info */}
          <div className={styles.designItemInfoUserContainer}>
            <div>
              <span>Created by: </span>
              <span>{ownerUser ? ownerUser.username : "Loading..."}</span>
            </div>
            <button>Follow</button>
          </div>
          {/* -User Info */}

          {/* Design Item Info */}
          <div className={styles.designItemItemInfoContainer}>
            <span className={styles.designItemItemTitle}>
              {designItem.title ? designItem.title : "Untitled..."}
            </span>
            <span className={styles.designItemItemDescription}>
              {designItem.description}
            </span>
          </div>
          {/* -Design Item Info */}

          {/* Comments  */}
          <div>
          </div>
          {/* -Comments */}

          {/* Other */}
          <div className={styles.designItemOtherContainer}>
            <button>Add to collection</button>
            <div className={styles.designItemStatsContainer}>
              <MaterialIcon
                className={styles.designItemOtherStat}
                icon="share">
              </MaterialIcon>

              <MaterialIcon
                className={styles.designItemOtherStat}
                icon="chat_bubble">
                  {designItem.commentsCount}
              </MaterialIcon>

              <MaterialIcon
                className={styles.designItemOtherStat}
                icon="favorite">
                  {designItem.likesCount}
              </MaterialIcon>
            </div>
          </div>
          {/* -Other */}
        </div>
        {/* -Info Container */}

        {/* Items Carrousel */}
        <ItemsCarrousel designItem={designItem}></ItemsCarrousel>
        {/* -Items Carrousel */}
      </div>
    </MainLayout>
  )
}

// -----------------------------------------------------------------------------
export default DesignItemDetails;
