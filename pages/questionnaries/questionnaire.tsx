import axios from "axios";
import { toast } from "react-toastify";
import React, { FC, useCallback, useState, useEffect } from "react";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import FormulaProcessBar from "@/components/ProcessBar";

import {
  questions,
  QUESTION_TYPES,
  BASE_URL,
  MAPPING,
  Question,
  createQuestionLoadingData,
} from "@/utils/constants";
import Selector from "@/components/Selector";

import usePersistentState from "@/hooks/usePersistentState";
import QuestionnaireContext from "@/context/QuestionnaireContext";
import { useRouter } from "next/router";
import Image from "next/image";

interface QuestionnairePageProps {
  text?: string;
}

const Container = ({ children, className }: any) => (
  <div
    className={`max-w-[1512px] xs:w-[91%] md:w-[84%] mx-auto ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const QuestionnairePage: FC<QuestionnairePageProps> = ({
  text,
}: QuestionnairePageProps) => {
  const router = useRouter();
    const [showChild, setShowChild] = useState(false);
   const [currentQuestion, setCurrentQuestion] = usePersistentState(
     "currentQuestion",0);
      const [isCreateQuestion, setIsCreateQuestion] = usePersistentState(
        "isCreateQuestion",
        false
      );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<Question>>(questions);
  const [createQuestionLoadingIndex, setCreateQuestionLoadingIndex] =
    useState(0);
  const [state, setState] = useState(0);

  useEffect(() => {
    if (currentQuestion > 0) {
      setState(currentQuestion);
    }
  }, [currentQuestion]);

  const handleSetInterval = () => {
    const _data = data;
    var localStorageData = localStorage.getItem("questionData");
    if(localStorageData && Array.isArray(JSON.parse(localStorageData))){
      const localDataArray = JSON.parse(localStorageData);
      localDataArray[state].answers = _data[state].answers;
      localStorage.setItem("questionData", JSON.stringify(localDataArray));
    } else {
      localStorage.setItem("questionData", JSON.stringify([..._data]));
    }
    _data[state].loading = false;
    setData([..._data]);
    setState(state + 1);
    setCurrentQuestion(state + 1);
  };

  const handleContinue = async () => {
    if (state < 14) {
      const _data = data;
      _data[state].loading = true;
      setData([..._data]);
      setTimeout(handleSetInterval, 1000);
    } else {
      setIsCreateQuestion(true);
    }
  };

  const handleBack = () => {
    setState(state - 1);
    setCurrentQuestion(state - 1);
  };

  const getValues = useCallback(
    (values: any) => {
      const _data = data;
      _data[state].answers = values;
      setData([..._data]);
    },
    [state]
  );

  const checkDisableButton = () => {
    console.log(data[state]?.answers, "data[state]?.answers");
    if (data[state]?.answers && Array.isArray(data[state]?.answers)) {
      if (data[state]?.answers.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    if (data[state]?.answers === "" || !data[state]?.answers) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setShowChild(true);
  }, []);

  const handleCreateQuestionSetInterval = () => {
    setCreateQuestionLoadingIndex(createQuestionLoadingIndex + 1);
  };

  const handleCreateQuestionLoading = () => {
    setTimeout(handleCreateQuestionSetInterval, 2000);
  };

  useEffect(() => {
    if (isCreateQuestion) {
      if (createQuestionLoadingIndex < createQuestionLoadingData.length) {
        handleCreateQuestionLoading();
      }
      if (createQuestionLoadingIndex === createQuestionLoadingData.length - 1) {
        router.push("/formula");
      }
    }
  }, [isCreateQuestion, createQuestionLoadingIndex]);

  if (!showChild) {
    return null;
  }

  if (isCreateQuestion) {
    return (
      <div className="flex flex-col text-whit">
        {isCreateQuestion &&
          createQuestionLoadingData[createQuestionLoadingIndex]
            .loadingTextTitle && (
            <Loading
              status={
                createQuestionLoadingData[createQuestionLoadingIndex]
                  .loadingTextTitle
              }
              text={
                createQuestionLoadingData[createQuestionLoadingIndex]
                  .loadingText
              }
            />
          )}
      </div>
    );
  }

  if (data[state]?.loading && data[state].loadingTextTitle) {
    return (
      <div className="flex flex-col text-whit">
        <Loading
          status={data[state].loadingTextTitle}
          text={data[state].loadingText}
        />
      </div>
    );
  }

  return (
    <div className="xs:pt-[74px] md:pt-[64px] bg-[#FDF9F4]">
      <FormulaProcessBar
        currentQuestionNumber={state + 1}
        totalQuestions={15}
        className="fixed w-full top-0 left-0 right-0 pt-[51px] mt-[10px]"
      />
      <Container className="xs:pt-[47px] md:pt-[100px] xl:pt-[122px] xs:pb-[32px] md:pb-[100px] xl:pb-[140px] 2xl:pb-[198px]">
        <div className="xs:max-w-[358px] xs:mr-auto xs:ml-0 md:ml-auto md:max-w-[400px] lg:max-w-[500px] mx-auto flex flex-col xs:justify-start md:justify-center xs:items-start md:items-center">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <Image
              src="/assets/icons/shield.svg"
              width={24}
              height={24}
              alt="Shield icon"
            />
            <p className="text-center text-[16px] leading-[19px] tracking-[0.15px]">
              Question no. {state + 1}
            </p>
          </div>
          <h3 className="xs:text-left md:text-center xs:mt-[26px] md:mt-[30px] lg:mt-[40px] xs:text-[32px] xs:leading-[39px] md:text-[28px] lg:text-[32px] leading-[38px] font-normal text-[#111111]">
            {data[state]?.question}
          </h3>
          <p className="max-w-[358px] xs:text-[14px] lg:text-[16px] xs:text-left md:text-center mt-2 opacity-60 text-[#111111]">
            {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE
              ? "(May choose more than one)"
              : data[state]?.type === QUESTION_TYPES.RANGE
              ? "On a scale of 0 to 5 with zero being no pain and 5 being the worst pain ever"
              : null}
          </p>
        </div>

        <div className="max-w-[1272px] mx-auto justify-center flex flex-row mt-[40px]">
          {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
            <Selector
              type="multi"
              options={data[state]?.options}
              getValues={getValues}
              value={state}
              data={data}
              id={data[state].id}
            />
          )}
          {data[state]?.type === QUESTION_TYPES.RANGE && (
            <Selector type="range" getValues={getValues} value={state} />
          )}
          {data[state]?.type === QUESTION_TYPES.INPUT && (
            <Selector type="input" getValues={getValues} value={state} />
          )}
          {data[state]?.type === QUESTION_TYPES.SINGLE_CHOICE && (
            <Selector
              type="single"
              options={data[state]?.options}
              getValues={getValues}
              value={state}
            />
          )}
        </div>
        <div className="xs:mt-auto md:mt-[60px] lg:mt-[104px] flex flex-row xs:gap-x-[16px] md:gap-x-[24px] justify-center items-center">
          <div className="xs:mt-[115px] md:mt-0 xs:w-[100%] md:w-[200px] text-center">
            <Button
              onClick={handleBack}
              backgroundColor="transparent"
              type="secondary"
            >
              Back
            </Button>
          </div>
          <div className="xs:mt-[115px] md:mt-0 xs:w-[100%] md:w-[200px] text-center">
            <Button disable={checkDisableButton()} onClick={handleContinue}>
              {state === 14 ? "Show my formula" : "Continue"}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

QuestionnairePage.defaultProps = {
  text: "Creation of your customized pain formula is almost complete!",
};
export default QuestionnairePage;
