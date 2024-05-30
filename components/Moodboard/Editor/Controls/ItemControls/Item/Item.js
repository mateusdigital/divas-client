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
//  File      : Item.js                                                       //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-29                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//


// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import CachedImage from "@/components/UI/CachedImage/CachedImage"
// -----------------------------------------------------------------------------
import styles from "./Item.module.css";

// -----------------------------------------------------------------------------
function ItemComponent({itemModel})
{
  const img_url = NET.Make_Image_Url(itemModel.imageUrl);

  //
  const [loaded, setLoaded] = useState(false);

  //
  const _HandleDragStart = (event) => {
    console.log("dragging");

    event.dataTransfer.clearData();
    event.dataTransfer.setData("text/plain", JSON.stringify(itemModel));
  }

  //
  return (<>
    <div className={styles.itemContainer}>
      {/* Placeholder */}
      {!loaded && <div className="@TODO">Loading...</div>}

      {/* Image */}
      <CachedImage
        itemModel={itemModel}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        draggable={true}
        onDragStart={_HandleDragStart}
      >
      </CachedImage>
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default ItemComponent;