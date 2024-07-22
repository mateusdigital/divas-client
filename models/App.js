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
  // Moodboard
  //

  // ---------------------------------------------------------------------------
  static async GetMultipleMoodboardWithIds(idList)
  {
    Assert.NotNullOrEmpty(idList);

    const api_url = NET.Make_API_Url(Endpoints.Moodboard.GetMultiple, idList);

    const response = await NET.POST_JSON(api_url, { ids: idList });
    if(response.status != StatusCodes.OK) {
      return await Result.ResponseError(response);
    }

    // @TODO(mateusdigital): Create model for moodboard.
    const data = await response.json();
    return Result.Valid(data);
  }


  // ---------------------------------------------------------------------------
  static async GetMoodboardWithId(id)
  {
    Assert.NotNull(id, "id can't be null");

    const api_url = NET.Make_API_Url(Endpoints.Moodboard.GetById, id);

    const response = await NET.GET(api_url);
    if(response.status != StatusCodes.OK) {
      return null;
    }

    // @TODO(mateusdigital): Create model for moodboard.
    const data = await response.json();
    return data;
  }

  // ---------------------------------------------------------------------------
  static async PublishMoodboardItem(infoData, itemsData, photo)
  {
    const result = await App.GetCurrentLoggedUser();
    if(!result.IsValid()) {
      return result;
    }

    const user_data = result.value;
    const full_save_data = {
      info: infoData,
      items: itemsData,
      user: {
        _id: user_data._id
      }
    }

    //
    {
      const form_data = new FormData();
      form_data.append("photo", photo, "photo-blob.png");

      const api_url  = NET.Make_API_Url(Endpoints.Moodboard.UploadMoodboardPhoto);
      const response = await NET.POST_DATA(api_url, form_data);

      if(response.status != StatusCodes.CREATED) {
        return await Result.ResponseError(response);
      }

      const response_data  = await response.json();
      full_save_data.photoUrl = response_data.photoPath;
    }

    //
    {
      const api_url  = NET.Make_API_Url(Endpoints.Moodboard.Create);
      const response = await NET.POST_JSON(api_url, full_save_data);

      if(response.status != StatusCodes.CREATED) {
        return await Result.ResponseError(response);
      }

      const json = await response.json();
      user_data.moodboards.push(json);
      user_data.SaveData();

      return Result.Valid(json);
    }
  }

  //
  // Moodboard Items
  //

  // ---------------------------------------------------------------------------
  static _moodboardItemsController = null;

  // ---------------------------------------------------------------------------
  static async GetMoodboardItemsForCategory(category)
  {
    Assert.NotNull(category);

    // Lazy load the controller.
    if(!App._moodboardItemsController) {
      App._moodboardItemsController = new MoodboardItemsController();
    }

    // We already fetched that data???
    if(!App._moodboardItemsController.HasItemsForCategory(category)) {
      await App._moodboardItemsController.FetchItemsForCategory(category);
    }

    return App._moodboardItemsController.GetItemsForCategory(category);
  }

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