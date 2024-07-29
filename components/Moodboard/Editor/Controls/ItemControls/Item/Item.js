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
import {useState} from "react";
// -----------------------------------------------------------------------------
import NET from "@/app/NET";
import CachedImage from "@/components/UI/Images/CachedImage";
import {useMoodboardEditorContext} from "@/contexts/Moodboard/Editor/MoodboardEditorContext.js";
// -----------------------------------------------------------------------------
import styles from "./Item.module.css";


// -----------------------------------------------------------------------------
function ItemComponent({itemModel})
{
  //
  const [loaded, setLoaded] = useState(false);
  const moodboard_controler = useMoodboardEditorContext();

  //
  const _HandleDragStart = (event) => {
    console.log("dragging");

    event.dataTransfer.clearData();
    event.dataTransfer.setData("text/plain", JSON.stringify(itemModel));
  };


  //
  return (
    <div className={styles.contentContainer}>
      {/* Placeholder */}
      {!loaded && <div className="@TODO">Loading...</div>}

      {/* Image */}
      <CachedImage
        style={{display: loaded ? "block" : "none"}}

        imageUrl={
          NET.Make_External_Image_Url(itemModel.imageUrl)
        }
        onLoad={() => {
          setLoaded(true);
        }}

        draggable={true}
        onDragStart={_HandleDragStart}

        onDoubleClick={(event)=>{
          moodboard_controler.XXX_AddExternalImage(
            itemModel,
            {
              mouseX: -1,
              mouseY: -1,
              ...event
            }
          )
        }}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------
export default ItemComponent;
