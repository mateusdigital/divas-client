import Utils from "@/libs/mdjs/mdjs/Utils";

// -----------------------------------------------------------------------------
const Arr = require("@/libs/mdjs/mdjs/Array");


// -----------------------------------------------------------------------------
class MoodboardCanvasController
{
  // ---------------------------------------------------------------------------
  constructor()
  {
    this._items = [];
    this.fabric_canvas = null;
  }

  SetCanvas(fabric_canvas)
  {
    this.fabric_canvas = fabric_canvas;
  }

  // ---------------------------------------------------------------------------
  AddItem(fabric_image, item_model)
  {
    fabric_image.itemModel = item_model;

    this._items.push(fabric_image);
    this.fabric_canvas.add(fabric_image);
    this.fabric_canvas.setActiveObject(fabric_image);

    console.log(`Added item: ${fabric_image.itemModel}`);
  }

  // ---------------------------------------------------------------------------
  DeleteItem(item)
  {
    this.fabric_canvas.remove(item);
    Arr.RemoveIf(this._items, (curr)=> { return curr == item; });
  }

  // ---------------------------------------------------------------------------
  DuplicateItem(item)
  {
    item.clone((cloned) => {
      cloned.set({
        left: item.left + 10,
        top:  item.top  + 10,
      });


      this.AddItem(this.fabric_canvas, cloned, item.itemModel);
    });
  }

  //
  // Serialization
  //

  // ---------------------------------------------------------------------------
  PrepareSaveDataForUpload()
  {
    const objects = this.fabric_canvas.getObjects();
    const arr = [];
    for(var fabric_item of objects) {
      const data_item = {
        fabric: fabric_item,
        model : fabric_item.itemModel
      };

      arr.push(data_item);
    }

    return arr;
  }

  // ---------------------------------------------------------------------------
  PrepareSavePhotoForUpload()
  {
    const data_url = this.fabric_canvas.toDataURL({ format: "png" });
    const blob     = Utils.DataURLToBlob(data_url);

    return blob;
  }
}

// -----------------------------------------------------------------------------
export default MoodboardCanvasController;