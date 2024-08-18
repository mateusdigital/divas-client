
import MoodboardCanvasController from "@/controllers/Moodboard/MoodboardCanvasController";



class MoodboardEditorController
{
  constructor()
  {
    this.canvasController = new MoodboardCanvasController();
    this.moodboardModel   = null;
  }



  EditNew()
  {
    this.moodboardModel   = {}
  }

  EditExisting(moodboardModel)
  {
    this.moodboardModel   = moodboardModel;
  }
}

export default MoodboardEditorController;