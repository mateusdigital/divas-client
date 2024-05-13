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
//  File      : Assert.js                                                     //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-24                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

class Assert
{
  // ---------------------------------------------------------------------------
  static NotNull(obj, msg)
  {
    if(obj === null || obj == undefined) {
      if(!msg) {
        msg = "Can't be null or empty...";
      }

      const final_msg = `[Assert - NonNull] - ${msg}`;
      console.error(final_msg);
      debugger;
      throw new Error(final_msg);
    }
  }

  // ---------------------------------------------------------------------------
  static NotNullOrEmpty(obj, msg)
  {
    if(obj === null || obj == undefined || obj.length == 0) {
      if(!msg) {
        msg = "Can't be null or empty...";
      }

      const final_msg = `[Assert - NonNullOrEmpty] - ${msg}`;
      console.error(final_msg);
      debugger;
      throw new Error(final_msg);
    }
  }

}

export default Assert;