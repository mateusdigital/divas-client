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
import {useEffect, useState} from "react";
// -----------------------------------------------------------------------------
import {PageUrls, usePageRouter} from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import Link from "@/components/Link";
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import BackButton from "@/components/UI/Buttons/BackButton";
import ProfileImage from "@/components/UI/Images/ProfileImage";
// -----------------------------------------------------------------------------
import {
  MoodboardEditorContextProvider, useMoodboardEditorContext
} from "@/contexts/Moodboard/Editor/MoodboardEditorContext";
// -----------------------------------------------------------------------------
import MoodboardCanvas from "./Canvas/MoodboardCanvas";
import MoodboardEditingControls from "./Controls/MoodboardEditingControls";
import MoodboardPublishControls from "./Controls/MoodboardPublishControls";
// -----------------------------------------------------------------------------
import {FLOW_STATE_EDITING, FLOW_STATE_PUBLISH, FLOW_STATE_SAVE_DRAFT} from "./utils/FlowState";
import useUnsavedChangesWarning from "./utils/UnsavedChangesWarning.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";


// -----------------------------------------------------------------------------
function _MoodboardControlForCurrentFlowState({flowState, OnBackClicked})
{
  if (flowState == FLOW_STATE_EDITING) {
    return (
      <>
        <div className={styles.controlsContainer}>
          <MoodboardEditingControls className={styles.controlsContentContainer}/>
        </div>
      </>
    );
  }

  const element = flowState == FLOW_STATE_SAVE_DRAFT ?
                  <MoodboardEditingControls className={styles.controlsContentContainer}/> :
                  <MoodboardPublishControls className={styles.controlsContentContainer}/>;

  return (
    <>
      <div className={styles.controlsContainer}>
        <BackButton onClick={OnBackClicked}>Back</BackButton>
        {element}
      </div>
    </>
  );
}

// -----------------------------------------------------------------------------
function _Content()
{
  const _controller  = useMoodboardEditorContext();
  const {NavigateTo} = usePageRouter();

  //
  const [currentFlowState, setCurrentFlowState]     = useState(FLOW_STATE_EDITING);
  const [currentFlowElement, setCurrentFlowElement] = useState((
    <_MoodboardControlForCurrentFlowState flowState={currentFlowState}/>
  ));

  const [isMoodboardEmpty, setIsMoodboardEmpty] = useState(true);


  //
  useEffect(() => {
    const element = (
      <>
        <_MoodboardControlForCurrentFlowState
          flowState={currentFlowState}
          OnBackClicked={_HandleOnEditingClick}
        />
      </>
    );
    setCurrentFlowElement(element);
  }, [currentFlowState]);


  //
  // Event Handlers
  //

  // ---------------------------------------------------------------------------
  const _HandleOnEditingClick = () => {
    setCurrentFlowState(FLOW_STATE_EDITING);
  };

  const _HandleOnPublishClick = () => {
    setCurrentFlowState(FLOW_STATE_PUBLISH);
  };

  const _HandleOnSaveDraftClick = () => {
    setCurrentFlowState(FLOW_STATE_SAVE_DRAFT);
  };

  const _HandleOnProfileClick = (event) => {
    if (_controller.IsSaved()) {
      NavigateTo(PageUrls.UserOwnProfile);
      return;
    }

    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      NavigateTo(PageUrls.UserOwnProfile);
    }
    else {
      setCurrentFlowState(FLOW_STATE_SAVE_DRAFT);
    }
  };


  //
  // Component
  //

  // ---------------------------------------------------------------------------
  return (
    <>
      <div className={styles.mainContainer}>
        {/*  */}
        <div className={styles.topBarContainer}>
          <Link href={PageUrls.UserOwnProfile}>
            <DivasLogo/>
          </Link>

          {(
            currentFlowState == FLOW_STATE_EDITING && <div>
              <ActionButton
                disabled={isMoodboardEmpty}
                onClick={_HandleOnPublishClick}
              >
                Publish
              </ActionButton>

              <TextButton
                disabled={isMoodboardEmpty}
                onClick={_HandleOnSaveDraftClick}
              >
                Save Draft
              </TextButton>
            </div>
          )}

          <Link onClick={_HandleOnProfileClick}>
            <ProfileImage className={styles.photoContainer}/>
          </Link>
        </div>

        {/*  */}
        <div className={styles.editorContainer}>
          <div className={styles.editorContentContainer}>
            <MoodboardCanvas
              className={styles.canvasContainer}
              flowState={currentFlowState}
              xxx_OnCanvasHasChanged={()=>{
                setIsMoodboardEmpty(_controller.IsEmpty());
              }}
            />
            {currentFlowElement}
          </div>
        </div>
      </div>
    </>
  );
}

// -----------------------------------------------------------------------------
function MoodboardEditor()
{
  return (
    <MoodboardEditorContextProvider>
      <_Content/>
    </MoodboardEditorContextProvider>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardEditor;
