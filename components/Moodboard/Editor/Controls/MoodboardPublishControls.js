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
import { useRef } from "react";
// -----------------------------------------------------------------------------
import { useMoodboardEditorContext } from "@/contexts/Moodboard/Editor/MoodboardEditorContext.js";
// -----------------------------------------------------------------------------
import { PageUrls, usePageRouter } from "@/utils/PageUtils.js";
// -----------------------------------------------------------------------------
import LabeledInput    from "@/components/UI/Inputs/LabeledInput.js";
import LabeledTextArea from "@/components/UI/Inputs/LabeledTextArea.js";
import ActionButton    from "@/components/UI/Buttons/ActionButton.js";
import TextButton      from "@/components/UI/Buttons/TextButton.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditingControls.module.css";


// -----------------------------------------------------------------------------
function MoodboardPublishControls({className})
{
  //
  const _titleRef = useRef("");

  const _moodboardController = useMoodboardEditorContext();
  const { NavigateTo } = usePageRouter();


  // ---------------------------------------------------------------------------
  const _HandlePublish = async ()=>{
    const info_data = { // @Incomplete: Add the correct data.
      title: "ola",
      description: "mundo"
    };

    const save_data  = _moodboardController.PrepareSaveDataForUpload ();
    const save_photo = _moodboardController.PrepareSavePhotoForUpload();

    const result = await MoodboardService.PublishMoodboardItem(
      info_data,
      save_data,
      save_photo
    );

    if(result.IsError()) {
      ToastUtils.ResultError(result);
      // @Incomplete: Save the moodboard somewhere and retry later so user doesn't lose the work...
      return;
    }

    NavigateTo(PageUrls.UserOwnProfile);
  }

  // ---------------------------------------------------------------------------
  const _HandleSave = async () => {
    const save_data = _moodboardController.PrepareSaveDataForUpload();
    var result = await MoodboardService.SaveMoodboardItem(save_data);

    if(result.IsError()) {
      ToastUtils.ResultError(result);
      // @Incomplete: Save the moodboard somewhere and retry later so user doesn't lose the work...
      return;
    }

    NavigateTo(PageUrls.UserOwnProfile);
  }


  // ---------------------------------------------------------------------------
  return (<>
    <div className={className}>
      <div className="text-center">
        <span>Describe your moodboard</span>
      </div>
      <div>
        <LabeledInput useRef={_titleRef}>Title</LabeledInput>
        <LabeledTextArea>Description</LabeledTextArea>
      </div>
      <div className="flex">
        <ActionButton className="flex-grow" onClick={_HandlePublish}>Publish</ActionButton>
        <TextButton onClick={_HandleSave}>Save Draft</TextButton>
      </div>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default MoodboardPublishControls;