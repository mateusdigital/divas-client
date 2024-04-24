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
//  File      : MoodboardGrid.js                                              //
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
import MoodboardGridItem from './MoodboardGridItem';
//
import styles from "./MoodboardGrid.module.css";


// -----------------------------------------------------------------------------
function MoodboardGrid({ userModel })
{
  //
  const [moodboards, setMoodboards] = useState([]);

  //
  useEffect(() => {
    const fetchMoodboards = async () => {
      try {
        const api_url  = NET.Make_API_Url("moodboard/getByIds");
        const json     = JSON.stringify({ ids: userModel.moodboards });
        const response = await NET.POST(api_url, { body: json });

        if (!response.ok) {
          throw new Error("Failed to fetch design items");
        }
        const data = await response.json();
        setMoodboards(data);
      } catch (error) {
        console.error("Error fetching design items:", error);
      }
    };

    fetchMoodboards();
  }, [userModel.moodboards]);

  //
  return (
    <div className={styles.moodboardGridContainer}>
      <div className={styles.moodboardGrid}>
        {moodboards.map((moodboard) => (
          <MoodboardGridItem key={moodboard._id} moodboardModel={moodboard} />
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardGrid;