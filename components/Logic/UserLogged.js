// -----------------------------------------------------------------------------
import { createContext, useContext,useState, useEffect } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";


// -----------------------------------------------------------------------------
const LoggedUserContext = createContext(null);

let _LoggedUser = null;

export function useLoggedUserContext()
{
  return useContext(LoggedUserContext);
}

export function getLoggedUser()
{
  return _LoggedUser;
}


// -----------------------------------------------------------------------------
function UserLogged({requiresLoggedUser, redirectTo, children})
{
  const [loggedUser, setLoggedUser] = useState(null);
  const { NavigateTo } = UsePageRouter();

  //
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await App.GetCurrentLoggedUser();
      if(result.IsValid()) {
        setLoggedUser(result.value);
        _LoggedUser = result.value;

        if(!requiresLoggedUser) {
          NavigateTo(redirectTo);
        }
      }
      else {
        if(requiresLoggedUser) {
          ToastUtils.ResultError(result);
          NavigateTo(PageUrls.UserLogin);
        }
      }
    }

    _GetLoggedUser();
  }, []);



  //
  return (
    <LoggedUserContext.Provider value={loggedUser}>
      {children}
    </LoggedUserContext.Provider>
  );
};

// -----------------------------------------------------------------------------
export default UserLogged;