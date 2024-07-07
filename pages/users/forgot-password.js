
// -----------------------------------------------------------------------------
import UserLogged from "@/components/Logic/UserLogged";
import PageUrls from "@/utils/PageUrls";
// -----------------------------------------------------------------------------
import Panel from "@/components/UI/Containers/Panel";
import ForgotPasswordForm from "@/components/User/Login/ForgotPasswordForm";
// -----------------------------------------------------------------------------
import styles from "../styles/LoginPage.module.css";

// -----------------------------------------------------------------------------
function Component()
{
  return (<>
    <UserLogged requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>

      <div className={styles.mainContainer}>
        <Panel className="margin-top-2">
          <ForgotPasswordForm/>
        </Panel>
      </div>
    </UserLogged>
  </>);
}

// -----------------------------------------------------------------------------
export default Component;
