// -----------------------------------------------------------------------------
import ToastUtils from "@/utils/Toast";
import UserGrid from "@/components/User/Grid/UserGrid";
import UserService from "@/services/UserService";

// -----------------------------------------------------------------------------
function FollowingGrid({userModel})
{
  if(!userModel) {
    return;
  }

  //
  const _FetchUsers = async (userModel, setUsersFunc) => {
    const result = await UserService.GetAllFollowingOfUser(userModel._id);
    if(!result.IsValid()) {
      ToastUtils.ResultError(result);
      return;
    }

    setUsersFunc(result.value);
  }


  //
  return (<>
    <UserGrid userModel={userModel} fetchUsersFunc={_FetchUsers}/>
  </>);
};

// -----------------------------------------------------------------------------
export default FollowingGrid;