
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import UserLoggedContext from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import Panel              from "@/components/UI/Containers/Panel";
import ForgotPasswordForm from "@/components/User/Login/ForgotPasswordForm";
// -----------------------------------------------------------------------------
import styles from "../styles/LoginPage.module.css";


// -----------------------------------------------------------------------------
function ForgotPasswordPage()
{
  return (<>
    <UserLoggedContext requiresLoggedUser={false} redirectTo={PageUrls.UserOwnProfile}>

      <div className={styles.mainContainer}>
        <Panel className="margin-top-2">
          <ForgotPasswordForm/>
        </Panel>
      </div>
    </UserLoggedContext>
  </>);
}

// -----------------------------------------------------------------------------
export default ForgotPasswordPage;
