import React from "react";

interface CustomInputProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  name,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default CustomInput;
