import React from "react";
import { useState, useEffect, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  disable?: boolean;
  color?: string;
  fontSize?: number;
  textColor?: string;
  type?: "link" | "default";
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
      "flex cursor-pointer items-center text-center font-normal ";
    const disabledClassNames = props.disable && "cursor-not-allowed opacity-50";
    const linkButtonClassNames = `text-sm font-medium	 leading-6 '
    }`;
    const buttonClassNames =
      "w-full h-[53px] bg-primary-blue flex-grow justify-center py-3 whitespace-nowrap text-white leading-5";

    return (
      <button
        ref={ref}
        type={props.htmlType}
        onClick={clickCB}
        style={{
          fontSize: props.fontSize ? props.fontSize : 14,
          color: props.textColor ? props.textColor : "white",
        }}
        className={
          props.type === "link"
            ? classNames(
                commonClassNames,
                disabledClassNames,
                linkButtonClassNames
              )
            : classNames(
                commonClassNames,
                disabledClassNames,
                buttonClassNames,
                "bg-dark-blue"
              )
        }
      >
        {props.children}
      </button>
    );
  }
);

// Esoteric ESLint requirement that doesn't automatically get satisfied with forwardRef, see docs:
//https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
Button.displayName = "Button";

Button.defaultProps = {
  disable: false,
  htmlType: "button",
};

export default Button;
