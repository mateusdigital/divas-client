
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvas.module.css";

// -----------------------------------------------------------------------------
function MoodboardCanvas()
{
  const canvasRef = useRef(null);
  const ctxRef    = useRef(null);
  const isDrawing = useRef(false);

  //
  // React Hooks
  //

  // ---------------------------------------------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const parent = canvas.parentElement;
    canvas.width  = parent.clientWidth;
    canvas.height = parent.clientHeight;

    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    ctxRef.current = ctx;

    window.addEventListener("resize", _ResizeCanvas);

    return () => {
      canvas.removeEventListener("mousedown", _OnMouseDown);
      canvas.removeEventListener("mousemove", _OnMouseMove);
      canvas.removeEventListener("mouseup",   _OnMouseUp);
      canvas.removeEventListener("mouseout",  _OnMouseUp);
      window.removeEventListener("resize",    _ResizeCanvas);
    }
  }, []);

  //
  // Mouse Events
  //

  // ---------------------------------------------------------------------------
  const _OnMouseDown = (event) => {
    const x = event.clientX;
    const y = event.clientY;

    isDrawing.current = true;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
  };

  const _OnMouseMove = (event) => {
    if (!isDrawing.current) return;

    const x = event.clientX;
    const y = event.clientY;

    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const _OnMouseUp = () => {
    isDrawing.current = false;
  };

  //
  // Drag Events
  //

  // ---------------------------------------------------------------------------
  const _HandleDragOver = (event) => {
    event.preventDefault();
  }

  const _HandleDragDrop = (event) => {
    event.preventDefault();

    const data      = event.dataTransfer.getData("text");
    const itemModel = JSON.parse(data);

    console.log(itemModel);
  }


  //
  // Resize Events
  //

  // ---------------------------------------------------------------------------
  const _ResizeCanvas = () => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    canvas.width  = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }


  //
  // Component
  //

  // ---------------------------------------------------------------------------
  return (
    <div className={styles.canvasContainer}>
      <canvas
        ref={canvasRef}
        onMouseDown={_OnMouseDown}
        onMouseMove={_OnMouseMove}
        onMouseUp={_OnMouseUp}
        onMouseOut={_OnMouseUp}
        onDrop={_HandleDragDrop}
        onDragOver={_HandleDragOver}
      >
      </canvas>
    </div>
  );
};

// -----------------------------------------------------------------------------
export default MoodboardCanvas;