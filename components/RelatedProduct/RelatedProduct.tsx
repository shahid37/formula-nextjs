import React, { FC } from "react";

import Rating from "./images/Rating";

interface RelatedProductProps {
  imgUrl: string;
  name: string;
  rating: number;
}

const RelatedProduct: FC<RelatedProductProps> = ({
  imgUrl,
  name,
  rating,
}: RelatedProductProps) => {
  let correctRating = 0;
  if (rating >= 0 && rating <= 5) {
    correctRating = Math.floor(rating);
  } else {
    if (rating > 5) {
      correctRating = 5;
    }
  }
  return (
    <div className="flex">
      <div
        className={
          "cursor-pointer flex items-center justify-center pb-3 bg-light-gray w-24 h-28"
        }
      >
        <img src={`${imgUrl}`} alt="sufring board" width="100%" height="100%" />
      </div>
      <div className="ml-4 mt-6 flex flex-col">
        <h4 className="font-normal w-36">{name}</h4>
        <span className="mt-5">
          <Rating rating={correctRating} />
        </span>
      </div>
    </div>
  );
};

RelatedProduct.defaultProps = {};
export default RelatedProduct;
