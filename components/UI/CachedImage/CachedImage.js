// -----------------------------------------------------------------------------
import App from "@/models/App";


// -----------------------------------------------------------------------------
function CachedImageComponent({itemModel, ...imageProps})
{
  //
  const img = App.GetCachedImageForUrl(itemModel.imageUrl, imageProps.onLoad);

  //
  return (<>
    <img src={img.src} {...imageProps}></img>
  </>);
}

// -----------------------------------------------------------------------------
export default CachedImageComponent;