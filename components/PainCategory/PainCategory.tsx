import React, { FC } from "react";

// assets
import Migraines from "../../public/assets/painCatagories/Headache.png";
import JointPain from "../../public/assets/painCatagories/elbowPain.png";
import MusclePain from "../../public/assets/painCatagories/shoulderPain.png";
import NervePain from "../../public/assets/painCatagories/wristPain.png";
import Image from "next/image";

import { PainTypes } from ".";

interface PainCategoryProps {
  name: string;
  painType: PainTypes;
}

const PainCategory: FC<PainCategoryProps> = ({
  name,
  painType,
}: PainCategoryProps) => {
  const painCategories = {
    musclePain: MusclePain,
    jointPain: JointPain,
    nervePain: NervePain,
    migraines: Migraines,
  };

  const img = painCategories[painType];

  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden rounded-[8px]">
        <Image
          className="rounded-md border border-light-gray cursor-pointer hover:transform hover:scale-110 transition duration-500"
          src={img}
          alt={name}
          // width={300}
        />
      </div>
      <h5 className="mt-1 text-[20px] leading-[24px]">{name}</h5>
    </div>
  );
};

PainCategory.defaultProps = {};
export default PainCategory;
