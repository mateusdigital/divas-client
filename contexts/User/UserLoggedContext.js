// -----------------------------------------------------------------------------
import { createContext, useContext,useState, useEffect } from "react";
// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
import { PageUrls, usePageRouter }  from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import LoginService from "@/services/LoginService";

// -----------------------------------------------------------------------------
const LoggedUserContext = createContext(null);

// -----------------------------------------------------------------------------
let _LoggedUser = null;


//
// Public
//

// -----------------------------------------------------------------------------
export function useLoggedUserContext()
{
  return useContext(LoggedUserContext);
}

// -----------------------------------------------------------------------------
export function getLoggedUser()
{
  return _LoggedUser;
}


// -----------------------------------------------------------------------------
function UserLoggedContext({requiresLoggedUser, redirectTo, children})
{
  const [loggedUser, setLoggedUser] = useState(null);
  const { NavigateTo } = usePageRouter();

  //
  useEffect(()=>{
    const _GetLoggedUser = async ()=>{
      const result = await LoginService.GetCurrentLoggedUser();
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
export default UserLoggedContext;