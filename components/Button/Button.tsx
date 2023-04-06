import React from "react";
import { useState, useEffect, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
  color?: string;
  fontSize?: number;
  textColor?: string;
  backgroundColor?: string;
  type?: "link" | "default" | "secondary";
  htmlType?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
}

/**
 *  Standard Button component
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // If onClick is passed in and the button is not disabled, store onClick as the current click callback
    // The odd syntax wrapping the CB in an anonymous function is just a quirk of storing functions into React state
    const [clickCB, setClickCB] = useState(
      !props.disable && props.onClick
        ? () => {
            return props.onClick;
          }
        : () => {
            return () => {};
          }
    );
    // Set the click callback or set to noop
    useEffect(() => {
      if (props.disable || !props.onClick) {
        setClickCB(() => {
          return () => {};
        });
      } else {
        setClickCB(() => {
          return props.onClick;
        });
      }
    }, [props.onClick, props.disable]);

    const commonClassNames =
      "flex cursor-pointer items-center text-center font-medium leading-4 uppercase";
    const disabledClassNames = props.disable && "cursor-not-allowed opacity-50";
    const linkButtonClassNames = "text-sm";
    const commonButtonClassNames =
      "w-full rounded-lg h-12 flex-grow justify-center py-4 whitespace-nowrap text-black";
    return (
      <button
        ref={ref}
        type={props.htmlType}
        onClick={clickCB}
        style={{
          fontSize: props.fontSize ? props.fontSize : 14,
          color: props.textColor ? props.textColor : "#111111",
          backgroundColor: props.backgroundColor ? props.backgroundColor : "",
        }}
        className={
          props.type === "link"
            ? classNames(
                commonClassNames,
                disabledClassNames,
                linkButtonClassNames
              )
            : props.type === "secondary"
            ? classNames(
                commonClassNames,
                disabledClassNames,
                commonButtonClassNames,
                "border border-teal"
              )
            : classNames(
                commonClassNames,
                disabledClassNames,
                commonButtonClassNames,
                "bg-teal"
              )
        }
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.defaultProps = {
  disable: false,
  htmlType: "button",
};

export default Button;
