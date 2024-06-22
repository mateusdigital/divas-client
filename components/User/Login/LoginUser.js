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
//  File      : LoginUser.js                                                  //
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
import { useState } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import UsePageRouter from "@/utils/PageRouter";
import PageUrls from "@/utils/PageUrls";
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import Input from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import styles from "./LoginUser.module.css";


// -----------------------------------------------------------------------------
function LoginUser()
{
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTryingToLog, setIsTryingToLog] = useState(false);

  const { NavigateTo } = UsePageRouter();

  //
  const _HandleUsernameChange = async (e) => { setUsername(e.target.value); };
  const _HandlePasswordChange = async (e) => { setPassword(e.target.value); };

  const _HandleSubmit = async () => {
    setIsTryingToLog(true);

    const data = {
      username: username,
      password: password,
    };

    const result = await App.TryToLoginUserWithData(data);
    if(result.IsError()) {
      ToastUtils.Error(result.errorJson.message);
      setIsTryingToLog(false);

      return false;
    }

    const user = result.value;
    App.SetCurrentLoggedUser(user);
    setIsTryingToLog(false);

    NavigateTo(PageUrls.UserOwnProfile);
  };

  //
  return (<>
    <div className={styles.loginContainer} >
      {/*  */}
      <div>
          <DivasLogo></DivasLogo>
      </div>

      {/*  */}
      <div>
        <div className={styles.inputContainer}>
          <span>Username</span>
          <Input type="text" value={username} onChange={_HandleUsernameChange}></Input>
        </div>

        <div className={styles.inputContainer}>
          <span>Password</span>
          <Input type="password" value={password} onChange={_HandlePasswordChange}></Input>
        </div>
      </div>

      {/*  */}
      <div className={styles.buttonsContainer}>
        <div>
          <ActionButton onClick={_HandleSubmit}>login</ActionButton>
          <TextButton onClick={_HandleSubmit}>forgot password?</TextButton>
        </div>
        or
        <div>
          <ActionButton onClick={_HandleSubmit}>sign up</ActionButton>
        </div>
      </div>
    </div>
  </>)
}

// -----------------------------------------------------------------------------
export default LoginUser;