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
//  File      : CategoriesBar.js                                              //
//  Project   : divas-client                                                  //
//  Date      : 2024-03-25                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//---------------------------------------------------------------------------~//


// -----------------------------------------------------------------------------
import Constants from '@/app/Constants';
//
import styles from './CategoriesBar.module.css';


// -----------------------------------------------------------------------------
function CategoriesBar() {
  //
  //

  return (
    <div className={styles.categoriesBarItemsContainer}>

      <div className={styles.categoriesBarItemContainer}>
        <span className={styles.categoriesBarItemTitle}>Likes</span>
      </div>

      <div className={styles.categoriesBarItemContainer}>
        <span className={styles.categoriesBarItemTitle}>Designs</span>
      </div>

      <div className={styles.categoriesBarItemContainer}>
        <span className={styles.categoriesBarItemTitle}>Uploads</span>
      </div>

      <div className={styles.categoriesBarItemContainer}>
        <span className={styles.categoriesBarItemTitle}>Collections</span>
      </div>

      <div className={styles.categoriesBarItemContainer}>
        <span className={styles.categoriesBarItemTitle}>Challenges</span>
      </div>

    </div>
  );
}

export default CategoriesBar;
