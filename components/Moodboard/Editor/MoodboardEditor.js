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
import {useEffect, useRef, useState} from "react";
// -----------------------------------------------------------------------------
import {PageUrls, usePageRouter} from "@/utils/PageUtils";
import ToastUtils from "@/utils/Toast.js";
// -----------------------------------------------------------------------------
import Link from "@/components/Link";
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import BackButton from "@/components/UI/Buttons/BackButton";
import ProfileImage from "@/components/UI/Images/ProfileImage";
// -----------------------------------------------------------------------------
import MoodboardService from "@/services/MoodboardService.js";
// -----------------------------------------------------------------------------
import {
  MoodboardEditorContextProvider, useMoodboardEditorContext
} from "@/contexts/Moodboard/Editor/MoodboardEditorContext";
// -----------------------------------------------------------------------------
import MoodboardCanvas from "./Canvas/MoodboardCanvas";
import MoodboardEditingControls from "./Controls/MoodboardEditingControls";
import MoodboardPublishControls from "./Controls/MoodboardPublishControls";
// -----------------------------------------------------------------------------
import {FLOW_STATE_EDITING, FLOW_STATE_PUBLISH} from "./utils/FlowState";
import useUnsavedChangesWarning from "./utils/UnsavedChangesWarning.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditor.module.css";


// -----------------------------------------------------------------------------
function _MoodboardControlForCurrentFlowState({flowState, OnBackClicked})
{
  if (flowState == FLOW_STATE_EDITING) {
    return (
      <div className={styles.controlsContainer}>
        <MoodboardEditingControls className={styles.controlsContentContainer}/>
      </div>
    );
  }

  return (
    <div className={styles.controlsContainer}>
      <BackButton onClick={OnBackClicked}>Back</BackButton>
      <MoodboardPublishControls className={styles.controlsContentContainer}/> :
    </div>
  );
}

// -----------------------------------------------------------------------------
function _Content()
{
  const moodboardController = useMoodboardEditorContext();
  const {NavigateTo}        = usePageRouter();

  //
  const [currentFlowState, setCurrentFlowState]     = useState(
    FLOW_STATE_EDITING
  );
  const [currentFlowElement, setCurrentFlowElement] = useState((
    <_MoodboardControlForCurrentFlowState flowState={currentFlowState}/>
  ));

  const [isMoodboardClean, setIsMoodboardClean] = useState(true);
  const [isMoodboardEmpty, setIsMoodboardEmpty] = useState(true);

  const _saveDraftSpanRef = useRef();

  //
  useEffect(() => {
    const element = (
      <_MoodboardControlForCurrentFlowState
        flowState={currentFlowState}
        OnBackClicked={_HandleOnEditingClick}
      />
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

  const _HandleOnSaveDraftClick = async () => {
    // @duplicate: on moodboardpublishcontrols.js
    if (!moodboardController) {
      return;
    }

    const info_data  = moodboardController.PrepareSaveInfoForUpload();
    const save_data  = moodboardController.PrepareSaveDataForUpload();
    const save_photo = moodboardController.PrepareSavePhotoForUpload();

    const result = await MoodboardService.SaveDraftMoodboardItem(
      info_data,
      save_data,
      save_photo
    );

    console.log("------------------------");
    if (result.IsError()) {
      ToastUtils.ResultError(result);
    } else {
      ToastUtils.Success("Moodboard saved...");
      moodboardController._id = result.value._id;
      moodboardController.SetSaved();

      _saveDraftSpanRef.current.innerText = "Save Draft";

      setIsMoodboardClean(true);
    }
  };

  const _HandleOnProfileClick = (event) => {
    if (moodboardController.IsSaved()) {
      NavigateTo(PageUrls.UserOwnProfile);
      return;
    }

    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      NavigateTo(PageUrls.UserOwnProfile);
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
                disabled={isMoodboardClean}
                onClick={_HandleOnSaveDraftClick}
              >
                <span ref={_saveDraftSpanRef}>Save Draft</span>
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
              xxx_OnCanvasHasChanged={() => {
                const is_empty = moodboardController.IsEmpty();

                setIsMoodboardClean(false);
                setIsMoodboardEmpty(is_empty);

                if(is_empty) {
                  if(_saveDraftSpanRef.current && _saveDraftSpanRef.current.innerText) {
                    _saveDraftSpanRef.current.innerText = "Save Draft";
                  }
                } else {
                  if(_saveDraftSpanRef.current && _saveDraftSpanRef.current.innerText) {
                    _saveDraftSpanRef.current.innerText = "Save Draft *";
                  }
                }
                moodboardController.SetSaved(false);
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
