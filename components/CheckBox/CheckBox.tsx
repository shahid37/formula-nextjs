import React from "react";

interface CheckBoxProps {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Checkbox = ({ isChecked, label, handleChange }: CheckBoxProps) => {
  return (
    <div className="flex w-56 items-center">
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        onChange={handleChange}
      />
      {label && (
        <label
          className="ml-2 cursor-pointer text-black text-sm font-medium uppercase"
          htmlFor={label}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
