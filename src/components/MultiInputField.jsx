import React from "react";

const MultiInputField = ({
  type = "text",
  placeholder = "",
  name = "",
  onChange,
  value = "",
  className = "",
}) => {
  return (
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
    />
  );
};

export default MultiInputField;
