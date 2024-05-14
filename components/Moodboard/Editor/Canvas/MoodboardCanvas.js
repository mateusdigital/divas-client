//----------------------------------------------------------------------------//
//                               *       +                                    //
//                         '                  |                               //
//                     ()    .-.,="``"=.    - o -                             //
//                           '=/_       \     |                               //
//                        *   |  '=._    |                                    //
//                             \     `=./`,        '                          //
//                          .   '=.__.=' `='      *                           //
//                 +                         +                                //
//                      O      *        '       .                             //
//                                                                            //
//  File      : MoodboardCanvas.js                                            //
//  Project   : divas-client                                                  //
//  Date      : 2024-05-02                                                    //
//  License   : See project's COPYING.TXT for full info.                      //
//  Author    : mateus.digital <hello@mateus.digital>                         //
//  Copyright : mateus.digital - 2024                                         //
//                                                                            //
//  Description :                                                             //
//                                                                            //
//----------------------------------------------------------------------------//

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;

    ctxRef.current = ctx;

    return () => {
      canvas.removeEventListener('mousedown', _OnMouseDown);
      canvas.removeEventListener('mousemove', _OnMouseMove);
      canvas.removeEventListener('mouseup', _OnMouseUp);
      canvas.removeEventListener('mouseout', _OnMouseUp);
    };
  }, []);

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

  return (
    <div className={styles.canvasContainer}>
      <canvas
        ref={canvasRef}
        onMouseDown={_OnMouseDown}
        onMouseMove={_OnMouseMove}
        onMouseUp={_OnMouseUp}
        onMouseOut={_OnMouseUp}>
      </canvas>
    </div>
  );
};

// -----------------------------------------------------------------------------
export default MoodboardCanvas;