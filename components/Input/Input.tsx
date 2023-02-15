import React from "react";
import classNames from "classnames";

interface InputProps {
  label?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  htmlFor?: string;
  onChange: any;
}

const Input = ({
  label,
  placeholder,
  className,
  value,
  name,
  onChange,
}: InputProps) => {
  return (
    <div>
      {label ? (
        <label className="block text-lg font-normal uppercase mb-2">
          {label}
        </label>
      ) : null}
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={classNames(
          "block w-full px-4 py-5 text-sm bg-light-gray",
          className
        )}
      />
    </div>
  );
};

Input.defaultProps = {};
export default Input;
