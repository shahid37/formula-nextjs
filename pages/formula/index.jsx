import React, { useEffect, useState } from "react";
import Image from "next/image";

import AppLayout from "../../components/AppLayout/AppLayout";
import DetailCardProps from "../../components/DetailCard";
import Button from "../../components/Button";
import Loader from "../../components/Loader";

import DogIcon from "../../public/assets/icons/dog.svg";
import usePersistentState from "@/hooks/usePersistentState";
import LeafsIcon from "../../public/assets/icons/leafs.svg";
import ChemicalIcon from "../../public/assets/icons/chemical.svg";

import { BASE_URL, MAPPING, FORMULA_CREATA_API } from "../../utils/constants";
import axios from "axios";

const FormulaDetail = () => {
  const [questionnaireData, setQuestionnaireData] = usePersistentState(
    "questionnaireData",
    []
  );
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(questionnaireData, "questionnaireData");

  const commonClassNames = "py-4 xs:px-2 md:px-[120px]";

  const createFormula = async () => {
    setLoading(true);
    let url = BASE_URL + FORMULA_CREATA_API;
    const _data = {
      user_id: -1,
      answers: {
        pain_types: questionnaireData[0]?.answers,
        pain_locations: questionnaireData[1].answers,
        pain_radiation: false,
        pain_factors: [questionnaireData[3].answers],
        pain_relievers: [questionnaireData[4].answers],
        pain_current_severity: MAPPING[questionnaireData[5].answers],
        pain_worst_severity: MAPPING[questionnaireData[6].answers],
        pain_least_severity: MAPPING[questionnaireData[7].answers],
        pain_consistency: MAPPING[questionnaireData[8].answers],
        pain_duration: MAPPING[questionnaireData[9].answers],
        pain_medications: [questionnaireData[10].answers],
        allergies: [questionnaireData[11].answers],
        surgeries: MAPPING[questionnaireData[12].answers],
        general_medications: [questionnaireData[13].answers],
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
  };

  useEffect(() => {
    if (questionnaireData) {
      createFormula();
    }
  }, [questionnaireData]);

  console.log(data, "RESSSSSSSSSSs");

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
    <div className="relative">
      <AppLayout>
        {loading ? (
          <div className="absolute w-full h-screen z-10 bg-off-white bg-opacity-50">
            <Loader />
          </div>
        ) : (
          <>
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
                    {"Edward Mike -" +
                      data?.ingredients.map((item, i) =>
                        i === data?.ingredients.length - 1
                          ? `and ${item.ingredient.name} `
                          : ` ${item.ingredient.name}`
                      ) +
                      "A provider will review your responses and information and determine if this formula is best suited for you."}
                  </p>
                  <li className="mt-4 text-[16px] leading-[19px] font-medium text-black tracking-[0.5px]">
                    Instructions Apply to the affected area 2 to 3 times daily
                  </li>
                  <div className="mt-10 max-w-[358px]">
                    <Button>Continue</Button>
                  </div>
                </div>
                <div>
                  <div className="max-w-[408px] flex flex-col justify-between bg-off-white rounded-[8px] p-4">
                    {data?.ingredients.map((item, i) => (
                      <div className="mb-3" key={i}>
                        <div className="flex flex-col gap-y-1">
                          <h3 className="text-[16px] leading-[19.36px] tracking-[0.15px] text-black">
                            {item.ingredient.name}
                          </h3>
                          <p className="text-[14px] leading-[16.94px] tracking-[0.25px] opacity-75 text-black">
                            {item.ingredient.description}
                          </p>
                        </div>
                        {i < _data.length - 1 && (
                          <div className="h-[1px] w-full bg-[#4E4B48] opacity-[0.05]" />
                        )}
                      </div>
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
                      <p className="w-[114px] text-center text-[14px] leading-[16.94px] tracking-[0.25px] font-normal">
                        Hypoallergenic
                      </p>
                    </div>
                    <div className="w-[1px] h-[100%] bg-[#4E4B48] opacity-[0.05]" />
                    <div className="flex flex-col gap-y-4 justify-center items-center h-[82px]">
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
                    <div className="flex flex-col gap-y-4 justify-center items-center h-[82px]">
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
            </section>
          </>
        )}
      </AppLayout>
    </div>
  );
};

export default FormulaDetail;
