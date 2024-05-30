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
//  File      : MoodboardItem.js                                              //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-30                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
class MoodboardItemModel
{
  // ---------------------------------------------------------------------------
  constructor({
    _id,
    imageUrl,
    category,
    subcategory1,
    subcategory2,
    color,
  })
  {
    this._id          = _id;

    this.imageUrl     = imageUrl;

    this.category     = category;
    this.subcategory1 = subcategory1;
    this.subcategory2 = subcategory2;

    this.color        = color;
  }

  // ---------------------------------------------------------------------------
  static CreateFromData(data)
  {
    const model = new MoodboardItemModel(data);
    return model;
  }
}

// -----------------------------------------------------------------------------
export default MoodboardItemModel;