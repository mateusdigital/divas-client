// -----------------------------------------------------------------------------
import _Button from "./_Button";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function ActionButton(props)
{
  //
  const class_name = `${styles.actionButton} ${props.className}`;

  //
  return (
    <_Button {...props} className={class_name}>
      {props.children}
    </_Button>
  );
};

// -----------------------------------------------------------------------------
export default ActionButton;
