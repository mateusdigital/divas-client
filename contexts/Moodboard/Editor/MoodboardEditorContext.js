// -----------------------------------------------------------------------------
import React from "react";
import {createContext, useContext, useState} from "react";
// -----------------------------------------------------------------------------
import MoodboardEditorController from "@/controllers/Moodboard/MoodboardEditorController.js"
// -----------------------------------------------------------------------------
const _EditorContext = createContext(null);


// -----------------------------------------------------------------------------
export function useMoodboardEditorController()
{
  return useContext(_EditorContext);
}

// -----------------------------------------------------------------------------
export function MoodboardEditorContextProvider({children})
{
  const [controller, setController] = useState(
    new MoodboardEditorController()
  );

  return (
    <_EditorContext.Provider value={controller}>
      {children}
    </_EditorContext.Provider>
  );
}
