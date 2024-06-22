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

  static APP_URL  = Constants.APP_URL
  static APP_PORT = Constants.APP_PORT;

  static _ReplaceArgs(url, ...args)
  {
    const components = url.split("/");
    const replaced   = [];

    let arg_index = 0;
    for(let i = 0; i < components.length; ++i) {
      const component = components[i];
      if(component.startsWith(":")) {
        if(arg_index < args.length) {
          const value = args[arg_index];
          replaced.push(value);
          ++arg_index;
        }
      } else if(component.length != 0) {
        replaced.push(component);
      }
    }

    return replaced.join("/");
  }

  // ---------------------------------------------------------------------------
  static Make_API_Url(endpoint, ...data)
  {
    const base_url  = `${Constants.SERVER_URL}:${Constants.SERVER_PORT}`;
    const replaced  = NET._ReplaceArgs(endpoint, ...data);
    const final_url = `${base_url}/${replaced}`;

    console.log(`API: ${final_url}`);
    return final_url;
  }

  // ---------------------------------------------------------------------------
  static Make_Navigation_Url(endpoint, data)
  {
    const base_url = `${Constants.APP_URL}:${Constants.APP_PORT}/${endpoint}`;
    const final_url = (data) ? `${base_url}/${data}` : `${base_url}`;

    console.log(`API: ${final_url}`);
    return final_url;
  }

  // ---------------------------------------------------------------------------
  static Make_Image_Url(suffix)
  {
    const final_url = `${Constants.IMAGES_URL}/${suffix}`;
    return final_url;
  }

  //
  // GET
  //

  // ---------------------------------------------------------------------------
  static async GET(url)
  {
    try {
      return fetch(url);
    } catch(ex) {
      console.log(`ex: ${ex}`);
      debugger;
    }
  }

  //
  // POST
  //

  // ---------------------------------------------------------------------------
  static async POST_DATA(url, data, options)
  {
    const base_options = {
      method: "POST",
      body:  data
    };
    const full_options = {...base_options, ...options };

    return fetch(url, full_options);
  }

  // ---------------------------------------------------------------------------
  static async POST_JSON(url, jsonObject, options)
  {
    const base_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    };
    const full_options = {...base_options, ...options };
    return fetch(url, full_options);
  }

  // ---------------------------------------------------------------------------
  static async POST(url, options)
  {
    const base_options = { method: "POST", };
    const full_options = {...base_options, ...options };
    return fetch(url, full_options);
  }
}

// -----------------------------------------------------------------------------
export default NET;