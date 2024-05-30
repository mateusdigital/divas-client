// -----------------------------------------------------------------------------
import NET from "@/app/NET";

//
// Caching
//

// -----------------------------------------------------------------------------
const _imageMap = new Map();

// -----------------------------------------------------------------------------
function _GetCachedImageForUrl(url, props)
{
  if(_imageMap.has(url)) {
    return _imageMap.get(url);
  }

  const img = new Image();

  img.src    = NET.Make_Image_Url(url);
  img.onload = props.onLoad;

  _imageMap.set(url, img);

  return img;
}


//
// Component
//

// -----------------------------------------------------------------------------
function CachedImageComponent({itemModel, ...imageProps})
{
  //
  const img = _GetCachedImageForUrl(itemModel.imageUrl, imageProps);

  //
  return (<>
    <img src={img.src} {...imageProps}></img>
  </>);
}

// -----------------------------------------------------------------------------
export default CachedImageComponent;