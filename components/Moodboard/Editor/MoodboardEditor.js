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
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import ProfileImage from "@/components/UI/Images/ProfileImage";
import { MoodboardEditorContextProvider, useMoodboardEditorContext } from "@/contexts/Moodboard/Editor/MoodboardEditorContext";
// -----------------------------------------------------------------------------
import MoodboardCanvas   from "./Canvas/MoodboardCanvas";
import MoodboardControls from "./Controls/MoodboardControls";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";

function _Content()
{
  const _controller = useMoodboardEditorContext();

  const _HandleOnPublishClick = ()=>{

  }

  return (<>
    <div className={styles.mainContainer}>
      {/*  */}
      <div className={styles.topBarContainer}>
        <DivasLogo/>
        <div>
          <ActionButton onClick={_HandleOnPublishClick}>Publish</ActionButton>
          <TextButton onClick={_HandleOnSaveDraftClick}>Save Draft</TextButton>
        </div>
        <ProfileImage className={styles.photoContainer}/>
      </div>

      {/*  */}
      <div className={styles.editorContainer}>
        <div className={styles.contentContainer}>
          <MoodboardCanvas className={styles.canvasContainer}></MoodboardCanvas>
          <MoodboardControls className={styles.controlsContainer}></MoodboardControls>
        </div>
      </div>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
function MoodboardEditor()
{
  return (
    <MoodboardEditorContextProvider>
      <_Content></_Content>
    </MoodboardEditorContextProvider>
  )
}

// -----------------------------------------------------------------------------
export default MoodboardEditor;
