import classNames from "classnames";
import Image from "next/image";
import React, { FC, useState } from "react";
import Button from "../Button";
import PriceTag from "../PriceTag";

interface ProductCardProps {
  productImage: string;
  isSaleItem?: boolean;
  name: string;
  description: string;
  totalPrice: string;
  discountPrice?: string;
}

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  const [hover, setHover] = useState(false);
  const commonClassNames = "flex flex-col items-center";
  return (
    <div
      className={classNames(
        commonClassNames,
        "pt-20 pb-6 xs:w-full md:w-80 text-center"
      )}
    >
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={classNames(
          "relative flex w-full bg-light-gray h-96 items-center justify-center"
        )}
      >
        {props.isSaleItem && (
          <div className="absolute rounded-full left-2 -top-10 flex justify-center items-center h-16 w-16 bg-primary-blue">
            <h2 className="text-white">Sale</h2>
          </div>
        )}

        {hover && (
          <div className="flex w-full z-10 absolute bottom-0">
            <Button type="default">ADD TO CART</Button>
          </div>
        )}
        <Image
          src={props.productImage}
          alt="image"
          className="absolute bottom-4 cursor-pointer"
        />
      </div>

      <div className={classNames(commonClassNames)}>
        <h3 className="mt-6">{props.name}</h3>
        <h4 className="text-primary-blue mt-4">{props.description}</h4>
        <div className="flex">
          <div className="mt-6 w-24">
            <PriceTag>{props.totalPrice}</PriceTag>
          </div>
          {props.discountPrice && (
            <div className="mt-6 w-24	">
              <PriceTag lineThrough={true}>{props.discountPrice}</PriceTag>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.defaultProps = {};
export default ProductCard;
