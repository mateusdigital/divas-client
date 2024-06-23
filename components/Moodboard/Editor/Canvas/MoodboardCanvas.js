
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
import { fabric } from 'fabric';
// -----------------------------------------------------------------------------
import App from "@/models/App";
import MoodboardItemModel from "@/models/Moodboard/MoodboardItem";
import { useMoodboardEditorContext } from "@/contexts/Moodboard/Editor/MoodboardEditorContext";
// -----------------------------------------------------------------------------
import MoodboardCanvasControls from "./Controls/CanvasControls";
import styles from "./MoodboardCanvas.module.css";
import EventType from "./Controls/EventType";
import NET from "@/app/NET";

// -----------------------------------------------------------------------------
function MoodboardCanvas()
{
  const _controller = useMoodboardEditorContext();

  //
  // React Hooks
  //

  // ---------------------------------------------------------------------------
  const _canvas_ref        = useRef(null);
  const _fabric_canvas_ref = useRef(null);

  const [ selection, setSelection ] = useState(null);

  // ---------------------------------------------------------------------------
  useEffect(() => {
    //
    const canvas = _canvas_ref.current;

    // Setup Fabric
    const fabric_canvas = new fabric.Canvas(canvas, {
      width:  canvas.parentElement.clientWidth,
      height: canvas.parentElement.clientHeight,
      preserveObjectStacking: true, // This prevents automatic bringing to front
    });

    _fabric_canvas_ref.current = fabric_canvas;
    // fabric_canvas.backgroundColor = "red";

    // Event Listeners...
    fabric_canvas.on("drop",              _HandleDrop);
    fabric_canvas.on("selection:created", _HandleOnSelection);
    fabric_canvas.on("selection:cleared", _HandleOnDeselection);

    window.addEventListener("resize", _ResizeCanvas);
    window.addEventListener("wheel", _HandleZoom);

    return () => {
      window.removeEventListener("resize", _ResizeCanvas);
      window.removeEventListener("wheel", _HandleZoom);

      fabric_canvas.off("drop",              _HandleDrop);
      fabric_canvas.off("selection:cleared", _HandleOnDeselection);
      fabric_canvas.off("selection:created", _HandleOnSelection);
    }
  }, []);

  //
  // Drag Events
  //

  // ---------------------------------------------------------------------------
  const _HandleDrop = (event) => {
    const e = event.e;
    e.preventDefault();

    // Get the model.
    const text       = e.dataTransfer.getData("text");
    const data       = JSON.parse(text);
    const item_model = MoodboardItemModel.CreateFromData(data);

    // Get the image.
    const img_url    = NET.Make_External_Image_Url(item_model.imageUrl);
    const cached_img = App.GetCachedImageForUrl(img_url);

    // Add image to fabric.
    fabric.Image.fromURL(cached_img.src, (fabric_img)=>{
      const rect    = e.target.getBoundingClientRect();
      const mouse_x = e.clientX;
      const mouse_y = e.clientY;

      // Adjust for canvas scaling and offsets.
      const fabric_canvas = _fabric_canvas_ref.current;

      const scale_x          = (fabric_canvas.width  / rect.width);
      const scale_y          = (fabric_canvas.height / rect.height);
      const adjusted_mouse_x = (mouse_x * scale_x);
      const adjusted_mouse_y = (mouse_y * scale_y);

      // Set image width and height.
      fabric_img.set({
        width:  cached_img.width,
        height: cached_img.height,
      });

      fabric_img.set({
        left: adjusted_mouse_x - (fabric_img.width  * 0.5),
        top:  adjusted_mouse_y - (fabric_img.height * 0.5),
      });

      // Set the pegs visibility
      fabric_img.setControlsVisibility({
        mt: true,  // middle top
        mb: true,  // middle bottom
        ml: true,  // middle left
        mr: true,  // middle right
        bl: true,  // bottom left
        br: true,  // bottom right
        tl: true,  // top left
        tr: true,  // top right
        mtr: true, // middle top rotation enabled
      });

      _controller.AddItem(fabric_canvas, fabric_img, item_model);
    });
  }


  //
  // Selection Events
  //

  // ---------------------------------------------------------------------------
  const _HandleOnSelection = (ob) => {
    setSelection(ob);
  }

  const _HandleOnDeselection = (ob) => {
    setSelection(null);
  }


  //
  // Resize Events
  //

  // ---------------------------------------------------------------------------
  const _ResizeCanvas = () => {
    const canvas        = _canvas_ref.current;
    const fabric_canvas = _fabric_canvas_ref.current;

    canvas.width  = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    fabric_canvas.setWidth (canvas.width);
    fabric_canvas.setHeight(canvas.height);
  }


  //
  // Moodboard Controls Events
  //

  // ---------------------------------------------------------------------------
  const _HandleMoodboardControlsClick = (eventType) => {
    if(!selection) {
      return;
    }

    const fabric_canvas = _fabric_canvas_ref.current;
    for(let item of selection.selected) {
      switch (eventType) {
        case EventType.Delete: {
          _controller.DeleteItem(fabric_canvas, item);
        } break;

        case EventType.Duplicate: {
          _controller.DuplicateItem(fabric_canvas, item);
        } break;

        case EventType.Flip_Horizontal: {
          item.set("flipX", !item.flipX);
        } break;

        case EventType.Flip_Vertical: {
          item.set("flipY", !item.flipY);
        } break;

        case EventType.Resize: {
        } break;

        case EventType.Send_To_Back: {
          fabric_canvas.sendToBack(item);
        } break;

        case EventType.Send_To_Front: {
          fabric_canvas.bringToFront(item);
        } break;

        default: {
          console.log(eventType);
          debugger;
        } break;
      }
    }

    fabric_canvas.requestRenderAll();
  }

  //
  // Zoom Functions
  //
  // ---------------------------------------------------------------------------
  const _HandleZoom = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      _ZoomIn();
    }
    else {
      _ZoomOut();
    }
  }

  // ---------------------------------------------------------------------------
  function _ZoomIn() {
    const fabric_canvas = _fabric_canvas_ref.current;
    fabric_canvas.setZoom(fabric_canvas.getZoom() * 1.1);
    fabric_canvas.renderAll();
  }

  function _ZoomOut() {
    const fabric_canvas = _fabric_canvas_ref.current;
    fabric_canvas.setZoom(fabric_canvas.getZoom() / 1.1);
    fabric_canvas.renderAll();
  }


  //
  // Component
  //

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.canvasContainer}>
      <div style={{ display: selection ? 'block' : 'none' }}>
        <MoodboardCanvasControls
          onClick={_HandleMoodboardControlsClick}>
        </MoodboardCanvasControls>
      </div>

      <canvas ref = {_canvas_ref}>
      </canvas>
    </div>
  );
};

// -----------------------------------------------------------------------------
export default MoodboardCanvas;