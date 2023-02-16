import React, { FC } from "react";
import HeroImage from "./images/Hero";

interface HeroProps {
  text?: string;
}

const Hero: FC<HeroProps> = ({ text }: HeroProps) => {
  return (
    <div className="flex">
      <div className="relative">
        <HeroImage />
      </div>
      <h2 className="absolute left-28 top-24 w-[524px] text-white">{text}</h2>
    </div>
  );
};

Hero.defaultProps = {
  text: "Customized prescription medicine for your pain",
};
export default Hero;
