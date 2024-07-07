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
import LabeledInput from "@/components/UI/Inputs/LabeledInput";
// -----------------------------------------------------------------------------
import styles from "./Forms.module.css";


// -----------------------------------------------------------------------------
function LoginUserForm()
{
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isTryingToLog, setIsTryingToLog] = useState(false);

  const { NavigateTo } = UsePageRouter();

  //
  const _HandleUsernameChange = async (e) => { setUsername(e.target.value); };
  const _HandlePasswordChange = async (e) => { setPassword(e.target.value); };

  //
  const _HandleLogin = async () => {
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

  const _HandleForgotPassword = async () => {
    NavigateTo(PageUrls.UserForgotPassword);
  }

  const _HandleSignUp = async () => {
    NavigateTo(PageUrls.UserSignUp);
  }

  //
  return (<>
    <div className={styles.loginContainer} >
      {/*  */}
      <div>
          <DivasLogo className={styles.divasLogo}></DivasLogo>
      </div>

      {/*  */}
      <div>
        <div className={styles.inputContainer}>
          <LabeledInput
            type="text"
            value={username}
            onChange={_HandleUsernameChange}>
            Username
          </LabeledInput>
        </div>

        <div className={styles.inputContainer}>
          <LabeledInput
            type="password"
            value={password}
            onChange={_HandlePasswordChange}>
            Password
          </LabeledInput>
        </div>
      </div>

      {/*  */}
      <div className={styles.buttonsContainer}>
        <div>
          <ActionButton className="" onClick={_HandleLogin}>login</ActionButton>
          <TextButton className="flex-grow" onClick={_HandleForgotPassword}>forgot password?</TextButton>
        </div>
        or
        <div>
          <ActionButton className="flex-grow" onClick={_HandleSignUp}>sign up</ActionButton>
        </div>
      </div>
    </div>
  </>)
}

// -----------------------------------------------------------------------------
export default LoginUserForm;