
import MoodboardCanvasController from "@/controllers/Moodboard/MoodboardCanvasController";



class MoodboardEditorController
{
  constructor()
  {
    this.canvasController = new MoodboardCanvasController();
    this.moodboardModel   = null;
  }


  // ---------------------------------------------------------------------------
  EditNew()
  {
    this.moodboardModel   = {}
  }

  EditExisting(moodboardModel)
  {
    this.moodboardModel   = moodboardModel;
  }


    //
  // Serialization
  //

  // ---------------------------------------------------------------------------
  Serialize()
  {
    return {
        info:   this.moodboardModel,
        data:   this.canvasController.PrepareSaveDataForUpload(),
        photo:  this.canvasController.PrepareSavePhotoForUpload(),
        fabric: this.canvasController.fabric_canvas.toJSON(),
    };
  }
}

export default MoodboardEditorController;