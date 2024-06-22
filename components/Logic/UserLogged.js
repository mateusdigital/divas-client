// -----------------------------------------------------------------------------
import { createContext, useContext,useState, useEffect } from "react";
// -----------------------------------------------------------------------------
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";


// -----------------------------------------------------------------------------
const LoggedUserContext = createContext(null);

export function useLoggedUser()
{
  return useContext(LoggedUserContext);
}

// -----------------------------------------------------------------------------
function UserLogged({requiresLoggedUser, redirectTo, children})
{
  const [loggedUserResult, setLoggedUserResult] = useState(null);
  const { NavigateTo } = UsePageRouter();

  //
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await App.GetCurrentLoggedUser();
      if(result.IsValid()) {
        setLoggedUserResult(result);
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
    <LoggedUserContext.Provider value={loggedUserResult}>
      {children}
    </LoggedUserContext.Provider>
  );
};

// -----------------------------------------------------------------------------
export default UserLogged;