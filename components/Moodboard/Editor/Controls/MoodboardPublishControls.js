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
import { useState } from "react";
// -----------------------------------------------------------------------------
import Input from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import { GetBottomCategoriesNames } from "@/models/Moodboard/UI/CategoryButtonsNames";
import { GetBottomCategoriesInfo } from "@/models/Moodboard/UI/CategoryButtonInfo";
import { GetTopCategoriesNames } from "@/models/Moodboard/UI/CategoryButtonsNames";
import { GetTopCategoriesInfo } from "@/models/Moodboard/UI/CategoryButtonInfo";
// -----------------------------------------------------------------------------
import ButtonTop    from "./CategoryControls/CategoryButton/CategoryButtonTop.js";
import ButtonBottom from "./CategoryControls/CategoryButton/CategoryButtonBottom.js";
import ItemsSelection from "./ItemControls/ItemSelection/ItemSelection.js";
import LabeledInput from "@/components/UI/Inputs/LabeledInput.js";
import LabeledTextArea from "@/components/UI/Inputs/LabeledTextArea.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditingControls.module.css";
import ActionButton from "@/components/UI/Buttons/ActionButton.js";
import TextButton from "@/components/UI/Buttons/TextButton.js";

// -----------------------------------------------------------------------------
function MoodboardPublishControls({className})
{
  return (<>
    <div className={className}>
      <div>
        <span>Describe your moodboard</span>
      </div>
      <div>
        <LabeledInput>Title</LabeledInput>
        <LabeledTextArea>Description</LabeledTextArea>
      </div>
      <div>
        <ActionButton>Publish</ActionButton>
        <TextButton>Save Draft</TextButton>
      </div>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default MoodboardPublishControls;