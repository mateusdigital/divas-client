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
import MoodboardCanvas   from "./Canvas/MoodboardCanvas";
import MoodboardControls from "./Controls/MoodboardControls";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";
import { MoodboardEditorContextProvider } from "@/contexts/Moodboard/Editor/MoodboardEditorContext";


// -----------------------------------------------------------------------------
function MoodboardEditor()
{
  return (
    <div className={styles.editorContainer}>
      <MoodboardEditorContextProvider>
        <MoodboardCanvas></MoodboardCanvas>
        <MoodboardControls></MoodboardControls>
      </MoodboardEditorContextProvider>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default MoodboardEditor;
