
// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET    from "@/app/NET";
import Result from "@/app/Result";
import Assert from "@/utils/Assert";
// -----------------------------------------------------------------------------
import LoginService from "./LoginService";
import MoodboardItemsController from "@/controllers/Moodboard/MoodboardItemsController"
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";


// -----------------------------------------------------------------------------
class MoodboardService
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
    const result = await LoginService.GetCurrentLoggedUser();
    if(!result.IsValid()) {
      return result;
    }

    //
    const user_model = result.value;
    const full_save_data = {
      info:  infoData,
      items: itemsData,
      user: {
        _id: user_model._id
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

      const response_data     = await response.json();
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

}

export default MoodboardService;