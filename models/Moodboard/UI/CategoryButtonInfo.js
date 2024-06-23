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
//  File      : CategoryButtonInfo.js                                         //
//  Project   : divas-client                                                  //
//  Date      : 2024-06-22                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// @XXX(mateusdigital): Refactor....
// -----------------------------------------------------------------------------
export function GetTopCategoriesInfo()
{
  let info = {};

  info["Fonts"]       = {icon: "insert_text", content: "Fonts"      };
  info["Elements"]    = {icon: "photo_prints", content: "Elements"             };
  info["Backgrounds"] = {icon: "background_dot_small", content: "Backgrounds"            };

  return info;
}

// -----------------------------------------------------------------------------
export function GetBottomCategoriesInfo()
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

  return info;
}