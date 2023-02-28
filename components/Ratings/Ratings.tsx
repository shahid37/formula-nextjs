import React, { FC } from "react";

import Rating from "./images/Rating";

interface RatingsProps {
  rating: number;
}

const Ratings: FC<RatingsProps> = ({ rating }: RatingsProps) => {
  let correctRating = 0;
  if (rating >= 0 && rating <= 5) {
    correctRating = Math.floor(rating);
  } else {
    if (rating > 5) {
      correctRating = 5;
    }
  }

  return (
    <div className="flex w-full">
      <Rating rating={correctRating} />
    </div>
  );
};

Ratings.defaultProps = {
  rating: 1,
};
export default Ratings;
