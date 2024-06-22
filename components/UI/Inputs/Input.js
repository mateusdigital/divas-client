// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import styles from "./Inputs.module.css";

// -----------------------------------------------------------------------------
function Input({...props})
{
  //
  return (<>
    <input className={styles.mainInput} {...props}></input>
  </>);
};

// -----------------------------------------------------------------------------
export default Input;