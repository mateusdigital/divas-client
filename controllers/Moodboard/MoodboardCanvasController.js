const Arr = require("@/libs/mdjs/mdjs/Array");

class MoodboardCanvasController
{
  // ---------------------------------------------------------------------------
  constructor()
  {
    this._items = [];
  }


  // ---------------------------------------------------------------------------
  AddItem(fabric_canvas, fabric_image, item_model)
  {
    fabric_image.itemModel = item_model;

    this._items.push(fabric_image);
    fabric_canvas.add(fabric_image);
    fabric_canvas.setActiveObject(fabric_image);

    console.log(`Added item: ${fabric_image.itemModel}`);
  }

  // ---------------------------------------------------------------------------
  DeleteItem(fabric_canvas, item)
  {
    fabric_canvas.remove(item);
    Arr.RemoveIf(this._items, (curr)=> { return curr == item; });
  }

  // ---------------------------------------------------------------------------
  DuplicateItem(fabric_canvas, item)
  {
    item.clone((cloned) => {
      cloned.set({
        left: item.left + 10,
        top:  item.top  + 10,
      });


      this.AddItem(fabric_canvas, cloned, item.itemModel);
    });
  }
}

// -----------------------------------------------------------------------------
export default MoodboardCanvasController;