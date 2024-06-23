
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function _Button({children, onClick, className})
{
  //
  return (<>
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  </>);
};

// -----------------------------------------------------------------------------
export default _Button;