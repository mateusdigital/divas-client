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
//  File      : CategoriesBarFactory.js                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-23                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

//
import CATEGORIES_BAR_NAMES from "./CategoriesBarNames";
import MoodboardGrid from "@/components/Moodboard/Grid/MoodboardGrid";
import LikesGrid from "@/components/Likes/Grid/LikesGrid";

// -----------------------------------------------------------------------------
function GetComponentForCategoryName(name, userModel)
{
    switch (name) {
      case "Moodboards":  return <MoodboardGrid userModel={userModel}></MoodboardGrid>;
      case "Likes":       return <LikesGrid     userModel={userModel}></LikesGrid>;
      case "Collections": return <div></div>;
      case "Uploads":     return <div></div>;

      default:
        debugger;
        return null;
    }
}

export default GetComponentForCategoryName;