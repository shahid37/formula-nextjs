// import Button from "../../../components/Button/Button";
// import Image from "next/image";
// import React, { FC } from "react";

// import backgroundImg from "../../../public/assets/questionnaire.png";
// import { useRouter } from "next/router";

// interface LandingPageProps {
//   text?: string;
// }

// const LandingPage: FC<LandingPageProps> = ({ text }: LandingPageProps) => {
//   const router = useRouter();
//   const onClick = () => {
//     router.push("/questionnaries");
//   };
//   return (
//     <div className="flex relative">
//       <Image
//         className="w-screen xs:object-left xs:h-screen md:h-full object-cover"
//         src={backgroundImg}
//         alt="side image"
//       />
//       <div className="absolute xs:left-4 xs:right-4 md:left-28 xs:bottom-0 md:bottom-28 xs:top-20 md:top-80 flex flex-col xs:justify-end text-white">
//         <h1 className="xs:w-auto md:w-2/5 xs:text-[32px] xs:leading-[35px] md:text-[64px] md:leading-[64px]">
//           {text}
//         </h1>
//         <h5 className="text-[16px] leading-5 font-light opacity-80 mt-6 xs:w-60 md:w-1/5">
//           Answer the following questions as best as you can.
//         </h5>
//         <div className="mt-20 xs:w-[100%] md:w-80 pb-4">
//           <Button onClick={onClick}>CREATE MY FORMULA</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// LandingPage.defaultProps = {
//   text: "Creation of your customized pain formula is almost complete!",
// };
// export default LandingPage;

import React from "react";

// Components
import Button from "@/components/Button";

const Container = ({ children, className }) => (
  <div
    className={`max-w-[1512px] xs:w-[91%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const LandingPage = () => {
  return (
    <section className="xs:h-[100%] lg:h-screen overflow-hidden relative">
      <div
        className="xs:h-auto lg:h-screen absolute top-0 right-0 bottom-0 left-0 z-[-1] xs:bg-inherit lg:bg-center"
        style={{
          backgroundImage: `linear-gradient(192.53deg, rgba(0, 0, 0, 0) 16.68%, rgba(0, 0, 0, 0.523123) 63.94%, rgba(0, 0, 0, 0.6) 99.49%), url('/assets/questionnaire.png')`,
          backgroundSize: "cover",
          width: "100%",
        }}
      />
      <Container className="h-[100%] pt-16 xs:pb-[32px] lg:pb-0 flex justify-start xs:items-end lg:items-center 2xl:items-end 2xl:pb-[120px]">
        <div className="xs:max-w-[358px] lg:max-w-[612px] mr-auto">
          <h2 className="text-white xs:text-[32px] xs:leading-[109%] lg:text-[54px] lg:leading-[60px] 2xl:text-[64px] 2xl:leading-[64px]">
            Creation of your customized pain formula is almost complete!
          </h2>
          <p className="mt-6 max-w-[301px] font-light text-white opacity-80 xs:text-[16px] xs:leading-[19px] md:text-[20px] md:leading-6">
            Answer the following questions as best as you can.
          </p>
          <div className="xs:mt-[40px] lg:mt-16 2xl:mt-20 max-w-[358px] w-[100%]">
            <Button onClick={() => {}}>CREATE MY FORMULA</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingPage;
