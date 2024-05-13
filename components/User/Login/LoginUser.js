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
  const handle_username_change = async (e) => { setUsername(e.target.value); };
  const handle_password_change = async (e) => { setPassword(e.target.value); };

  const handle_submit = async () => {
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
        <input type="text" value={username} onChange={handle_username_change}></input>
      </div>
      <div>
        <span>Password</span>
        <input type="text" value={password} onChange={handle_password_change}></input>
      </div>

      <div>
        <button onClick={handle_submit}>Login</button>
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
export default LoginUser;