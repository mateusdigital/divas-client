// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function TextButton({children, onClick})
{
  //
  return (<>
    <button
      className={styles.textButton}
      onClick={onClick}
    >
      {children}
    </button>
  </>);
};

// -----------------------------------------------------------------------------
export default TextButton;