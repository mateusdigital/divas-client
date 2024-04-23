//~---------------------------------------------------------------------------//
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
//  File      : DesignsItem.js                                                //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-01                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//


// -----------------------------------------------------------------------------
import { useEffect, useState } from 'react';
//
import styles from "./DesignGridItem.module.css";
import Link from 'next/link';
import NET from '@/app/NET';

// -----------------------------------------------------------------------------
function DesignGridItem({ designItem, children })
{

  const design_item_details_url = NET.Make_Navigation_Url("designItem", designItem._id);
  return (
    <div>
      <Link href={design_item_details_url}>
        <img src={designItem.imageUrl}></img>
      </Link>
    </div>
  );
}

// -----------------------------------------------------------------------------
export default DesignItem;
