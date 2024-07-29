import Link from "next/link";


function _Link({href, onClick, children, ...rest})
{
  // Click handler function
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault(); // Prevent default link behavior if onClick is provided
      onClick(e); // Call the onClick handler
    }
  };

  return (
    <div onClick={handleClick} style={{cursor: "pointer"}}>
      {href ? (
        <Link href={href} {...rest}>
          {children}
        </Link>
      ) : (
         children
       )}
    </div>
  );
}

export default _Link;
