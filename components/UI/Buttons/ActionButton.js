// -----------------------------------------------------------------------------
import _Button from "./_Button";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function ActionButton({children, onClick, className})
{
  const class_name = `${styles.actionButton} ${className}`;

  //
  return (<>
    <_Button
      className={class_name}
      onClick={onClick}
    >
      {children}
    </_Button>
  </>);
};

// -----------------------------------------------------------------------------
export default ActionButton;