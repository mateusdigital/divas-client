// -----------------------------------------------------------------------------
import NET from "@/app/NET";

// -----------------------------------------------------------------------------
class CachedImageController
{
  // ---------------------------------------------------------------------------
  constructor()
  {
    this._imageMap = new Map();
  }

  // ---------------------------------------------------------------------------
  GetCachedImageForUrl(url, onLoadCallback)
  {
    if(this._imageMap.has(url)) {
      return this._imageMap.get(url);
    }

    const img = new Image();

    img.src    = NET.Make_Image_Url(url);
    img.onload = onLoadCallback;

    this._imageMap.set(url, img);

    return img;
  }

}

// -----------------------------------------------------------------------------
export default CachedImageController;