// -----------------------------------------------------------------------------
import React from "react";
import Link from "next/link";
// -----------------------------------------------------------------------------
import styles from "./Link.module.css";

// -----------------------------------------------------------------------------
function _Link({href, onClick, children, ...rest})
{
  // ---------------------------------------------------------------------------
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default link behavior if onClick is provided
      onClick(href, e);   // Call the onClick handler
    }
  };

  const class_name = `${styles.link} ` + ((rest?.className) ? rest.className : "");

  // ---------------------------------------------------------------------------
  if(!onClick) {
    return (<>
      <div style={{cursor: "pointer"}}>
        <Link href={href} {...rest} className={class_name}>
          {children}
        </Link>
      </div>
    </>);
  }

  return (<>
    <div
      onClick={handleClick}
      style={{cursor: "pointer"}}
    >
      {children}
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default _Link;
