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
//  File      : MoodboardEditor.js                                            //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-02                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import App from "@/models/App";
import MoodboardCanvas from "./Canvas/MoodboardCanvas";
import MoodboardControls from "./Controls/MoodboardControls";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";


// -----------------------------------------------------------------------------
function MoodboardEditor()
{
  return (
    <div className={styles.editorMainContainer}>
      {/* <MoodboardCanvas></MoodboardCanvas> */}
      <MoodboardControls></MoodboardControls>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default MoodboardEditor;
