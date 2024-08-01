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
//  File      : MoodboardComments.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import {useEffect} from "react";
// -----------------------------------------------------------------------------
import MoodboardService from "@/services/MoodboardService.js";
import styles from "./MoodboardComments.module.css";

// -----------------------------------------------------------------------------
function MoodboardComments({moodboardModel})
{
  useEffect(() => {
    const _FetchComments = async ()=>{
      const result = MoodboardService.GetCommentsFor(moodboardModel);
    }

    if(moodboardModel) {
      _FetchComments()
    }
  }, [moodboardModel]);


  // Ready...
  return (
    <div className={styles.moodboardCommentsContainer}>

    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardComments;
