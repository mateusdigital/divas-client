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
import MaterialIcon from "@/components/MaterialIcon";
import ActionButton from "@/components/UI/Buttons/ActionButton.js";
import TextButton from "@/components/UI/Buttons/TextButton.js";
// -----------------------------------------------------------------------------
import ItemsGrid from "../ItemsGrid/ItemsGrid.js";
// -----------------------------------------------------------------------------
import styles from "./ItemSelection.module.css";

// -----------------------------------------------------------------------------
function ItemSelection({category, OnSelectedCategoryChanged})
{
  //
  return (<>
    <TextButton className={styles.backButton} onClick={()=>{ OnSelectedCategoryChanged(null); }}>
      <MaterialIcon icon="arrow_back_ios_new"></MaterialIcon>
      <span>Select new category</span>
    </TextButton>

    <ItemsGrid category={category}/>
  </>);
}

// -----------------------------------------------------------------------------
export default ItemSelection;