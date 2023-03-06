import React from "react";

const RadioInput = ({
  label = "",
  id = "",
  name = "",
  value = "",
  checked = false,
  onChange,
}) => {
  return (
    <span className="flex">
      <input
        id={id}
        name={name}
        type="radio"
        className="h-4 w-4 mx-[2px] mt-2 border-gray-300 text-indigo-600 focus:ring-[theme('colors.blue')]"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="ml-1 mt-1 block text-sm font-normal leading-6 text-[#7A7A7A]"
      >
        {label}
      </label>
    </span>
  );
};

export default RadioInput;
