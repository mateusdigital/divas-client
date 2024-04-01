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
//  File      : NET.js                                                        //
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
import Constants from "./Constants";

// -----------------------------------------------------------------------------
class NET
{
  // ---------------------------------------------------------------------------
  static SERVER_URL  = Constants.SERVER_URL
  static SERVER_PORT = Constants.SERVER_PORT;

  // ---------------------------------------------------------------------------
  static Make_API_Url(endpoint, data)
  {
    const base_url = `${Constants.SERVER_URL}:${Constants.SERVER_PORT}/${endpoint}`;
    const final_url = (data) ? `${base_url}/${data}` : `${base_url}`;

    console.log(`API: ${final_url}`);
    return final_url;
  }

  static async GET(url)
  {

  }

  static async POST(url, options)
  {
    const base_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const full_options = {...base_options, ...options };

    return fetch(url, full_options);
  }
}

// -----------------------------------------------------------------------------
export default NET;