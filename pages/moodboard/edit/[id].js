// -----------------------------------------------------------------------------
import React from "react";
import { useRouter } from "next/router";
// -----------------------------------------------------------------------------
import UserLoggedContext from "@/contexts/User/UserLoggedContext.js";
import { PageUrls }  from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import MoodboardEditor from "@/components/Moodboard/Editor/MoodboardEditor";


// -----------------------------------------------------------------------------
function Component()
{
  const router = useRouter();
  const { id } = router.query;

  return (<>
    <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <MoodboardEditor moodboardId={id}/>
    </UserLoggedContext>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;
