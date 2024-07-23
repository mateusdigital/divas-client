// -----------------------------------------------------------------------------
import React from "react";
import { forwardRef } from 'react';
// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";

// -----------------------------------------------------------------------------
const Input = forwardRef((props, ref) => {
  return (<>
    <input ref={ref}
      className={styles.mainInput}
      {...props}
    />
  </>)
});


// -----------------------------------------------------------------------------
export default Input;