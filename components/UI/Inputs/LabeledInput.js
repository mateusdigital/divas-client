// -----------------------------------------------------------------------------
import React from "react";
import { forwardRef } from "react";
// -----------------------------------------------------------------------------
import Input from "./Input";
// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";


const LabeledInput = forwardRef(({ children, className, ...props }, ref) => {
  const class_name = className || styles.labeledInputContainer;

  return (
    <div className={class_name}>
      <span className={styles.inputLabel}>{children}</span>
      <Input ref={ref} {...props} />
    </div>
  );
});

// -----------------------------------------------------------------------------
export default LabeledInput;