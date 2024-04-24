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
//  File      : [id].js                                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-16                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
// -----------------------------------------------------------------------------
import { useEffect, useState } from "react";
//
import App from "@/models/App";
import MoodboardDetails from "@/components/Moodboard/DetailsPage/MoodboardDetails";


// -----------------------------------------------------------------------------
function MoodboardDetailsPageForId()
{
  //
  const router = useRouter();
  const { id } = router.query;

  //
  const [moodboardModel, setMoodboardModel] = useState(null);
  useEffect(()=>{
    const _GetMoodboard = async ()=>{
      const moodboard_model = await App.GetMoodboardWithId(id);
      setMoodboardModel(moodboard_model);
    }

    if(id) {
      _GetMoodboard();
    }
  }, [id]);

  // Not ready...
  if (!moodboardModel) {
    return <div>Loading...</div>;
  }

  // Ready...
  return <MoodboardDetails moodboardModel={moodboardModel}></MoodboardDetails>
}

// -----------------------------------------------------------------------------
export default MoodboardDetailsPageForId;
