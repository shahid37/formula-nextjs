import React, { FC } from "react";

interface HeroProps {
  text: string;
}

const Hero: FC<HeroProps> = ({ text }: HeroProps) => {
  return (
    <div className="bg-primary-blue items-center flex xs:pl-16 md:pl-32 2xl:pl-64 xs:py-10 md:py-20">
      <p className="text-white text-4xl font-normal">{text}</p>
    </div>
  );
};

Hero.defaultProps = {};
export default Hero;
