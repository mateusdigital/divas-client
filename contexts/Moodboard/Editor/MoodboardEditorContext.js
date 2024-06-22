// -----------------------------------------------------------------------------
import MoodboardCanvasController from "@/controllers/Moodboard/MoodboardCanvasController";
import { createContext, useContext, useState } from "react";

// -----------------------------------------------------------------------------
const _EditorContext = createContext(null);


// -----------------------------------------------------------------------------
export function useMoodboardEditorContext()
{
  return useContext(_EditorContext);
}

// -----------------------------------------------------------------------------
export function MoodboardEditorContextProvider({children})
{
  const [controller, setController] = useState(
    new MoodboardCanvasController()
  );

  return (<>
    <_EditorContext.Provider value={controller}>
      {children}
    </_EditorContext.Provider>
  </>)
}
