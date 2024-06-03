// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import CanvasControl from "./CanvasControl";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvasControls.module.css"
import EventType from "./EventType";

// -----------------------------------------------------------------------------
function MoodboardCanvasControls({onClick})
{
  //
  return (<>
    <div className={styles.controlsContainer}>
      <CanvasControl onClick={()=>{onClick(EventType.Delete)}}          icon="delete">Delete</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Flip_Horizontal)}} icon="flip">Flip Horizontal</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Flip_Vertical)}}   icon="flip">Flip Vertical</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Send_To_Front)}}   icon="flip_to_front">Send to Front</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Send_To_Back)}}    icon="flip_to_back">Send to Back</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Resize)}}          icon="resize">Scale</CanvasControl>
      <CanvasControl onClick={()=>{onClick(EventType.Duplicate)}}       icon="shadow_add">Duplicate</CanvasControl>
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default MoodboardCanvasControls;