import Image from "next/image";
import React from "react";

import Hero from "../../public/assets/hero.png";

import ShiftIcon from "./images/ShiftIcon";
import VideoIcon from "./images/VideoIcon";
import MedicineIcon from "./images/MedicineIcon";

import Button from "../Button";
import Footer from "../Footer";
import PainCategory, { PainTypes } from "../PainCategory";
import classNames from "classnames";

const Main = () => {
  const commonClassNames = "flex flex-col";
  return (
    <div className={classNames(commonClassNames, "w-full")}>
      <div className="relative w-full h-64">
        <Image src={Hero} alt="Hero image" fill />
      </div>
      <div className={classNames(commonClassNames, "xs:px-2 md:px-28 pt-10")}>
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
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
              <h6 className="text-black ml-4">{item.text}</h6>
            </div>
          ))}
        </div>
        <div className="pt-10 ">
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
        <div className="mx-auto my-10 w-96">
          <Button type="default">Create my Formula</Button>
        </div>
      </div>
    </div>
  );
};

Main.defaultProps = {};
export default Main;
