// -----------------------------------------------------------------------------
import { useEffect } from "react";
import router from "next/router";
// -----------------------------------------------------------------------------
import App from "@/models/App";


// -----------------------------------------------------------------------------
function HomePage()
{
  //
  useEffect(() => {
    const logged_user = App.GetCurrentLoggedUser();
    if(logged_user) {
      router.push("/login");
    } else {
      router.push("/profile");
    }
  }, []);


  return (<>
  </>);
}

// -----------------------------------------------------------------------------
export default HomePage;
