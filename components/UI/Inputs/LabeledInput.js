// -----------------------------------------------------------------------------
import Input from "./Input";
// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";

// -----------------------------------------------------------------------------
function LabeledInput({className, type, value, onChange, children})
{
  const class_name = className || styles.labeledInputContainer;
  //
  return (<>
    <div className={class_name}>
      <span>{children}</span>
      <Input type={type} value={value} onChange={onChange}></Input>
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default LabeledInput;