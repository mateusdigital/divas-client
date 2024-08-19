// -----------------------------------------------------------------------------
import { StatusCodes } from "http-status-codes";
// -----------------------------------------------------------------------------
import Endpoints from "@/divas-shared/shared/API/Endpoints";
// -----------------------------------------------------------------------------
import NET    from "@/app/NET";
import Result from "@/app/Result";
// -----------------------------------------------------------------------------
import Assert from "@/utils/Assert";

// -----------------------------------------------------------------------------
class FeedService
{
  // ---------------------------------------------------------------------------
  static async GetFeedForUserWithId(userId, page)
  {
    Assert.NotNull(userId);

    const limit = 10;
    try {
      const api_url  = NET.Make_API_Url(Endpoints.Feed.UserFeed, userId) + `?page=${page}&limit=${limit}`
      const response = await NET.GET(api_url);

      if(response.status != StatusCodes.OK) {
        return Result.ResponseError(response);
      }

      const json = await response.json();
      return Result.Valid(json);
    }
    catch(error) {
      return Result.ExceptionError(error);
    }
  }
}

// -----------------------------------------------------------------------------
export default FeedService;