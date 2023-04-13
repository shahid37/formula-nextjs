import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import AppLayout from "../../components/AppLayout/AppLayout";
import { AppMainLayout } from "../../components/MainLayout/AppMainLayout";

import DetailCardProps from "../../components/DetailCard";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

import DogIcon from "../../public/assets/icons/dog.svg";
import usePersistentState from "@/hooks/usePersistentState";
import LeafsIcon from "../../public/assets/icons/leafs.svg";
import ChemicalIcon from "../../public/assets/icons/chemical.svg";

import { BASE_URL, MAPPING, FORMULA_CREATA_API } from "../../utils/constants";
import axios from "axios";
import classNames from "classnames";

const FormulaDetail = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCreateQuestion, setIsCreateQuestion] = usePersistentState(
    "isCreateQuestion",
    false
  );
  const [currentQuestion, setCurrentQuestion] = usePersistentState(
    "currentQuestion",
    0
  );

  const onClick = () => {
    setIsCreateQuestion(false);
    localStorage.setItem("questionData", null);
    setCurrentQuestion(0);
    router.push("/questionnaries");
  };

  const commonClassNames = "py-4";

  const createFormula = async () => {
    var localStorageData = localStorage.getItem("questionData");
    if (localStorageData) {
      const localDataArray = JSON.parse(localStorageData);
      setLoading(true);
      let url = BASE_URL + FORMULA_CREATA_API;
      const _data = {
        user_id: -1,
        answers: {
          pain_types: localDataArray[0]?.answers,
          pain_locations: localDataArray[1]?.answers,
          pain_radiation: MAPPING[localDataArray[2]?.answers],
          pain_factors: [localDataArray[3]?.answers],
          pain_relievers: [localDataArray[4]?.answers],
          pain_current_severity: MAPPING[localDataArray[5]?.answers],
          pain_worst_severity: MAPPING[localDataArray[6]?.answers],
          pain_least_severity: MAPPING[localDataArray[7]?.answers],
          pain_consistency: MAPPING[localDataArray[8]?.answers],
          pain_duration: MAPPING[localDataArray[9]?.answers],
          pain_medications: [localDataArray[10]?.answers],
          allergies: [localDataArray[11]?.answers],
          surgeries: [localDataArray[12]?.answers],
          general_medications: [localDataArray[13]?.answers],
        },
        type: "pain",
        formula_id: -1,
      };
      await axios
        .post(url, _data)
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            setData(res.data);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log("error", error);
          toast.error(`${error?.response?.data}`);
        });
    }
  };

  useEffect(() => {
    var localStorageData = localStorage.getItem("questionData");
    if (localStorageData) {
      const localDataArray = JSON.parse(localStorageData);
      if (
        localDataArray &&
        Array.isArray(localDataArray) &&
        localDataArray.length > 0
      ) {
        createFormula();
      }
    }
  }, []);

  const _data = [
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
    <div className="relative ">
      <AppLayout navLinkAction={onClick} notApplyBackgroundColor={true}>
        {loading ? (
          <div className="absolute w-full h-screen z-10 bg-off-white bg-opacity-50">
            <Loader />
          </div>
        ) : (
          <AppMainLayout>
            <section className={`${commonClassNames} pt-[78px] `}>
              <div>
                <h2 className="text-black text-[24px] leading-[29px] font-normal">
                  Hey, Edward
                </h2>
                <p className="text-black opacity-60 mt-2 text-[16px] leading-[19.36px] font-normal">
                  Here’s your customized pain formula
                </p>
              </div>
              <div className="xs:pt-[120px] md:pt-0 mt-6 flex xs:flex-col xs:gap-y-[16px] md:gap-y-6 lg:flex-row justify-between gap-x-6 relative">
                <div className="flex-1 xs:pb-4 md:pb-0">
                  <div className="xs:absolute top-0 left-0 right-0 md:static">
                    <DetailCardProps
                      formulaName="Edward’s Muscle Formula"
                      text="Our Muscle Cream 1 targets your muscles to create a relaxing effect with potent muscle relaxers."
                      reviews={0}
                      rating={5}
                    />
                  </div>
                  <p className="mt-6 text-[14px] leading-[17px] font-medium text-[#111111] opacity-60 tracking-[0.1px]">
                    Read the proper instructions
                  </p>
                  <p className="mt-4 xs:text-[14px] md:text-[16px] leading-[19px] font-medium text-black tracking-[0.5px]">
                    {"Edward Mike -" +
                      data?.ingredients.map((item, i) =>
                        i === data?.ingredients.length - 1
                          ? `and ${item.ingredient.name} `
                          : ` ${item.ingredient.name}`
                      ) +
                      "A provider will review your responses and information and determine if this formula is best suited for you."}
                  </p>
                  <div className="hidden md:inline">
                    <li className="mt-4 text-[16px] leading-[19px] font-medium text-black tracking-[0.5px]">
                      Instructions Apply to the affected area 2 to 3 times daily
                    </li>
                    <div className="mt-10 xs:w-[100%] lg:max-w-[358px] sm:absolute md:static bottom-0">
                      <Button>Continue</Button>
                    </div>
                  </div>
                </div>
                <div>
                  {_data.length > 0 && (
                    <div
                      className={classNames(
                        _data.length > 5 && "h-[420px] overflow-scroll",
                        "xs:max-w-[100%] lg:max-w-[408px] flex flex-col  justify-between bg-off-white rounded-[8px] p-4"
                      )}
                    >
                      {data?.ingredients?.map((item, index) => (
                        <div className="mb-3" key={index}>
                          <div className="flex flex-col gap-y-1">
                            <h3 className="text-[16px] leading-[19.36px] tracking-[0.15px] text-black">
                              {item.ingredient.name}
                              {index}
                            </h3>
                            <p className="text-[14px] leading-[16.94px] tracking-[0.25px] opacity-75 text-black">
                              {item.ingredient.description}
                            </p>
                          </div>
                          {index < data?.ingredients?.length - 1 && (
                            <div className="h-[1px] mt-4 w-full bg-[#4E4B48] opacity-[0.05]" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-2 rounded-[8px] flex py-4 px-2 bg-off-white justify-between h-[114px]">
                    <div className="flex flex-col gap-y-4 justify-start items-center h-[82px]">
                      <Image
                        src={DogIcon}
                        alt="Hypoallergenic"
                        width={32}
                        height={32}
                      />
                      <p className="w-[114px] text-center text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                        Hypoallergenic
                      </p>
                    </div>
                    <div className="w-[1px] h-[100%] bg-[#4E4B48] opacity-[0.05]" />
                    <div className="flex flex-col gap-y-4 justify-start items-center h-[82px] ">
                      <Image
                        src={LeafsIcon}
                        alt="Hypoallergenic"
                        width={32}
                        height={32}
                      />
                      <p className="w-[114px] text-center text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                        Paraben
                      </p>
                    </div>
                    <div className="w-[1px] h-[100%] bg-[#4E4B48] opacity-[0.05]" />
                    <div className="flex flex-col gap-y-4 justify-start items-center h-[82px]">
                      <Image
                        src={ChemicalIcon}
                        alt="Hypoallergenic"
                        width={32}
                        height={32}
                      />
                      <p className="w-[114px] text-center text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                        Custom Compounded
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:hidden xs:mt-[16px] md:mt-10">
                {[
                  "Instructions Apply to the affected area 2 to 3 times daily",
                ].map((text) => (
                  <div className="flex items-center" key={text}>
                    <div className="bg-black h-1.5 w-1.5 mr-2 rounded-full" />
                    <p className="text-[16px] leading-[19px] text-[#111111] tracking-[0.5px]">
                      {text}
                    </p>
                  </div>
                ))}
                <div className="mt-[210px] mb-[20px] xs:w-[100%] md:max-w-[358px]">
                  <Button>Continue</Button>
                </div>
              </div>
            </section>
          </AppMainLayout>
        )}
      </AppLayout>
    </div>
  );
};

export default FormulaDetail;
