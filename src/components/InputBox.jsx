import React from "react";
import { TEXT } from "../utility/Constant";

const InputBox = ({
  type = "text",
  label = "",
  placeholder = "",
  name = "",
  onChange,
  value = "",
  className = "",
  required = false,
  isInvalid = false,
  errorText = "",
  variant = TEXT.SINGLE_VARIANT,
  children,
}) => {
  const singleVariant = (
    <input
      type={type}
      name={name}
      className={
        `mt-2 block px-3 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[theme('colors.gray')] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[theme('colors.blue')] pt-1 ` +
        className
      }
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
  const multiVariant = (
    <span className="flex gap-6 max-[576px]:block">
      <input
        type={type}
        name={name}
        className={
          `mt-2 block px-3 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-[theme('colors.gray')] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[theme('colors.blue')] pt-1 ` +
          className
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {children}
    </span>
  );
  return (
    <label>
      <span className="text-gray-800 font-medium">{label}</span>
      {required && (
        <span className="text-lg text-[theme('colors.red')]">*</span>
      )}
      {variant === TEXT.SINGLE_VARIANT ? singleVariant : multiVariant}
      {isInvalid && (
        <span className="text-sm text-[theme('colors.red')]">{errorText}</span>
      )}
    </label>
  );
};

export default InputBox;
