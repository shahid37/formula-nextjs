import Image from "next/image";
import React from "react";
import classNames from "classnames";

import Hero from "../../public/assets/hero.png";

import ShiftIcon from "./images/ShiftIcon";
import VideoIcon from "./images/VideoIcon";
import MedicineIcon from "./images/MedicineIcon";

import Button from "../Button";
import Footer from "../Footer";
import PainCategory, { PainTypes } from "../PainCategory";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const commonClassNames = "flex flex-col";

  return (
    <div className={classNames(commonClassNames, "w-full")}>
      <div className="mt-[60px] relative w-full xs:h-[350px] md:h-64">
        <h1 className="xs:px-6 xs:text-[44px] md:px-28 absolute top-[104px] z-[100] left-0 text-white md:text-[40px] max-w-[725px] leading-[48px]">
          Customized prescription medicine for your pain
        </h1>
        <Image
          src={Hero}
          className="xs:object-cover xs:h-[100%] md:object-cover"
          alt="Hero image"
          fill
        />
      </div>
      <div
        className={classNames(
          commonClassNames,
          "xs:pt-6 xs:px-6 md:px-28 md:pt-11"
        )}
      >
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6">
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
          ].map((item) => (
            <div key={item.text} className="flex items-center">
              {item.icon}
              <h6 className="text-gray text-base ml-4">{item.text}</h6>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <h5 className="text-black">Find your perfect PAIN formula</h5>
          <p className="text-sm font font-normal text-gray">
            Pick a category to begin creating your formula
          </p>
          <div className="grid grid-cols-4 gap-4 mt-4">
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
                className={classNames(commonClassNames, "items-center")}
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
        <div className="mt-10">
          <Footer />
        </div>
        <div className="mx-auto my-10 xs:w-80 md:w-96">
          <Button
            onClick={() => router.push("/questionnaries/home")}
            type="default"
          >
            Create my Formula
          </Button>
        </div>
      </div>
    </div>
  );
};

Main.defaultProps = {};
export default Main;
