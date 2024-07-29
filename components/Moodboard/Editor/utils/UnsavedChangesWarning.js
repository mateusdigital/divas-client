// -----------------------------------------------------------------------------
import {useEffect} from "react";


// -----------------------------------------------------------------------------
const useUnsavedChangesWarning = (isSaved) => {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!isSaved) {
        const message     = "You have unsaved changes. Are you sure you want to leave?";
        event.returnValue = message; // For most modern browsers
        return message;              // For some older browsers
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isSaved]);
};

// -----------------------------------------------------------------------------
export default useUnsavedChangesWarning;
