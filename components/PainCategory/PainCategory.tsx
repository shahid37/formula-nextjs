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
      <Image
        className="rounded-md"
        src={img}
        alt={name}
        height={300}
        width={300}
      />
      <h5 className="mt-1">{name}</h5>
    </div>
  );
};

PainCategory.defaultProps = {};
export default PainCategory;
