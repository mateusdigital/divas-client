//~---------------------------------------------------------------------------//
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
//  File      : LikesGrid.js                                                  //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-01                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//

// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
//
import NET from '@/app/NET';
//
import DesignGridItem from './DesignGridItem';
//
import styles from "./LikesGrid.module.css";


// -----------------------------------------------------------------------------
function LikesGrid({ user })
{
  const [likeItems, setLikeItems] = useState([]);

  //
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const api_url  = NET.Make_API_Url("like", user._id);
        const response = await NET.GET(api_url);

        if (!response.ok) {
          throw new Error("Failed to fetch likes");
        }

        const likes_data = await response.json();
        setLikeItems(likes_data);
      } catch (error) {
        console.error("Error fetching design items:", error);
      }
    };

    fetchLikes();
  }, []);

  //
  return (
    <div className={styles.designsGridContainer}>
      <div className={styles.designsGrid}>
        {likeItems.map((likeItem) => (
          <DesignGridItem key={likeItem._id} designItem={likeItem} />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default LikesGrid;