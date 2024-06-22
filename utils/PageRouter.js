// -----------------------------------------------------------------------------
import { useRouter } from "next/router";

// -----------------------------------------------------------------------------
function usePageRouter()
{
  const router = useRouter();
  const NavigateTo = (url) => {
    router.push(url);
  };

  return { NavigateTo }
}

// -----------------------------------------------------------------------------
export default usePageRouter;