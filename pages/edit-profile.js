// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import { PageUrls } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import Panel      from "@/components/UI/Containers/Panel";
// -----------------------------------------------------------------------------
import UserLoggedContext from "@/contexts/User/UserLoggedContext.js";
// -----------------------------------------------------------------------------
import styles from "./styles/LoginPage.module.css";
import EditUserForm from "@/components/User/Forms/EditUserForm";


// -----------------------------------------------------------------------------
function EditProfilePage()
{
  return (<>
    <UserLoggedContext requiresLoggedUser={true} redirectTo={PageUrls.UserLogin}>
      <div className={styles.mainContainer}>
        <Panel className="margin-top-2 margin-bottom-2">
          <EditUserForm/>
        </Panel>
      </div>
    </UserLoggedContext>
  </>);
}

// -----------------------------------------------------------------------------
export default EditProfilePage;
