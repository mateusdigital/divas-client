// -----------------------------------------------------------------------------
import { useState } from "react";
import { useRouter } from "next/router";
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";

// -----------------------------------------------------------------------------
function LoginUser()
{
  //
  const router = useRouter();

  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //
  const _HandleUsernameChange = async (e) => { setUsername(e.target.value); };
  const _HandlePasswordChange = async (e) => { setPassword(e.target.value); };

  const _HandleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };

    const result = await App.TryToLoginUserWithData(data);
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
        <input type="text" value={username} onChange={_HandleUsernameChange}></input>
      </div>
      <div>
        <span>Password</span>
        <input type="text" value={password} onChange={_HandlePasswordChange}></input>
      </div>

      <div>
        <button onClick={_HandleSubmit}>Login</button>
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default LoginUser;