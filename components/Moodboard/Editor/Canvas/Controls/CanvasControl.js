// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./MoodboardCanvasControls.module.css";


// -----------------------------------------------------------------------------
function CanvasControl({icon, children, onClick})
{
  return (<>
    <button onClick={onClick}>
      <MaterialIcon icon={icon}>
        <div className={styles.tooltipContainer}>
          {children}
        </div>
      </MaterialIcon>
    </button>
  </>)
}

// -----------------------------------------------------------------------------
export default CanvasControl;