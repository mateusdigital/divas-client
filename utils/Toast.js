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
//  File      : Toast.js                                                      //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-13                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// -----------------------------------------------------------------------------
class ToastUtils
{
  static Error(msg)
  {
    toast(msg);
  }

  static ResultError(result)
  {
    ToastUtils.Error(result.errorJson.message);
  }

  static Success(msg)
  {
    toast(msg);
  }
}

// -----------------------------------------------------------------------------
export default ToastUtils;
