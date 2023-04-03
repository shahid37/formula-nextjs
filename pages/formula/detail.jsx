import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import DetailCardProps from "../../components/DetailCard";
import Button from "../../components/Button";

import DogIcon from "../../public/assets/icons/dog.svg";
import LeafsIcon from "../../public/assets/icons/leafs.svg";
import ChemicalIcon from "../../public/assets/icons/chemical.svg";
import Image from "next/image";

const FormulaDetail = () => {
  const commonClassNames = "py-4 xs:px-2 md:px-[120px]";

  const data = [
    {
      title: "Baclofen",
      description:
        "It works on the GABAβ receptor in your body reducing painful muscle spasms and causing muscle relaxation",
    },
    {
      title: "Diclofenac",
      description:
        "It reduces the molecule prostaglandin in the body which is responsible for inflammation",
    },
    {
      title: "Lidocaine",
      description:
        "It acts as a nerve block decreasing pain sensation at the site it is applied",
    },
  ];

  return (
    <AppLayout>
      <section className={`${commonClassNames}`}>
        <div className="mt-16">
          <h2 className="text-black text-[24px] leading-[29px] font-normal">
            Hey, Edward
          </h2>
          <p className="text-black opacity-60 mt-2 text-[16px] leading-[19.36px] font-normal">
            Here’s your customized pain formula
          </p>
        </div>
        <div className="mt-6 flex justify-between gap-x-6">
          <div className="flex-1">
            <DetailCardProps
              formulaName="Edward’s Muscle Formula"
              text="Our Muscle Cream 1 targets your muscles to create a relaxing effect with potent muscle relaxers."
              reviews={0}
              rating={5}
            />
            <p className="mt-6 text-[14px] leading-[17px] font-medium text-black opacity-60 tracking-[0.1px]">
              Read the proper instructions
            </p>
            <p className="mt-4 text-[16px] leading-[19px] font-medium text-black tracking-[0.5px]">
              Edward Mike - Your custom formula contains Baclofen, Diclofenac
              and Lidocaine. A provider will review your responses and
              information and determine if this formula is best suited for you.
            </p>
            <li className="mt-4 text-[16px] leading-[19px] font-medium text-black tracking-[0.5px]">
              Instructions Apply to the affected area 2 to 3 times daily
            </li>
            <div className="mt-10 max-w-[358px]">
              <Button>Select this formula</Button>
            </div>
          </div>
          <div>
            <div className="max-w-[408px] flex flex-col justify-between h-[269px] bg-off-white rounded-[8px] p-4">
              {data.map((d, i) => (
                <>
                  <div className="flex flex-col gap-y-1">
                    <h3 className="text-[16px] leading-[19.36px] tracking-[0.15px] text-black">
                      {d.title}
                    </h3>
                    <p className="text-[14px] leading-[16.94px] tracking-[0.25px] opacity-75 text-black">
                      {d.description}
                    </p>
                  </div>
                  {i < data.length - 1 && (
                    <div className="h-[1px] w-full bg-[#4E4B48] opacity-[0.05]" />
                  )}
                </>
              ))}
            </div>
            <div className="mt-2 rounded-[8px] flex py-4 px-2 bg-off-white justify-between h-[114px]">
              <div className="flex flex-col gap-y-4 justify-center items-center h-[82px]">
                <Image
                  src={DogIcon}
                  alt="Hypoallergenic"
                  width={32}
                  height={32}
                />
                <p className="text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                  Hypoallergenic
                </p>
              </div>
              <div className="w-[1px] h-[100%] bg-[#4E4B48] opacity-[0.05]" />
              <div className="flex flex-col gap-y-4 justify-center items-center h-[82px]">
                <Image
                  src={DogIcon}
                  alt="Hypoallergenic"
                  width={32}
                  height={32}
                />
                <p className="text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                  Hypoallergenic
                </p>
              </div>
              <div className="w-[1px] h-[100%] bg-[#4E4B48] opacity-[0.05]" />
              <div className="flex flex-col gap-y-4 justify-center items-center h-[82px]">
                <Image
                  src={DogIcon}
                  alt="Hypoallergenic"
                  width={32}
                  height={32}
                />
                <p className="text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                  Hypoallergenic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default FormulaDetail;
