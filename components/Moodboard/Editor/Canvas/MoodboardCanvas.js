
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { fabric } from 'fabric';
// -----------------------------------------------------------------------------
import MoodboardItemModel from "@/models/Moodboard/MoodboardItem";
import MoodboardCanvasController from "@/controllers/Moodboard/MoodboardCanvasController";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvas.module.css";
import App from "@/models/App";

// -----------------------------------------------------------------------------
function MoodboardCanvas()
{
  const _controller = new MoodboardCanvasController

  //
  // React Hooks
  //
  // ---------------------------------------------------------------------------
  const _canvas_ref        = useRef(null);
  const _fabric_canvas_ref = useRef(null);

  // ---------------------------------------------------------------------------
  useEffect(() => {
    //
    const canvas = _canvas_ref.current;

    // Setup Fabric
    const fabric_canvas = new fabric.Canvas(canvas, {
      width:  canvas.parentElement.clientWidth,
      height: canvas.parentElement.clientHeight
    });

    _fabric_canvas_ref.current = fabric_canvas;

    // Event Listeners...
    fabric_canvas.on("drop", _HandleDrop);
    window.addEventListener("resize", _ResizeCanvas);

    return () => {
      window.removeEventListener("resize", _ResizeCanvas);
      fabric_canvas.off("drop", _HandleDrop);
    }
  }, []);

  //
  // Drag Events
  //

  // ---------------------------------------------------------------------------
  const _HandleDrop = (event) => {
    const e = event.e;
    e.preventDefault();

    const text  = e.dataTransfer.getData("text");
    const data  = JSON.parse(text);
    const model = MoodboardItemModel.CreateFromData(data);

    console.log(e);
    // _controller.AddItem(model);
    const cached_img = App.GetCachedImageForUrl(model.imageUrl);
    fabric.Image.fromURL(cached_img.src, (fabric_img)=>{
      const rect   = e.target.getBoundingClientRect();
      const mouse_x = e.clientX;
      const mouse_y = e.clientY;

      // Adjust for canvas scaling and offsets
      const canvas = _fabric_canvas_ref.current;
      const scaleX = canvas.width  / rect.width;
      const scaleY = canvas.height / rect.height;
      const adjusted_mouse_x = mouse_x * scaleX;
      const adjusted_mouse_y = mouse_y * scaleY;


      // Set image width and height
      fabric_img.set({
        width:  cached_img.width,
        height: cached_img.height,
      });

      fabric_img.set({
        left: adjusted_mouse_x - (fabric_img.width  * 0.5),
        top:  adjusted_mouse_y - (fabric_img.height * 0.5),
      });

      _fabric_canvas_ref.current.add(fabric_img);
    });
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
  // Component
  //

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.canvasContainer}>
      <canvas ref = {_canvas_ref}> </canvas>
    </div>
  );
};

// -----------------------------------------------------------------------------
export default MoodboardCanvas;