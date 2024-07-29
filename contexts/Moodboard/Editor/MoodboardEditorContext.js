// -----------------------------------------------------------------------------
import {createContext, useContext, useState} from "react";
// -----------------------------------------------------------------------------
import MoodboardCanvasController from "@/controllers/Moodboard/MoodboardCanvasController";

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

  return (
    <_EditorContext.Provider value={controller}>
      {children}
    </_EditorContext.Provider>
  );
}
