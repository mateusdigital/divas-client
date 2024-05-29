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
// -----------------------------------------------------------------------------
import styles from "./Item.module.css";

// -----------------------------------------------------------------------------
function Component({itemModel})
{
  const img_url = NET.Make_Image_Url(itemModel.imageUrl);

  //
  const [loaded, setLoaded] = useState(false);

  //
  return (<>
    <div className={styles.itemContainer}>
      {!loaded && <div className="placeholder">Loading...</div>}
      <img
        src={img_url}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;