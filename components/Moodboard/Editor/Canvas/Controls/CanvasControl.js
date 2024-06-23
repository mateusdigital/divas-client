// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvasControls.module.css";
import ActionButton from "@/components/UI/Buttons/ActionButton";


// -----------------------------------------------------------------------------
function CanvasControl({icon, children, onClick})
{
  return (<>
    <button className={styles.canvasControl} onClick={onClick}>
      <MaterialIcon iconStyle={styles.canvasControlIcon} icon={icon}>
        <div className={styles.tooltipContainer}>
          {children}
        </div>
      </MaterialIcon>
    </button>
  </>)
}

// -----------------------------------------------------------------------------
export default CanvasControl;