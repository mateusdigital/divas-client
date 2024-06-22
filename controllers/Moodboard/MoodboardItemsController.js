// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import MoodboardItemModel from "@/models/Moodboard/MoodboardItem";
import Endpoints from "@/divas-shared/shared/API/Endpoints";


// -----------------------------------------------------------------------------
class MoodboardItemsController
{
  // ---------------------------------------------------------------------------
  constructor()
  {
    this._items = new Map();
  }

  // ---------------------------------------------------------------------------
  HasItemsForCategory(category)
  {
    return this._items.has(category);
  }

  // ---------------------------------------------------------------------------
  GetItemsForCategory(category)
  {
    if(!this.HasItemsForCategory(category)) {
      return null;
    }

    return this._items.get(category);
  }

  // ---------------------------------------------------------------------------
  async FetchItemsForCategory(category)
  {
    const api_url  = NET.Make_API_Url(Endpoints.MoodboardItem.GetByCategory, category);
    const response = await NET.GET(api_url);

    if(response.status != StatusCodes.OK) {
      return null;
    }

    const data = await response.json();

    const arr = [];
    for(let item of data) {
      const model = MoodboardItemModel.CreateFromData(item);
      arr.push(model);
    }

    this._items.set(category, arr);
  }
}

// -----------------------------------------------------------------------------
export default MoodboardItemsController;