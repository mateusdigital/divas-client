
// -----------------------------------------------------------------------------
import React from "react";
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
import UserService from "@/services/UserService";
import { useLoggedUserContext } from "@/contexts/User/UserLoggedContext";
// -----------------------------------------------------------------------------
import styles from "./Forms.module.css";


// -----------------------------------------------------------------------------
function EditUserForm()
{
  const userModel = useLoggedUserContext();
  if(!userModel) {
    return;
  }

  //
  const {NavigateTo} = usePageRouter();

  //
  const [username, setUsername]               = useState(userModel.username);
  const [email, setEmail]                     = useState(userModel.email);
  const [newPassword, setNewPassword]         = useState("");
  const [oldPassword, setOldPassword]         = useState(userModel.password);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [fullname, setFullname]               = useState(userModel.fullname);
  const [description, setDescription]         = useState(userModel.description);
  const [profilePhoto, setProfilePhoto]       = useState(null);

  const [isDirty, setIsDirty] = useState(null);


  const _UpdateDirty = (cond) => {
    const new_dirty = isDirty || cond;
    setIsDirty(new_dirty);
  }

  //
  const _HandleUsernameChange = async (e) => {
    _UpdateDirty(userModel.username != e.target.value);
    setUsername(e.target.value);
  };
  const _HandleEmailChange = async (e) => {
    _UpdateDirty(email == e.target.value);
    setEmail(e.target.value);
  };

  const _HandleNewPasswordChange = async (e) => {
    setNewPassword(e.target.value);
    _UpdateDirty(e.target.value.length != 0);
  };

  const _HandleOldPasswordChange = async (e) => {
    _UpdateDirty(oldPassword == e.target.value);
    setOldPassword(e.target.value);
  };

  const _HandlePasswordConfirmChange = async (e) => {
    setPasswordConfirm(e.target.value);
  };
  const _HandleFullnameChange        = async (e) => {
    _UpdateDirty(fullname == e.target.value);
    setFullname(e.target.value);
  };
  const _HandleDescriptionChange     = async (e) => {
    _UpdateDirty(description == e.target.value);
    setDescription(e.target.value);
  };
  const _HandleProfilePhotoChange    = async (e) => {
    _UpdateDirty(true);
    setProfilePhoto(e.target.files[0]);
  };

  //
  const _HandleConfirm = async () => {
    const data = {
      userId: userModel._id,
      username,
      email,
      oldPassword,
      newPassword,
      passwordConfirm,
      fullname,
      description,
    };

    const result = await UserService.UpdateUserWithData(data, profilePhoto);
    if (result.IsError()) {
      ToastUtils.ResultError(result);
      return false;
    }
    else {
      ToastUtils.Success("Profile saved...");
    }

    NavigateTo("/profile");
  };

  const _HandleCancel = async () => {
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
              disabled
              type="password"
              value={oldPassword}
              onChange={_HandleOldPasswordChange} >
              Old Password
            </LabeledInput>
          </div>
          <div className={styles.inputContainer}>
            <LabeledInput
              type="text"
              value={newPassword}
              onChange={_HandleNewPasswordChange}>
              New Password
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
          <ActionButton
            disabled={!isDirty}
            className="flex-grow" onClick={_HandleConfirm}>
            Confirm
          </ActionButton>
          or
          <TextButton className="flex-grow" onClick={_HandleCancel}>
            Discard Changes
          </TextButton>

          <TextButton className="flex-grow" onClick={_HandleCancel}>
            Delete Account
          </TextButton>
        </div>
      </div>
    </>
  );
}


// -----------------------------------------------------------------------------
export default EditUserForm;