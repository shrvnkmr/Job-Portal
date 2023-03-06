import React from "react";
import { TEXT } from "../utility/Constant";

const Button = ({
  type = "button",
  className = "",
  variant = TEXT.SOLID,
  label,
  onClick,
  disabled,
}) => {
  const solidBtn =
    "bg-[theme('colors.blue')] text-[theme('colors.white')] focus:shadow-outlinehover:bg-blue-600";
  const outlineBtn =
    "bg-[theme('colors.white')] text-[theme('colors.blue')] focus:shadow-outlinehover:bg-blue-600 ring-1 ring-inset ring-[theme('colors.blue')]";

  return (
    <button
      type={type}
      className={
        `inline-flex items-center cursor-pointer h-10 px-4 py-2 rounded-md ${
          variant === TEXT.SOLID ? solidBtn : outlineBtn
        } ${
          disabled &&
          "bg-[theme('colors.gray')] text-[theme('colors.dark-gray')]"
        } ` + className
      }
      onClick={(e) => onClick(e)}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
