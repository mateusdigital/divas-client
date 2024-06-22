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
//  File      : profile.js                                                    //
//  Project   : divas-client                                                  //
//  Date      : 2024-04-23                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import { useEffect, useState } from "react";
//
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";
//
import MainLayout from "@/components/Layout/MainLayout";
import UserProfile from "@/components/User/UserProfile";


// -----------------------------------------------------------------------------
function ProfilePage()
{
  //
  const [loggedUserResult, setLoggedUserResult] = useState(null);
  const { NavigateTo } = UsePageRouter();

  //
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await App.GetCurrentLoggedUser();
      if(result.IsValid()) {
        setLoggedUserResult(result);
      } else {
        ToastUtils.ResultError(result);
        NavigateTo(PageUrls.UserLogin);
      }
    }

    _GetLoggedUser();
  }, []);


  // Not ready...
  if (!loggedUserResult) {
    return <div>Loading...</div>;
  }

  // Ready...
  return (<>
    <MainLayout>
      <UserProfile userModel={loggedUserResult.value}/>
    </MainLayout>
  </>);
}

// -----------------------------------------------------------------------------
export default ProfilePage;
