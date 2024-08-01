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
//  File      : MoodboardComments.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import React, { useRef } from "react";
import {useEffect, useState} from "react";
// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
// -----------------------------------------------------------------------------
import Input from "@/components/UI/Inputs/Input";
import ActionButton from "@/components/UI/Buttons/ActionButton";
// -----------------------------------------------------------------------------
import {useLoggedUserContext} from "@/contexts/User/UserLoggedContext";
import MoodboardService from "@/services/MoodboardService.js";
// -----------------------------------------------------------------------------
import CommentItem from "./MoodboardCommentItem";
// -----------------------------------------------------------------------------
import styles from "./MoodboardComments.module.css";



// -----------------------------------------------------------------------------
function MoodboardComments({moodboardModel, onCommentsChanged})
{
  //
  const userModel = useLoggedUserContext();
  const [comments, setComments] = useState();

  const inputRef = useRef();

  //
  useEffect(() => {
    const _FetchComments = async ()=>{
      const result = await MoodboardService.GetCommentsForMoodboardWithId(
        moodboardModel._id
      );

      if(result.IsError()) {
        ToastUtils.ResultError(result);
        return;
      }

      const value = result.value;
      setComments(value);
      onCommentsChanged(value.length);
    }

    if(moodboardModel) {
      _FetchComments()
    }
  }, [moodboardModel]);

  // ---------------------------------------------------------------------------
  const _HandleAddComment = async ()=>{
    if(!moodboardModel) {
      return;
    }
    const comment_model = {
      owner: userModel._id,
      targetUser: moodboardModel.owner,
      targetMoodboard: moodboardModel._id,
      content: inputRef.current.value,
    }

    const result = await MoodboardService.AddCommentToMoodboardWithId(
      comment_model
    );

    if(!result.IsValid()) {
      ToastUtils.ResultError(result);
      return;
    }

    const new_comments = [ ...comments, result.value ];
    setComments(new_comments);
    onCommentsChanged(new_comments.length);
    inputRef.current.value = "";
  }

  function _Handle(comments) {
    if(!comments) {
      return null;
    }

    return comments.map((data, index) => {
      return <CommentItem key={index} commentModel={data}/>
    });
  }

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.contentContainer}>
      <div className={styles.commentsContainer}>
        {
          _Handle(comments)
        }
      </div>

      <div className={styles.inputContainer}>
        <Input ref={inputRef}></Input>
        <ActionButton onClick={_HandleAddComment}>c</ActionButton>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardComments;
