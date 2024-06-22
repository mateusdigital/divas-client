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
//  File      : MoodboardControlCategories.js                                 //
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
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import ButtonTop    from "../CategoryButton/CategoryButtonTop";
import ButtonBottom from "../CategoryButton/CategoryButtonBottom";
// -----------------------------------------------------------------------------
import styles from "./CategoriesSelection.module.css"


function _CreateControlCategory(index, type, handler) {
  const info = GetInfoForControlCategory(type);
  return (
    <ButtonBottom
      key={index}
      icon={info.icon}
      content={info.content}
      handler={()=>{ handler(type); }}
    >
    </ButtonBottom>
  )
}


function GetInfoForControlCategory(type)
{
  let info = {};

  info["accessories"]       = {icon: "insert_text", content: "accessories"      };
  info["bags"]              = {icon: "insert_text", content: "bags"             };
  info["beach"]             = {icon: "insert_text", content: "beach"            };
  info["beauty"]            = {icon: "insert_text", content: "beauty"           };
  info["blazers_and_coats"] = {icon: "insert_text", content: "blazers_and_coats"};
  info["blousesshirts"]     = {icon: "insert_text", content: "blousesshirts"    };
  info["dresses"]           = {icon: "insert_text", content: "dresses"          };
  info["jewelry"]           = {icon: "insert_text", content: "jewelry"          };
  info["monkey"]            = {icon: "insert_text", content: "monkey"           };
  info["pants"]             = {icon: "insert_text", content: "pants"            };
  info["shoes"]             = {icon: "insert_text", content: "shoes"            };
  info["shorts"]            = {icon: "insert_text", content: "shorts"           };
  info["skirts"]            = {icon: "insert_text", content: "skirts"           };
  info["suitcases"]         = {icon: "insert_text", content: "suitcases"        };
  info["sweater"]           = {icon: "insert_text", content: "sweater"          };
  info["tshirts"]           = {icon: "insert_text", content: "tshirts"          };

  return info[type];
}

// @TODO(mateusdigital): Make this something got from the database...
function GetBottomCategoriesTypes()
{
    return [
      "accessories",
      "bags",
      "beach",
      "beauty",
      "blazers_and_coats",
      "blousesshirts",
      "dresses",
      "jewelry",
      "monkey",
      "pants",
      "shoes",
      "shorts",
      "skirts",
      "suitcases",
      "sweater",
      "tshirts",
    ];
}


// -----------------------------------------------------------------------------
function Component({OnSelectedCategoryChanged})
{
  const _OnFontsClicked = ()=>{
  }
  const _OnElementsClicked = ()=>{
  }
  const _OnBackgroundsClicked = ()=>{
  }

  //
  const bottom_categories_types = GetBottomCategoriesTypes();
  return (<>
    {/* TOP CATEGORIES MODES */}
    <div className={styles.topCategoriesContainer}>
      <ButtonTop icon="insert_text"          content="Fonts"       handler={_OnFontsClicked}> </ButtonTop>
      <ButtonTop icon="photo_prints"         content="Elements"    handler={_OnElementsClicked}> </ButtonTop>
      <ButtonTop icon="background_dot_small" content="Backgrounds" handler={_OnBackgroundsClicked}> </ButtonTop>
    </div>
    {/* -TOP CATEGORIES MODES */}

    {/* DEFAULT CATEGORIES */}
    <div>
      <span>Categories</span>
      <div className={styles.bottomCategoriesContainer}>
        {bottom_categories_types.map((type, index) => {
          return _CreateControlCategory(index, type, OnSelectedCategoryChanged);
        })}
      </div>
    </div>
    {/* DEFAULT CATEGORIES */}
  </>)
}

// -----------------------------------------------------------------------------
export default Component;