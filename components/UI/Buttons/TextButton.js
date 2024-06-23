// -----------------------------------------------------------------------------
import _Button from "./_Button";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function TextButton({children, onClick, className})
{
  const class_name = `${styles.textButton} ${className}`;

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
export default TextButton;