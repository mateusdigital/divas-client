"use client";

// -----------------------------------------------------------------------------
import React from "react";
import { useEffect, useState } from "react";
// -----------------------------------------------------------------------------
import { useRouter, } from "next/router";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import MainLayout  from "@/components/Layout/MainLayout";
import UserProfile from "@/components/User/UserProfile";
// -----------------------------------------------------------------------------
import UserLoggedContext, { useLoggedUserContext } from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import UserService from "@/services/UserService";
import ToastUtils from "@/utils/Toast";


// -----------------------------------------------------------------------------
function _Content()
{
  //
  const router = useRouter();
  const { username } = router.query;

  //
  const [userModel, setUserModel] = useState(null);

  useEffect(()=>{
    const _GetUser = async ()=>{
      const result = await UserService.GetUserWithUsername(username);
      if(!result.IsValid()) {
        ToastUtils.ResultError(result);
        return;
      }

      const user_model = result.value;
      setUserModel(user_model);
    }

    if(username) {
      _GetUser();
    }
  }, [username]);

  // Not ready...
  if (!userModel) {
    return <div>Loading...</div>;
  }

  return (<>
    <MainLayout pageName={PageUrls.UserOtherProfile}>
      <UserProfile userModel={userModel}/>
    </MainLayout>
  </>);
}

// -----------------------------------------------------------------------------
function ProfilePageForOtherUser()
{
  return (
    <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <_Content/>
    </UserLoggedContext>
  );
}

// -----------------------------------------------------------------------------
export default ProfilePageForOtherUser;
