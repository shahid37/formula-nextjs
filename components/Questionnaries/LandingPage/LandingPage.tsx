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
        className="w-screen xs:h-screen md:h-full object-cover"
        src={backgroundImg}
        alt="side image"
      />
      <div className="absolute xs:left-4 xs:right-4 md:left-28 xs:bottom-0 md:bottom-28 xs:top-20 md:top-80 flex flex-col xs:justify-end text-white">
        <h1 className="xs:w-auto md:w-2/5 xs:text-[32px] xs:leading-[35px] md:text-[64px] md:leading-[64px]">
          {text}
        </h1>
        <h5 className="text-[16px] leading-5 font-light opacity-80 mt-6 xs:w-60 md:w-1/5">
          Answer the following questions as best as you can.
        </h5>
        <div className="mt-20 xs:w-[100%] md:w-80 pb-4">
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
