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
import Input from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import styles from "./Forms.module.css";


// -----------------------------------------------------------------------------
function ForgotPassword()
{
  //
  const [username, setUsername] = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  const { NavigateTo } = UsePageRouter();

  //
  const _HandleUsernameChange = async (e) => {
    setUsername(e.target.value);
  };

  //
  const _HandleResetPassword = async () => {
    setHasSubmit(true);
  }

  //
  const _HandleGoBack = async() => {
    NavigateTo(PageUrls.UserLogin);
  }

  //
  return (<>
    <div className={styles.loginContainer} >
      {/*  */}
      <div>
          <DivasLogo/>
      </div>

      {/*  */}

      { !hasSubmit && <>
        <div>
          <div className={styles.inputContainer}>
            <span>Username</span>
            <Input type="text" value={username} onChange={_HandleUsernameChange}></Input>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <div>
            <ActionButton className="flex-grow" onClick={_HandleResetPassword}>Reset Password</ActionButton>
          </div>
        </div>
      </>}

      { hasSubmit && <>
        <div className={styles.buttonsContainer}>
          <span>If a username was found you will received information on the email.</span>
          <ActionButton className="flex-grow" onClick={_HandleGoBack}>Go Back</ActionButton>
        </div>
      </>}

    </div>
  </>)
}

// -----------------------------------------------------------------------------
export default ForgotPassword;