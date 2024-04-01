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
//  File      : DesignsGrid.js                                                //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
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
import DesignItem from './DesignItem';
//
import styles from "./DesignsGrid.module.css";

// -----------------------------------------------------------------------------
function DesignsGrid({ user })
{
  //
  const [designItems, setDesignItems] = useState([]);

  //
  useEffect(() => {
    const fetchDesignItems = async () => {
      try {
        const api_url  = NET.Make_API_Url("designItem/getByIds");
        const json     = JSON.stringify({ ids: user.designItems });
        const response = await NET.POST(api_url, { body: json });

        if (!response.ok) {
          throw new Error("Failed to fetch design items");
        }
        const data = await response.json();
        setDesignItems(data);
      } catch (error) {
        console.error("Error fetching design items:", error);
      }
    };

    fetchDesignItems();
  }, [user.designItems]);

  //
  return (
    <div className={styles.designsGridContainer}>
      <div className={styles.designsGrid}>
        {designItems.map((designItem) => (
          <DesignItem key={designItem._id} designItem={designItem} />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default DesignsGrid;