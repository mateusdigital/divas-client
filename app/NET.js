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
import Debug from "../libs/mdjs/mdjs/Debug.js";
import Assert from "@/utils/Assert";

async function safe_fetch(url, options)
{
  try {
    return await fetch(url, options);
  }
  catch (error) {
    debugger;
    Debug.Exception(`Failed to perform safe_fetch: (${url})`, error);
    throw error;

    return { status: 999 };
  }
}

// -----------------------------------------------------------------------------
class NET
{
  // ---------------------------------------------------------------------------
  static SERVER_URL  = Constants.SERVER_URL;
  static SERVER_PORT = Constants.SERVER_PORT;

  static APP_URL  = Constants.APP_URL;
  static APP_PORT = Constants.APP_PORT;

  static _ReplaceArgs(url, ...args)
  {
    Assert.NotNullOrEmpty(url);


    try {
      const components = url.split("/");
      const replaced   = [];

      let arg_index = 0;
      for (let i = 0; i < components.length; ++i) {
        const component = components[i];
        if (component.startsWith(":")) {
          if (arg_index < args.length) {
            const value = args[arg_index];
            replaced.push(value);
            ++arg_index;
          }
        }
        else if (component.length != 0) {
          replaced.push(component);
        }
      }

      return replaced.join("/");
    }
    catch(error) {
      debugger;
    }
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
  static Make_Navigation_Url(endpoint, ...data)
  {
    const base_url  = `${Constants.APP_URL}:${Constants.APP_PORT}`;
    const replaced  = NET._ReplaceArgs(endpoint, ...data);
    const final_url = `${base_url}/${replaced}`;

    console.log(`Navigation: ${final_url}`);
    return final_url;
  }

  // ---------------------------------------------------------------------------
  static Make_External_Image_Url(suffix)
  {
    const final_url = `${Constants.EXTERNAL_IMAGES_URL}/${suffix}`;
    return final_url;
  }

  // ---------------------------------------------------------------------------
  static Make_Local_Image_Url(suffix)
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
    return safe_fetch(url);
  }

  //
  // POST
  //

  // ---------------------------------------------------------------------------
  static async POST_DATA(url, data, options)
  {
    const base_options = {
      method: "POST",
      body:   data
    };

    const full_options = {...base_options, ...options};
    return safe_fetch(url, full_options);
  }

  // ---------------------------------------------------------------------------
  static async POST_JSON(url, jsonObject, options)
  {
    const base_options = {
      method:  "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:    JSON.stringify(jsonObject),
    };

    const full_options = {...base_options, ...options};
    return safe_fetch(url, full_options);
  }


  // ---------------------------------------------------------------------------
  static async POST(url, options)
  {
    const base_options = {method: "POST",};
    const full_options = {...base_options, ...options};

    return safe_fetch(url, full_options);
  }


  //
  // Patch
  //

  // ---------------------------------------------------------------------------
  static async PATCH_JSON(url, jsonObject, options)
  {
    const base_options = {
      method:  "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body:    JSON.stringify(jsonObject),
    };

    const full_options = {...base_options, ...options};
    return safe_fetch(url, full_options);
  }


  //
  // Delete
  //

  // ---------------------------------------------------------------------------
  static async DELETE(url, ...options)
  {
    const base_options = {
      method: "DELETE",
    };

    const full_options = {...base_options, ...options};
    return safe_fetch(url, full_options);
  }

}

// -----------------------------------------------------------------------------
export default NET;
