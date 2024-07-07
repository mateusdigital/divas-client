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
//  File      : MoodboardControls.js                                          //
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
import { useRef, useState } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App.js";
import { useMoodboardEditorContext } from "@/contexts/Moodboard/Editor/MoodboardEditorContext.js";
import UsePageRouter from "@/utils/PageRouter.js";
import PageUrls from "@/utils/PageUrls.js";
// -----------------------------------------------------------------------------
import LabeledInput from "@/components/UI/Inputs/LabeledInput.js";
import LabeledTextArea from "@/components/UI/Inputs/LabeledTextArea.js";
import ActionButton from "@/components/UI/Buttons/ActionButton.js";
import TextButton from "@/components/UI/Buttons/TextButton.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditingControls.module.css";


// -----------------------------------------------------------------------------
function MoodboardPublishControls({className})
{
  const _controller = useMoodboardEditorContext();
  const _titleRef = useRef("");
  const { NavigateTo } = UsePageRouter();

  // ---------------------------------------------------------------------------
  const _HandlePublish = async ()=>{
    const info_data = {
      title: "ola",
      description: "mundo"
    };

    const save_data  = _controller.PrepareSaveData();
    const save_photo = _controller.PrepareSavePhoto();

    var result = await App.PublishMoodboardItem(info_data, save_data, save_photo);
    if(result.IsError()) {
      ToastUtils.ResultError(result);
      return;
    }

    NavigateTo(PageUrls.UserOwnProfile);
  }

  // ---------------------------------------------------------------------------
  const _HandleSave = async ()=>{
    const save_data = _controller.PrepareSaveData();
    await App.SaveMoodboardItem(save_data);
  }


  // ---------------------------------------------------------------------------
  return (<>
    <div className={className}>
      <div>
        <span>Describe your moodboard</span>
      </div>
      <div>
        <LabeledInput useRef={_titleRef} >Title</LabeledInput>
        <LabeledTextArea>Description</LabeledTextArea>
      </div>
      <div>
        <ActionButton onClick={_HandlePublish}>Publish</ActionButton>
        <TextButton onClick={_HandleSave}>Save Draft</TextButton>
      </div>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default MoodboardPublishControls;