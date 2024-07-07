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
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
// -----------------------------------------------------------------------------
import App from "@/models/App";
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import BackButton from "@/components/UI/Buttons/BackButton.js";
import ProfileImage from "@/components/UI/Images/ProfileImage";
import { MoodboardEditorContextProvider, useMoodboardEditorContext } from "@/contexts/Moodboard/Editor/MoodboardEditorContext";
// -----------------------------------------------------------------------------
import MoodboardCanvas   from "./Canvas/MoodboardCanvas";
import MoodboardEditingControls from "./Controls/MoodboardEditingControls";
import MoodboardPublishControls from "./Controls/MoodboardPublishControls";
// -----------------------------------------------------------------------------
import { FLOW_STATE_EDITING, FLOW_STATE_PUBLISH, FLOW_STATE_SAVE_DRAFT } from "./utils/FlowState";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";
import PageUrls from "@/utils/PageUrls";

// ---------------------------------------------------------------------------
function _MoodboardControlForCurrentFlowState ({flowState, OnBackClicked}) {
  if(flowState == FLOW_STATE_EDITING) {
    return (<>
      <div className={styles.controlsContainer}>
        <MoodboardEditingControls className={styles.controlsContentContainer}/>
      </div>
    </>);
  }

  const element = (flowState == FLOW_STATE_SAVE_DRAFT)
    ? (<MoodboardEditingControls className={styles.controlsContentContainer}/>)
    : (<MoodboardPublishControls className={styles.controlsContentContainer}/>);

  return (<>
    <div className={styles.controlsContainer}>
      <BackButton onClick={OnBackClicked}>Back</BackButton>
      {element}
    </div>
  </>)
}

// -----------------------------------------------------------------------------
function _Content()
{
  const _controller = useMoodboardEditorContext();

  const [ currentFlowState, setCurrentFlowState ] = useState(FLOW_STATE_EDITING);
  const [ currentFlowElement, setCurrentFlowElement ] = useState((
    <_MoodboardControlForCurrentFlowState flowState={currentFlowState}/>
  ));

  useEffect(()=>{
    const element = (<>
      <_MoodboardControlForCurrentFlowState
        flowState={currentFlowState}
        OnBackClicked={_HandleOnEditingClick}/>
    </>);
    setCurrentFlowElement(element);
  }, [currentFlowState]);


  //
  // Event Handlers
  //

  // ---------------------------------------------------------------------------
  const _HandleOnEditingClick = ()=>{
    setCurrentFlowState(FLOW_STATE_EDITING);
  }
  const _HandleOnPublishClick = ()=>{
    setCurrentFlowState(FLOW_STATE_PUBLISH);
  }
  const _HandleOnSaveDraftClick = ()=>{
    setCurrentFlowState(FLOW_STATE_SAVE_DRAFT);
  }

  //
  // Component
  //

  // ---------------------------------------------------------------------------
  return (<>
    <div className={styles.mainContainer}>
      {/*  */}
      <div className={styles.topBarContainer}>
        <Link href={PageUrls.UserOwnProfile}>
          <DivasLogo/>
        </Link>
        {( currentFlowState == FLOW_STATE_EDITING &&
          <div>
            <ActionButton onClick={_HandleOnPublishClick}>Publish</ActionButton>
            <TextButton onClick={_HandleOnSaveDraftClick}>Save Draft</TextButton>
          </div>
        )}
        <ProfileImage className={styles.photoContainer}/>
      </div>

      {/*  */}
      <div className={styles.editorContainer}>
        <div className={styles.editorContentContainer}>
          <MoodboardCanvas
            className={styles.canvasContainer}
            flowState={currentFlowState}
          />
          {currentFlowElement}
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
