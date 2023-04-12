import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { InputTypes } from ".";

interface InputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  name?: string;
  onChange: any;
  type?: InputTypes;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const commonClassNames =
    "base-medium block w-full border border-[#635F66] px-4 py-3 focus:border-teal focus:outline-none	";
  const inputClassNames =
    "bg-[transparent] text-[16px] leading-[19px] text-[#4E4B48] font-normal border border-input-border border-solid rounded-lg";

  const [inputType, setInputType] = useState(props.type);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (props.type === "password") {
      if (showPassword) {
        setInputType("text");
      } else {
        setInputType("password");
      }
    } else {
      setInputType(props.type);
    }
  }, [props.type, showPassword]);

  return (
    <div className="relative block w-full">
      <input
        ref={ref}
        type={inputType}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        className={classNames(
          commonClassNames,
          props.className,
          props.type === "password" && "pr-12 ",
          inputClassNames
        )}
      />
      {props.type === "password" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="cursor-pointer absolute top-1/2 right-3 h-6 w-6 -translate-y-1/2 transform"
        >
          {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";
Input.defaultProps = {
  type: "text",
};
export default Input;
