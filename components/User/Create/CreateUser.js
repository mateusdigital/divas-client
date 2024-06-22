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
import { useState } from "react";
import { useRouter } from "next/router";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";
// -----------------------------------------------------------------------------
import DivasLogo from "@/components/UI/DivasLogo";
import ActionButton from "@/components/UI/Buttons/ActionButton";
import TextButton from "@/components/UI/Buttons/TextButton";
import Input from "@/components/UI/Inputs/Input";
// -----------------------------------------------------------------------------
import styles from "@/components/User/styles/LoginSignup.module.css";


// -----------------------------------------------------------------------------
function CreateUser()
{
  //
  const { NavigateTo } = UsePageRouter();

  //
  const [username, setUsername]               = useState("");
  const [email, setEmail]                     = useState("");
  const [password, setPassword]               = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullname, setFullname]               = useState("");
  const [description, setDescription]         = useState("");
  const [profilePhoto, setProfilePhoto]       = useState(null);

  //
  const _HandleUsernameChange        = async (e) => { setUsername(e.target.value); };
  const _HandleEmailChange           = async (e) => { setEmail(e.target.value); };
  const _HandlePasswordChange        = async (e) => { setPassword(e.target.value); };
  const _HandlePasswordConfirmChange = async (e) => { setPasswordConfirm(e.target.value); };
  const _HandleFullnameChange        = async (e) => { setFullname(e.target.value); };
  const _HandleDescriptionChange     = async (e) => { setDescription(e.target.value); };
  const _HandleProfilePhotoChange    = async (e) => { setProfilePhoto(e.target.files[0]); };

  const _HandleSignUp = async () => {
    const data = {
      username: username,
      email: email,
      password: password,
      fullname: fullname,
      description: description,
    };

    const result = await App.CreateUserWithData(data, profilePhoto);
    if(result.IsError()) {
      ToastUtils.Error(result.errorJson.message);
      return false;
    }

    const user = result.value;
    App.SetCurrentLoggedUser(user);

    NavigateTo(PageUrls.UserOwnProfile);
  };

  const _HandleAlreadyHaveUser = async () => {
    NavigateTo(PageUrls.UserLogin);
  }

  //
  return (<>
    <div className={styles.loginContainer} >
      {/*  */}
      <div>
          <DivasLogo></DivasLogo>
      </div>

      <div>
        {/*  */}
        <div className={styles.inputContainer}>
          <span>Username</span>
          <Input type="text" value={username} onChange={_HandleUsernameChange}></Input>
        </div>
        {/*  */}
        <div className={styles.inputContainer}>
          <span>Email</span>
          <Input type="text" value={email} onChange={_HandleEmailChange}></Input>
        </div>
      </div>

      <div>
        {/*  */}
        <div className={styles.inputContainer}>
          <span>Password</span>
          <Input type="text" value={password} onChange={_HandlePasswordChange}></Input>
        </div>
        <div className={styles.inputContainer}>
          <span>Confirm Password</span>
          <Input type="text" value={password} onChange={_HandlePasswordConfirmChange}></Input>
        </div>
      </div>


      <div>
        {/*  */}
        <div className={styles.inputContainer}>
          <span>Full Name</span>
          <Input type="text" value={fullname} onChange={_HandleFullnameChange}></Input>
        </div>
        {/*  */}
        <div className={styles.inputContainer}>
          <span>Description</span>
          <Input type="text" value={description} onChange={_HandleDescriptionChange}></Input>
        </div>
      </div>

      <div>
        <div>
          <span>Photo</span>
          <input type="file" onChange={_HandleProfilePhotoChange} />
        </div>
      </div>

      <div>
      </div>
      {/*  */}
      <div className={styles.buttonsContainer}>
        <ActionButton onClick={_HandleSignUp}>Sign Up</ActionButton>
        or
        <TextButton onClick={_HandleAlreadyHaveUser}>Already have user?</TextButton>
      </div>
    </div>
  </>)
}

// -----------------------------------------------------------------------------
export default CreateUser;