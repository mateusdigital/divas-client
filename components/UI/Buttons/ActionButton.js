// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function ActionButton({children, onClick})
{
  //
  return (<>
    <button
      className={styles.actionButton}
      onClick={onClick}
    >
      {children}
    </button>
  </>);
};

// -----------------------------------------------------------------------------
export default ActionButton;