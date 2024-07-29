// -----------------------------------------------------------------------------
import _Button from "./_Button";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function TextButton(props)
{
  const class_name = `${styles.textButton} ${props.className}`;

  //
  return (
    <_Button {...props} className={class_name}>
      {props.children}
    </_Button>
  );
};

// -----------------------------------------------------------------------------
export default TextButton;
