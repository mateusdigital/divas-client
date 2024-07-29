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
//  File      : ItemSelection.js                                              //
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
import BackButton from "@/components/UI/Buttons/BackButton.js";
// -----------------------------------------------------------------------------
import ItemsGrid from "../ItemsGrid/ItemsGrid.js";
// -----------------------------------------------------------------------------
import styles from "./ItemSelection.module.css";

// -----------------------------------------------------------------------------
function ItemSelection({category, OnSelectedCategoryChanged})
{
  //
  return (
    <div className={styles.container}>
      <BackButton
        onClick={() => {
          OnSelectedCategoryChanged(null);
        }}
      >
        Select new category
      </BackButton>

      <ItemsGrid category={category}/>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default ItemSelection;
