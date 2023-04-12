import Image from "next/image";
import React from "react";
import classNames from "classnames";

import Hero from "../../public/assets/hero.png";

import { AppMainLayout } from "../MainLayout/AppMainLayout";

import ShiftIcon from "./images/ShiftIcon";
import VideoIcon from "./images/VideoIcon";
import MedicineIcon from "./images/MedicineIcon";

import MobileViewHero from "./images/mobileViewHero.png";

import Button from "../Button";
import Footer from "../Footer";
import PainCategory, { PainTypes } from "../PainCategory";
import { useRouter } from "next/router";
import Divider from "../Divider";

const Main = () => {
  const router = useRouter();
  const commonClassNames = "flex flex-col";

  return (
    <div className={classNames(commonClassNames, "w-full")}>
      <div className="flex items-center justify-center">
        <div className="relative w-full xs:h-[304px] md:h-[308px] mt-[60px] max-w-[1512px] ">
          <AppMainLayout
            className={"flex items-end h-full xs:pb-[32px] md:pb-12"}
          >
            <h1 className="font-inter text-white xs:text-[32px] xs:leading-[38px] md:text-[40px] md:leading-[48px] max-w-[524px] leading-[48px]">
              Customized prescription medicine for your pain
            </h1>
          </AppMainLayout>
          <Image
            src={MobileViewHero}
            className="xs:block md:hidden relative z-[-100] xs:object-fit md:object-cover h-[304px]"
            alt="Hero image"
            fill
          />
          <Image
            src={Hero}
            className="xs:hidden md:block relative z-[-100] xs:object-fit md:object-cover h-[100%]"
            alt="Hero image"
            fill
          />
        </div>
      </div>
      <AppMainLayout>
        <div className={classNames(commonClassNames, "xs:pt-6 md:pt-10")}>
          <div className="grid xs:grid-cols-1 md:grid-cols-3 xs:gap-4 md:gap-6">
            {[
              {
                text: "Complete 5 minute pain assessment questionnaire",
                icon: <ShiftIcon />,
              },
              {
                text: "Speak with a licensed doctor or provider over video, phone, or chat",
                icon: <VideoIcon />,
              },
              {
                text: "Your customized pain formula created and shipped directly to you",
                icon: <MedicineIcon />,
              },
            ].map((item, i) => (
              <div key={item.text} className="flex items-center">
                <div className="w-12 h-12">{item.icon}</div>
                <h6
                  className={classNames(
                    i === 0 && "max-w-[306px]",
                    "text-[#111111] opacity-80 text-[16px] leading-[19px] ml-4"
                  )}
                >
                  {item.text}
                </h6>
              </div>
            ))}
          </div>
          <div className="md:hidden my-[32px]">
            <Divider type="horizontal" />
          </div>
          <div className="xs:pt-0 md:pt-10">
            <h5 className="xs:text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] text-black">
              Find your perfect PAIN formula
            </h5>
            <p className="mt-1 xs:text-[12px] xs:leading-[15px] md:text-[14px] md:leading-[17px] font-normal text-[#4E4B48]">
              Pick a category to begin creating your formula
            </p>
            <div className="flex flex-row xs:flex-wrap md:flex-nowrap xs:gap-4 md:gap-6 mt-4">
              {[
                {
                  name: "Muscle Pain",
                  type: "musclePain",
                },
                {
                  name: "Joint Pain",
                  type: "jointPain",
                },
                {
                  name: "Nerve Pain",
                  type: "nervePain",
                },
                {
                  name: "Migraines",
                  type: "migraines",
                },
              ].map((item) => (
                <div
                  className={classNames(
                    "items-center xs:w-[35%] md:w-[25%] grow"
                  )}
                  key={item.name}
                >
                  <PainCategory
                    name={item.name}
                    painType={item.type as PainTypes}
                  />
                </div>
              ))}
            </div>
          </div>

          {/*  Footer */}
          <div className="xs:mt-[32px] md:mt-10">
            <Footer />
          </div>
          <div className="xs:pb-[32px] md:pb-[58px] mx-auto  xs:mt-[60px] md:mt-10 xs:w-[100%] md:w-96">
            <Button
              onClick={() => router.push("/questionnaries/home")}
              type="default"
            >
              Create my Formula
            </Button>
          </div>
        </div>
      </AppMainLayout>
    </div>
  );
};

Main.defaultProps = {};
export default Main;
