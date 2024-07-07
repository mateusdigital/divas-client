// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef} from "react";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import styles from "./EmptyGridPlaceholder.module.css"

// -----------------------------------------------------------------------------
function EmptyGridPlaceholder({children})
{
  //<span class="material-symbols-outlined">
  return (<>
    <div className={styles.contentContainer}>
      <MaterialIcon icon="extension" iconStyle={styles.icon}/>
      <span className={styles.text}>It's quite empty over here...</span>
      <div>
        {children}
      </div>
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default EmptyGridPlaceholder;