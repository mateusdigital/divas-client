// -----------------------------------------------------------------------------
import React from 'react';
import { forwardRef } from 'react';
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
const _Button = forwardRef((props, ref) => {
  //
  return (
    <button
      ref={ref}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
});

// -----------------------------------------------------------------------------
export default _Button;
