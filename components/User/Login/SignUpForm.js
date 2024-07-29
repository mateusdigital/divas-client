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
//  File      : CreateUser.js                                                 //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-06                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

// -----------------------------------------------------------------------------
import {useState} from "react";
// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
import {PageUrls, usePageRouter} from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import LabeledInput from "@/components/UI/Inputs/LabeledInput";
// -----------------------------------------------------------------------------
import styles from "./Forms.module.css";
import UserService from "@/services/UserService";


// -----------------------------------------------------------------------------
function SignUpForm()
{
  //
  const {NavigateTo} = usePageRouter();

  //
  const [username, setUsername]               = useState("");
  const [email, setEmail]                     = useState("");
  const [password, setPassword]               = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullname, setFullname]               = useState("");
  const [description, setDescription]         = useState("");
  const [profilePhoto, setProfilePhoto]       = useState(null);

  //
  const _HandleUsernameChange        = async (e) => {
    setUsername(e.target.value);
  };
  const _HandleEmailChange           = async (e) => {
    setEmail(e.target.value);
  };
  const _HandlePasswordChange        = async (e) => {
    setPassword(e.target.value);
  };
  const _HandlePasswordConfirmChange = async (e) => {
    setPasswordConfirm(e.target.value);
  };
  const _HandleFullnameChange        = async (e) => {
    setFullname(e.target.value);
  };
  const _HandleDescriptionChange     = async (e) => {
    setDescription(e.target.value);
  };
  const _HandleProfilePhotoChange    = async (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  //
  const _HandleSignUp = async () => {
    const data = {
      username, email, password, fullname, description,
    };

    const result = await UserService.CreateUserWithData(data, profilePhoto);
    if (result.IsError()) {
      ToastUtils.Error(result.errorJson.message);
      return false;
    }

    NavigateTo(PageUrls.UserOwnProfile);
  };

  const _HandleAlreadyHaveUser = async () => {
    NavigateTo(PageUrls.UserLogin);
  };


  //
  return (
    <>
      <div className={styles.loginContainer}>
        {/*  */}
        <div>
          <DivasLogo></DivasLogo>
        </div>

        <div>
          {/*  */}
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={username}
              onChange={_HandleUsernameChange}>
              Username
            </LabeledInput>
          </div>
          {/*  */}
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={email}
              onChange={_HandleEmailChange}>
              Email
            </LabeledInput>
          </div>
        </div>

        <div>
          {/*  */}
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={password}
              onChange={_HandlePasswordChange}>
              Password
            </LabeledInput>
          </div>
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={passwordConfirm}
              onChange={_HandlePasswordConfirmChange}>
              Confirm Password
            </LabeledInput>
          </div>
        </div>


        <div>
          {/*  */}
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={fullname}
              onChange={_HandleFullnameChange}>
              Full Name
            </LabeledInput>
          </div>
          {/*  */}
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={description}
              onChange={_HandleDescriptionChange}>
              Description
            </LabeledInput>
          </div>
        </div>

        <div>
          <div>
            <input type="file" onChange={_HandleProfilePhotoChange}/>
          </div>
        </div>

        {/*  */}
        <div className={styles.buttonsContainer}>
          <ActionButton className="flex-grow" onClick={_HandleSignUp}>
            Sign Up
          </ActionButton>
          or
          <TextButton className="flex-grow" onClick={_HandleAlreadyHaveUser}>
            Already have user?
          </TextButton>
        </div>
      </div>
    </>
  );
}

// -----------------------------------------------------------------------------
export default SignUpForm;
