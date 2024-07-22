// -----------------------------------------------------------------------------
import React, { useRef } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import NET from "@/app/NET";


// -----------------------------------------------------------------------------
function CachedImageComponent({imageUrl, imagePlaceholderUrl, ...imageProps})
{
  //
  const img_element = App.GetCachedImageForUrl(imageUrl, imageProps.onLoad);

  //
  const _HandleLoadError = (error, img) => {
    if(imagePlaceholderUrl) {
      img.onError = () => {}
      img.src = NET.Make_Local_Image_Url(imagePlaceholderUrl);
    }
  };

  const imgRef = useRef();
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
export default CachedImageComponent;