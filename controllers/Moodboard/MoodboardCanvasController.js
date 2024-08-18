import NET from "@/app/NET.js";
import Utils from "@/libs/mdjs/mdjs/Utils";
import App from "@/models/App.js";
import MoodboardItemModel from "@/models/Moodboard/MoodboardItem.js";

// -----------------------------------------------------------------------------
const Arr = require("@/libs/mdjs/mdjs/Array");

let value = 0;

// -----------------------------------------------------------------------------
class MoodboardCanvasController
{
  // ---------------------------------------------------------------------------
  constructor()
  {

    this.value = ++value;

    this._items = [];

    this._isSaved      = false;
    this.fabric_canvas = null;

    this.xxx_OnCanvasHasChanged = null;
  }


  // ---------------------------------------------------------------------------
  IsEmpty()
  {
    return this._items.length == 0;
  }


  // ---------------------------------------------------------------------------
  IsSaved()
  {
    return this._isSaved;
  }

  // ---------------------------------------------------------------------------
  SetSaved(saved = true)
  {
    if(this._isSaved != saved) {
      this._isSaved = saved;
      if (this.xxx_OnCanvasHasChanged) {
        this.xxx_OnCanvasHasChanged();
      }
    }
  }


  // ---------------------------------------------------------------------------
  SetCanvas(fabric_canvas)
  {
    this.fabric_canvas = fabric_canvas;
    if (this.xxx_OnCanvasHasChanged) {
      this.xxx_OnCanvasHasChanged();
    }
  }

  // ---------------------------------------------------------------------------
  AddItem(fabric_image, item_model)
  {
    fabric_image.itemModel = item_model;

    this._items.push(fabric_image);
    this.fabric_canvas.add(fabric_image);
    this.fabric_canvas.setActiveObject(fabric_image);

    if (this.xxx_OnCanvasHasChanged) {
      this.xxx_OnCanvasHasChanged();
    }


    this.fabric_canvas.renderAll();
  }

  // ---------------------------------------------------------------------------
  DeleteItem(item)
  {
    this.fabric_canvas.remove(item);
    Arr.RemoveIf(this._items, (curr) => {
      return curr == item;
    });

    if (this.xxx_OnCanvasHasChanged) {
      this.xxx_OnCanvasHasChanged();
    }

    this.fabric_canvas.renderAll();
  }

  // ---------------------------------------------------------------------------
  DuplicateItem(item)
  {
    item.clone((cloned) => {
      cloned.set({
        left: item.left + 10,
        top:  item.top + 10,
      });


      this.AddItem(cloned, item.itemModel);
    });
  }


  //
  // Serialization
  //

  // ---------------------------------------------------------------------------
  Serialize()
  {
    return {
        info:   this._PrepareSaveInfoForUpload(),
        data:   this._PrepareSaveDataForUpload(),
        photo:  this._PrepareSavePhotoForUpload(),
        fabric: this.fabric_canvas.toJSON(),
    };
  }

  // ---------------------------------------------------------------------------
  _PrepareSaveInfoForUpload()
  {
    return {
      _id: this._id,
      title: this.title,
      description: this.description
    };
  }

  // ---------------------------------------------------------------------------
  _PrepareSaveDataForUpload()
  {
    const arr = [];

    const objects = this.fabric_canvas.getObjects();
    for (let fabric_item of objects) {
      arr.push(fabric_item.itemModel);
    }

    return arr;
  }

  // ---------------------------------------------------------------------------
  _PrepareSavePhotoForUpload()
  {
    const data_url = this.fabric_canvas.toDataURL({format: "png"});
    const blob     = Utils.DataURLToBlob(data_url);

    return blob;
  }


  XXX_AddExternalImage(itemModel, event)
  {
    const e = event;

    // Get the image.
    //  @XXX: the itemmodel is not saving the path as the other external things...
    // so here we need to prepend it...
    const XXX_image_url = ("data/items/" + itemModel.imageUrl);
    const img_url    = NET.Make_External_Image_Url(XXX_image_url);
    const cached_img = App.GetCachedImageForUrl(img_url);

    // Add image to fabric.
    // fabric.Image.fromURL(cached_img.src, (fabric_img)=>{
    const fabric_img = new fabric.Image(cached_img);
    {
      // Adjust for canvas scaling and offsets.
      const fabric_canvas = this.fabric_canvas;
      const parent_element = this.fabric_canvas.contextContainer.canvas;

      const rect    = parent_element.getBoundingClientRect();
      const mouse_x = e.mouseX == -1 ? fabric_canvas.width * 0.5 : e.clientX;
      const mouse_y = e.mouseY == -1 ? fabric_canvas.height * 0.5 : e.clientY;

      const scale_x          = fabric_canvas.width / rect.width;
      const scale_y          = fabric_canvas.height / rect.height;
      const adjusted_mouse_x = mouse_x * scale_x;
      const adjusted_mouse_y = mouse_y * scale_y;


      // Set image width and height.
      fabric_img.set({
        width:  cached_img.width,
        height: cached_img.height,
      });

      fabric_img.set({
        left: adjusted_mouse_x - (
          fabric_img.width * 0.5
        ),
        top:  adjusted_mouse_y - (
          fabric_img.height * 0.5
        ),
      });

      // Set the pegs visibility
      fabric_img.setControlsVisibility({
        mt:  true,  // middle top
        mb:  true,  // middle bottom
        ml:  true,  // middle left
        mr:  true,  // middle right
        bl:  true,  // bottom left
        br:  true,  // bottom right
        tl:  true,  // top left
        tr:  true,  // top right
        mtr: true,  // middle top rotation enabled
      });

      this.AddItem(fabric_img, itemModel);
    }
  };

}

// -----------------------------------------------------------------------------
export default MoodboardCanvasController;
