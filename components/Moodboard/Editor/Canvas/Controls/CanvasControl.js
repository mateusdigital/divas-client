// -----------------------------------------------------------------------------
import React, { useState } from "react";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvasControls.module.css";


// -----------------------------------------------------------------------------
function CanvasControl({icon, children, onClick})
{
  // 
  const [isHover, setHover] = useState(false);
  
  //  
  const _HandleHover = (value) => { setHover(value); }

  //
  return (<>
    <button
      className={styles.canvasControl}
      onClick={onClick}
      onMouseEnter={()=>{ _HandleHover(true); }}
      onMouseLeave={()=>{ _HandleHover(false); }}
    >
      <MaterialIcon iconStyle={styles.canvasControlIcon} icon={icon}/>
        <div className={isHover
            ? styles.tooltipContainer
            : `${styles.tooltipContainer} hidden`
          }>
          {children}
        </div>
    </button>
  </>)
}

// -----------------------------------------------------------------------------
export default CanvasControl;