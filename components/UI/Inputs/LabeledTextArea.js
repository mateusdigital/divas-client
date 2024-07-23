// -----------------------------------------------------------------------------
import React from "react";
import { forwardRef } from 'react';
// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";

const LabeledTextArea = forwardRef(({className, type, value, onChange, children, ...props}, ref) => {
  const class_name = className || styles.labeledInputContainer;

  //
  return (<>
    <div className={class_name}>
      <span>{children}</span>
      <textarea
        ref={ref}
        className={styles.mainTextArea}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  </>);
});


// -----------------------------------------------------------------------------
export default LabeledTextArea;