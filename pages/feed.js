// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
import Feed from "@/components/Feed/Feed"
import UserLoggedContext, { useLoggedUserContext } from "@/contexts/User/UserLoggedContext.js";
import MainLayout from '@/components/Layout/MainLayout';


// -----------------------------------------------------------------------------
function _Content()
{
  const loggedUser = useLoggedUserContext();
  if(!loggedUser) {
    return <div>No feed for not logged user...</div>;
  }

  return (<>
    <MainLayout pageName={PageUrls.FeedUser}>
      <Feed userModel={loggedUser}></Feed>
    </MainLayout>
  </>);
}

// -----------------------------------------------------------------------------
function FeedPage()
{
  return (
    <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <_Content/>
    </UserLoggedContext>
  );
}

export default FeedPage;