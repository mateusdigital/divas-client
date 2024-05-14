
// -----------------------------------------------------------------------------
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
// -----------------------------------------------------------------------------
import MaterialIcon from "@/components/MaterialIcon";
// -----------------------------------------------------------------------------
import style from "./CategoryButton.module.css";

// -----------------------------------------------------------------------------
function Component({icon, content, handler})
{
  return (
    <button>
      <div className={style.categoryContainer} onClick={handler}>
        <MaterialIcon
          icon={icon}
          className={style.categoryIcon}>
        </MaterialIcon>

        <span className={style.categoryTextContent}>
          {content}
        </span>
      </div>
    </button>
  )
}

// -----------------------------------------------------------------------------
export default Component;