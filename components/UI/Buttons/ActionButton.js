// -----------------------------------------------------------------------------
import React from 'react';
import { forwardRef } from 'react';
// -----------------------------------------------------------------------------
import _Button from "./_Button";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
const ActionButton = forwardRef((props, ref) => {
  //
  const class_name = `${styles.actionButton} ${props.className}`;

  //
  return (
    <_Button ref={ref} {...props} className={class_name}>
      {props.children}
    </_Button>
  );
});

// -----------------------------------------------------------------------------
export default ActionButton;
