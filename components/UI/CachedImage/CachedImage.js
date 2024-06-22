// -----------------------------------------------------------------------------
import App from "@/models/App";


// -----------------------------------------------------------------------------
function CachedImageComponent({imageUrl, ...imageProps})
{
  //
  const img = App.GetCachedImageForUrl(imageUrl, imageProps.onLoad);

  //
  return (<>
    <img src={img.src} {...imageProps}></img>
  </>);
}

// -----------------------------------------------------------------------------
export default CachedImageComponent;