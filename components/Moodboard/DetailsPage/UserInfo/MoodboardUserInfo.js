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
//  File      : MoodboardUserInfo.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

//
import { useState, useEffect } from "react";
//
import App from "@/models/App";
//
import styles from "./MoodboardUserInfo.module.css";

// -----------------------------------------------------------------------------
function MoodboardUserInfo({moodboardModel})
{

  //
  const [ownerUserModel, setOwnerUserModel] = useState(null);
  useEffect(()=>{
    const _GetUser = async ()=>{
      const user_model = await App.GetUserWithId(moodboardModel.owner);
      setOwnerUserModel(user_model);
    }

    if(moodboardModel.owner) {
      _GetUser();
    }
  }, [moodboardModel.owner]);

  // Not ready...
  if(!ownerUserModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  return (
    <div className={styles.moodboardInfoUserContainer}>
      <div>
        <span>Created by: </span>
        <span>{ownerUserModel ? ownerUserModel.username : "Loading..."}</span>
      </div>
      <div>
        <button>Follow</button>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardUserInfo;