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
//  File      : MoodboardControls.js                                          //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-02                                                    //
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
import Input from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import {GetBottomCategoriesNames} from "@/models/Moodboard/UI/CategoryButtonsNames";
import {GetBottomCategoriesInfo} from "@/models/Moodboard/UI/CategoryButtonInfo";
import {GetTopCategoriesNames} from "@/models/Moodboard/UI/CategoryButtonsNames";
import {GetTopCategoriesInfo} from "@/models/Moodboard/UI/CategoryButtonInfo";
// -----------------------------------------------------------------------------
import ButtonTop from "./CategoryControls/CategoryButton/CategoryButtonTop.js";
import ButtonBottom from "./CategoryControls/CategoryButton/CategoryButtonBottom.js";
import ItemsSelection from "./ItemControls/ItemSelection/ItemSelection.js";
// -----------------------------------------------------------------------------
import styles from "./MoodboardEditingControls.module.css";


// -----------------------------------------------------------------------------
const _gBottomCategoriesNames = GetBottomCategoriesNames();
const _gBottomCategoriesInfo  = GetBottomCategoriesInfo();

const _gTopCategoriesNames = GetTopCategoriesNames();
const _gTopCategoriesInfo  = GetTopCategoriesInfo();

// -----------------------------------------------------------------------------
function _CreateCategoryTopButton(index, name, handler)
{
  const info = _gTopCategoriesInfo[name];

  return (
    <ButtonTop
      key={index}
      icon={info.icon}
      content={info.content}
      handler={() => {
        handler(name);
      }}
    />
  );
}


// -----------------------------------------------------------------------------
function _CreateCategoryBottomButton(index, name, handler)
{
  const info = _gBottomCategoriesInfo[name];

  return (
    <ButtonBottom
      key={index}
      icon={info.icon}
      content={info.content}
      handler={() => {
        handler(name);
      }}
    />
  );
}


//
// Components
//

// -----------------------------------------------------------------------------
function _CategoriesSelection(
  _OnSelectedTopCategoryChanged,
  _OnSelectedBottomCategoryChanged
)
{
  return (
    <div className={styles.contentContainer}>
      {/*  */}
      <div className={styles.inputContainer}>
        <span>Select new category</span>
        <Input type="text"></Input>
      </div>

      {/*  */}
      <div className={styles.topContainer}>
        {_gTopCategoriesNames.map((name, index) => {
          return _CreateCategoryTopButton(
            index,
            name,
            _OnSelectedTopCategoryChanged
          );
        })}
      </div>

      {/*  */}
      <div className={styles.bottomContainer}>
        <span className="padding-bottom-1">Categories</span>
        <div className={styles.gridContainer}>

          {_gBottomCategoriesNames.map((name, index) => {
            return _CreateCategoryBottomButton(
              index,
              name,
              _OnSelectedBottomCategoryChanged
            );
          })}
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
function _ItemsSelection(currentSelectedCategory, OnSelectedCategoryChanged)
{
  return (
    <ItemsSelection
      category={currentSelectedCategory}
      OnSelectedCategoryChanged={OnSelectedCategoryChanged}
    />
  );
}


// -----------------------------------------------------------------------------
function MoodboardEditingControls({className})
{
  //
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(null);

  // @TODO(mateusdigital): Make the items selection different for the top categories.
  const _OnSelectedCategoryChanged       = (category) => {
    setCurrentSelectedCategory(category);
  };
  const _OnSelectedTopCategoryChanged    = (category) => {
    setCurrentSelectedCategory(category);
  };
  const _OnSelectedBottomCategoryChanged = (category) => {
    setCurrentSelectedCategory(category);
  };

  //
  return (
    <div className={className}>
      {currentSelectedCategory
       ? _ItemsSelection(currentSelectedCategory, _OnSelectedCategoryChanged)
       : _CategoriesSelection(_OnSelectedTopCategoryChanged, _OnSelectedBottomCategoryChanged)
      }
    </div>
  );
}

// -----------------------------------------------------------------------------
export default MoodboardEditingControls;
