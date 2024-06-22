// -----------------------------------------------------------------------------
import { createContext, useContext, useState, useEffect } from "react";
//
import App from "@/models/App";
import ToastUtils from "@/utils/Toast";
import PageUrls from "@/utils/PageUrls";
import UsePageRouter from "@/utils/PageRouter";

// -----------------------------------------------------------------------------
const _UserContext = createContext(null);

// -----------------------------------------------------------------------------
export function UseLoggedUserContext()
{
  return useContext(_UserContext);
}

// -----------------------------------------------------------------------------
export function LoggedUserContextProvider({children})
{
  //
  function _loggedUserResult() {
    return loggedUserResult;
  }
  return (<>
    <_UserContext.Provider value={_loggedUserResult()}>
      {children}
    </_UserContext.Provider>
  </>)
}
