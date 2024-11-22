import React from 'react';
import { IInputFieldProps } from './interface';

const InputField: React.FC<IInputFieldProps> = ({
  id,
  type = "text",
  placeholder = "",
  error,
  ariaDescribedby,
  register,
  className,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={ariaDescribedby}
      {...register}
      className={className ?? `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
    />
  );
}

export default InputField;
