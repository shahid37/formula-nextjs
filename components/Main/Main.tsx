import Image from "next/image";
import React from "react";
import classNames from "classnames";

import Hero from "../../public/assets/hero.png";

import { AppMainLayout } from "../MainLayout/AppMainLayout";

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
      <div className="mt-[60px] relative w-full md:h-64">
        <AppMainLayout className={"flex items-end h-full pb-12"}>
          <h1 className="text-white text-[40px] max-w-[524px] leading-[48px]">
            Customized prescription medicine for your pain
          </h1>
        </AppMainLayout>
        <Image
          src={Hero}
          className="relative z-[-100] object-cover h-[100%]"
          alt="Hero image"
          fill
        />
      </div>
      <AppMainLayout className={""}>
        <>
          <div className={classNames(commonClassNames, "xs:pt-6 md:pt-10")}>
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
                  <div className="w-12 h-12">{item.icon}</div>
                  <h6 className="text-gray text-base ml-4">{item.text}</h6>
                </div>
              ))}
            </div>
            <div className="pt-10">
              <h5 className="text-black">Find your perfect PAIN formula</h5>
              <p className="text-sm font font-normal text-gray">
                Pick a category to begin creating your formula
              </p>
              <div className="flex flex-row gap-6 mt-4">
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
                    className={classNames("items-center w-[25%] grow")}
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
            <div className="pb-[58px] mx-auto mt-10 xs:w-[100%] md:w-96">
              <Button
                onClick={() => router.push("/questionnaries/home")}
                type="default"
              >
                Create my Formula
              </Button>
            </div>
          </div>
        </>
      </AppMainLayout>
    </div>
  );
};

Main.defaultProps = {};
export default Main;
