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
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";

// -----------------------------------------------------------------------------
function CreateUser()
{
  //
  const router = useRouter();

  //
  const [username, setUsername]         = useState("");
  const [email, setEmail]               = useState("");
  const [password, setPassword]         = useState("");
  const [fullname, setFullname]         = useState("");
  const [description, setDescription]   = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  //
  const handle_username_change      = async (e) => { setUsername(e.target.value); };
  const handle_email_change         = async (e) => { setEmail(e.target.value); };
  const handle_password_change      = async (e) => { setPassword(e.target.value); };
  const handle_fullname_change      = async (e) => { setFullname(e.target.value); };
  const handle_description_change   = async (e) => { setDescription(e.target.value); };
  const handle_profile_photo_change = async (e) => { setProfilePhoto(e.target.files[0]); };

  const handle_submit = async () => {
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

    router.push("/profile");
  };

  //
  return (
    <div>
      <div>
        <span>Username</span>
        <input type="text" value={username} onChange={handle_username_change}></input>
      </div>
      <div>
        <span>Email</span>
        <input type="text" value={email} onChange={handle_email_change}></input>
      </div>
      <div>
        <span>Password</span>
        <input type="text" value={password} onChange={handle_password_change}></input>
      </div>


      <div>
        <span>Full Name</span>
        <input type="text" value={fullname} onChange={handle_fullname_change}></input>
      </div>
      <div>
        <span>Description</span>
        <input type="text" value={description} onChange={handle_description_change}></input>
      </div>

      <div>
        <span>Photo</span>
        <input type="file" onChange={handle_profile_photo_change} />
      </div>


      <div>
        <button onClick={handle_submit}>Create User</button>
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default CreateUser;