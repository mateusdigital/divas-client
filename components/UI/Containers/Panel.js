// -----------------------------------------------------------------------------
import React from "react";
// -----------------------------------------------------------------------------
import styles from "./Containers.module.css";

// -----------------------------------------------------------------------------
function Panel({className, children})
{
  //
  const class_name = `${styles.panel} ${className}`.trim();

  //
  return (<>
    <div className={class_name}>
      {children}
    </div>
  </>);
};

// -----------------------------------------------------------------------------
export default Panel;