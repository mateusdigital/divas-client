// -----------------------------------------------------------------------------
import React, { useRef } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import NET from "@/app/NET";
import Assert from "@/utils/Assert";


// -----------------------------------------------------------------------------
function CachedImage({imageUrl, imagePlaceholderUrl, ...imageProps})
{
  //
  const _HandleLoadError = (error, img) => {
    if(imagePlaceholderUrl) {
      img.onError = () => {}
      img.src = NET.Make_Local_Image_Url(imagePlaceholderUrl);
    }
  };

  //
  const final_url = imageUrl ? imageUrl : imagePlaceholderUrl;
  Assert.NotNull(final_url);

  const imgRef = useRef();
  const img_element = App.GetCachedImageForUrl(final_url, imageProps.onLoad);


  //
  return (<>
    <img
      ref={imgRef}
      src={img_element.src}
      onError={(error)=>{
        _HandleLoadError(error, imgRef.current);
      }}
      {...imageProps}
      ></img>
  </>);
}

// -----------------------------------------------------------------------------
export default CachedImage;