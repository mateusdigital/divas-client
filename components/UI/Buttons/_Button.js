// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function _Button({children, onClick, className, disabled})
{
  //
  return (
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// -----------------------------------------------------------------------------
export default _Button;
