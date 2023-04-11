import classNames from "classnames";
import React, { FC } from "react";

interface DividerProps {
  dashed?: boolean;
  type?: "horizontal" | "vertical";
}

const Divider: FC<DividerProps> = ({ dashed, type }: DividerProps) => {
  let solidClassNames =
    type === "horizontal" ? "h-0.5 w-full " : "h-full w-0.5 ";
  let dashedClassNames =
    type === "horizontal"
      ? "h-0.5 w-full border-t-1 "
      : "h-full w-0.5 border-l-1 ";

  if (!dashed) {
    solidClassNames += "flex bg-[#EEEEEE] ";
  } else {
    dashedClassNames += "flex border-[#EEEEEE] border-dashed";
  }
  return <div className={classNames(solidClassNames, dashedClassNames)} />;
};

Divider.defaultProps = {
  dashed: false,
  type: "horizontal",
};
export default Divider;
