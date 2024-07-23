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
//  File      : App.js                                                        //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-23                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import Result from "@/app/Result";
// -----------------------------------------------------------------------------
import Assert from "@/utils/Assert";
import MoodboardItemsController from "@/controllers/Moodboard/MoodboardItemsController"
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
import CachedImageController from "@/controllers/CachedImage/CachedImageController";

// -----------------------------------------------------------------------------
class App
{
  //
  // Cached Images
  //

  // ---------------------------------------------------------------------------
  static GetCachedImageForUrl(url, onLoadCallback)
  {
    Assert.NotNull(url);

    // Lazy load the controller.
    if(!App._cachedImagesController) {
      App._cachedImagesController = new CachedImageController();
    }

    return App._cachedImagesController.GetCachedImageForUrl(url, onLoadCallback);
  }
};


// -----------------------------------------------------------------------------
export default App;