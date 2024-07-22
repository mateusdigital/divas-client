// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";

// -----------------------------------------------------------------------------
function LabeledTextArea({className, type, value, onChange, children})
{
  const class_name = className || styles.labeledInputContainer;
  //
  return (<>
    <div className={class_name}>
      <span>{children}</span>
      <textarea className={styles.mainTextArea} type={type} value={value} onChange={onChange}></textarea>
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default LabeledTextArea;