import classNames from "classnames";
import React, { FC } from "react";
import { ReactNode } from "react";

interface PriceTagProps {
  children?: ReactNode;
  lineThrough?: boolean;
}

const PriceTag: FC<PriceTagProps> = ({
  children,
  lineThrough,
}: PriceTagProps) => {
  return (
    <div
      className={classNames(
        lineThrough ? "bg-none" : "bg-primary-blue",
        "flex items-center justify-center py-3 px-4 h-[33px]"
      )}
    >
      <p
        className={classNames(
          lineThrough ? "line-through text-black" : "text-white",
          "font-normal leading-5 "
        )}
      >
        {children}
      </p>
    </div>
  );
};

PriceTag.defaultProps = {
  lineThrough: false,
};
export default PriceTag;
