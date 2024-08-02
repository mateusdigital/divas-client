// -----------------------------------------------------------------------------
import { useState } from "react";
// -----------------------------------------------------------------------------
import { PageUrls, usePageRouter} from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import DivasLogo    from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import Input        from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import styles from "./Forms.module.css";
import LabeledInput from "@/components/UI/Inputs/LabeledInput";


// -----------------------------------------------------------------------------
function ForgotPassword()
{
  //
  const [username, setUsername]   = useState("");
  const [hasSubmit, setHasSubmit] = useState(false);

  const { NavigateTo } = usePageRouter();

  //
  const _HandleUsernameChange = async (e) => { setUsername(e.target.value); };
  const _HandleResetPassword  = async ()  => { setHasSubmit(true); }
  const _HandleGoBack         = async ()  => { NavigateTo(PageUrls.UserLogin); }

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
            <LabeledInput
              type="text"
              value={username}
              onChange={_HandleUsernameChange}>
                Username
            </LabeledInput>
          </div>
        </div>

        <div className={styles.buttonsContainer}>
            <ActionButton className="flex-grow" onClick={_HandleResetPassword}>Reset Password</ActionButton>
            <ActionButton onClick={_HandleGoBack}>Go Back</ActionButton>
        </div>
      </>}

      {/* When user already have submit the username for resetting the password */}
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
