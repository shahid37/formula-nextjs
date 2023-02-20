import Button from "../../../components/Button/Button";
import Image from "next/image";
import React, { FC } from "react";

import backgroundImg from "../../../public/assets/questionnaire.png";

interface LandingPageProps {
  text?: string;
}

const LandingPage: FC<LandingPageProps> = ({ text }: LandingPageProps) => {
  return (
    <div className="flex">
      <Image
        className="w-screen h-screen object-fit	"
        src={backgroundImg}
        alt="side image"
      />
      <div className=" absolute left-28 bottom-28 flex flex-col w-96 text-white">
        <h2>{text}</h2>
        <h5 className="mt-6">
          Answer the following questions as best as you can.
        </h5>
        <div className="mt-20 w-full">
          <Button>CREATE MY FORMULA</Button>
        </div>
      </div>
    </div>
  );
};

LandingPage.defaultProps = {
  text: "Creation of your customized pain formula is almost complete!",
};
export default LandingPage;
