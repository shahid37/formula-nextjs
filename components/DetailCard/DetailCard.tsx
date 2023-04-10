import React, { FC } from "react";

import Ratings from "../Ratings";

import Icon from "../AppointmentCard/images/Formula";

interface DetailCardProps {
  text: string;
  rating: number;
  formulaName: string;
  reviews: string | number;
}

const DetailCard: FC<DetailCardProps> = ({
  text,
  formulaName,
  rating,
  reviews,
}: DetailCardProps) => {
  return (
    <div className="w-full bg-off-white rounded-lg p-4">
      <div className="flex">
        <Icon />
        <div className="w-fit flex flex-col ml-4">
          {/* <p className="text-2xl text-black font-normal">{formulaName}</p> */}
          <p className="text-sm font-normal text-gray mt-1 w-3/4">{text}</p>
          {/* <div className="flex items-center mt-4">
            <div>
              <Ratings rating={rating} />
            </div>
            <p className="ml-2 text-xs">{reviews} reviews</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

DetailCard.defaultProps = {};
export default DetailCard;
