// -----------------------------------------------------------------------------
import { useEffect } from "react";
// -----------------------------------------------------------------------------
import { PageUrls, usePageRouter } from "@/utils/PageUtils";
// -----------------------------------------------------------------------------
import LoginService from "@/services/LoginService";


// -----------------------------------------------------------------------------
function HomePage()
{
  const { NavigateTo } = usePageRouter();
  
  //
  useEffect(() => {
    const _GetCurrentLoggedUser = async ()=> {
      const result = await LoginService.GetCurrentLoggedUser();
      if(result.IsValid()) {
        NavigateTo(PageUrls.UserLogin);
      } else {
        NavigateTo(PageUrls.UserOwnProfile);
      }
    }
    
    _GetCurrentLoggedUser();
  }, []);
  
  //
  return (<>
  </>);
}

// -----------------------------------------------------------------------------
export default HomePage;
