// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
import TextButton from "./TextButton";
// -----------------------------------------------------------------------------
import styles from "./Buttons.module.css";

// -----------------------------------------------------------------------------
function BackButton({onClick, children})
{
  return (<>
    <TextButton className={styles.backButton} onClick={onClick}>
      <MaterialIcon icon="arrow_back_ios_new"></MaterialIcon>
      <span>{children}</span>
    </TextButton>
  </>);
}

// -----------------------------------------------------------------------------
export default BackButton;