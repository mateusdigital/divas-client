// -----------------------------------------------------------------------------
import React from "react";
import Link from "next/link";

// -----------------------------------------------------------------------------
function _Link({href, onClick, children, ...rest})
{
  // Click handler function
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default link behavior if onClick is provided
      onClick(href, e);   // Call the onClick handler
    }
  };

  if(!onClick) {
    return (<>
      <div style={{cursor: "pointer"}}>
        <Link href={href} {...rest}>
          {children}
        </Link>
      </div>
    </>);
  }

  return (<>
    <div onClick={handleClick} style={{cursor: "pointer"}}>
      {children}
    </div>
  </>);
}

// -----------------------------------------------------------------------------
export default _Link;
