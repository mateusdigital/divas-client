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
import React from "react";
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
  MoodboardEditorContextProvider, useMoodboardEditorController
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
import Assert from "@/utils/Assert";
import { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";


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
function _Content({moodboardModel})
{
  // ---------------------------------------------------------------------------
  const editorController = useMoodboardEditorController();
  if(!editorController) {
    return;
  }


  if(!editorController.moodboardModel || editorController.moodboardModel._id != moodboardModel?._id) {
    if(moodboardModel) {
      editorController.EditExisting(moodboardModel);
    } else {
      editorController.EditNew();
    }
  }

  // ---------------------------------------------------------------------------
  const {NavigateTo} = usePageRouter();

  const [currentFlowState, setCurrentFlowState] = useState(
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

  // ---------------------------------------------------------------------------
  const _HandleOnPublishClick = () => {
    setCurrentFlowState(FLOW_STATE_PUBLISH);
  };

  // ---------------------------------------------------------------------------
  const _HandleOnSaveDraftClick = async () => {
    // @duplicate: on moodboardpublishcontrols.js
    const save_data = editorController.canvasController.Serialize();
    const result = await MoodboardService.SaveDraftMoodboard(save_data);
    if (result.IsError()) {
      ToastUtils.ResultError(result);
      return;
    }

    ToastUtils.Success("Moodboard saved...");

    editorController.moodboardModel._id = result.value._id;
    editorController.canvasController.SetSaved();

    _saveDraftSpanRef.current.innerText = "Save Draft";

    setIsMoodboardClean(true);
  };

  // ---------------------------------------------------------------------------
  const _HandleOnProfileClick = () => {
    if (editorController.canvasController.IsSaved()) {
      NavigateTo(PageUrls.UserOwnProfile);
      return;
    }

    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      NavigateTo(PageUrls.UserOwnProfile);
    }
  };

  // ---------------------------------------------------------------------------
  const _HandleDeleteClick = async () => {
    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (!confirmed) {
      return;
    }

    const moodboard_id = moodboardModel._id;
    const result = await MoodboardService.DeleteMoodboardWithId(moodboard_id);

    if (result.IsError()) {
      ToastUtils.ResultError(result);
      return;
    }

    ToastUtils.Success("Moodboard deleted...");
    NavigateTo(PageUrls.UserOwnProfile);
  };

  //
  // Component
  //

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.mainContainer}>
      {/*  */}
      <div className={styles.topBarContainer}>
        <Link href={PageUrls.UserOwnProfile}>
          <DivasLogo/>
        </Link>

        {(
          (currentFlowState == FLOW_STATE_EDITING) &&
            <div className={styles.buttonsContainer}>
              <div>
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

              {(
                (moodboardModel && moodboardModel._id) &&
                  <div>
                    <TextButton
                      className={styles.deleteButton}
                      disabled={isMoodboardClean}
                      onClick={_HandleDeleteClick}
                    >
                      <span>Delete</span>
                    </TextButton>
                  </div>
              )}

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
              const is_empty = editorController.canvasController.IsEmpty();

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
              editorController.canvasController.SetSaved(false);
            }}
          />
          {currentFlowElement}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
function _Container({moodboardId})
{
  // ---------------------------------------------------------------------------
  const loggedUser = useLoggedUserContext();
  const [ moodboardModel, setMoodboardModel ] = useState();
  const { NavigateTo } = usePageRouter();

  useEffect(() => {
    const _FetchMoodboard = async ()=>{
      const result = await MoodboardService.GetMoodboardEditData(
        loggedUser._id,
        moodboardId
      );

      if(result.IsError()) {
        ToastUtils.ResultError(result);
        NavigateTo(PageUrls.UserOwnProfile);

        return;
      }

      const value = result.value;
      setMoodboardModel(value);
    }

    if(moodboardId && loggedUser) {
      _FetchMoodboard()
    }
  }, [loggedUser]);

  // ---------------------------------------------------------------------------
  if(!loggedUser) {
    return;
  }

  return (<_Content moodboardModel={moodboardModel}/>);
}

// -----------------------------------------------------------------------------
function MoodboardEditor({moodboardId})
{
  return (
    <MoodboardEditorContextProvider>
      <_Container moodboardId={moodboardId}/>
    </MoodboardEditorContextProvider>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardEditor;
