import Button from "../../../components/Button/Button";
import Image from "next/image";
import React, { FC } from "react";

import backgroundImg from "../../../public/assets/questionnaire.png";
import { useRouter } from "next/router";

interface LandingPageProps {
  text?: string;
}

const LandingPage: FC<LandingPageProps> = ({ text }: LandingPageProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/questionnaries");
  };  
  return (
    <div className="flex relative">
      <Image
        className="w-screen xs:h-screen md:h-full"
        src={backgroundImg}
        alt="side image"
      />
      <div className="absolute xs:left-4 md:left-28 bottom-28 xs:top-20 md:top-80 flex flex-col text-white">
        <h1 className="xs:w-auto md:w-2/5">{text}</h1>
        <h5 className="mt-6 xs:w-60 md:w-1/5">
          Answer the following questions as best as you can.
        </h5>
        <div className="mt-20 xs:w-60 md:w-80">
          <Button onClick={onClick}>CREATE MY FORMULA</Button>
        </div>
      </div>
    </div>
  );
};

LandingPage.defaultProps = {
  text: "Creation of your customized pain formula is almost complete!",
};
export default LandingPage;
