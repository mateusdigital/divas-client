
// -----------------------------------------------------------------------------
import UserLogged from "@/components/Logic/UserLogged";
import PageUrls from "@/utils/PageUrls";
// -----------------------------------------------------------------------------
import MoodboardEditor from "@/components/Moodboard/Editor/MoodboardEditor";


// -----------------------------------------------------------------------------
function Component()
{
  return (<>
    <UserLogged requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <MoodboardEditor></MoodboardEditor>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;
