import React from "react";
import { useState, useEffect, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
  loading?: boolean;
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
    const disabledClassNames =
      props.disable || props.loading ? "cursor-not-allowed opacity-50" : "";
    const linkButtonClassNames = "text-sm";
    const commonButtonClassNames =
      "w-full rounded-lg h-12 flex-grow justify-center py-4 whitespace-nowrap text-black";
    return (
      <button
        disabled={props.disable || props.loading}
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
        {props.loading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-6 w-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}

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
