import React, { FC, useCallback, useState, useEffect } from "react";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import FormulaProcessBar from "@/components/ProcessBar";

import {
  questions,
  QUESTION_TYPES,
  Question,
  createQuestionLoadingData,
} from "@/utils/constants";
import Selector from "@/components/Selector";

import usePersistentState from "@/hooks/usePersistentState";
import { useRouter } from "next/router";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

interface QuestionnairePageProps {
  text?: string;
}

const Container = ({ children, className }: any) => (
  <div
    className={`max-w-[1512px] xs:w-[91%] md:w-[84%] xl:w-[85%] mx-auto ${
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
    "currentQuestion",
    0
  );
  const [isCreateQuestion, setIsCreateQuestion] = usePersistentState(
    "isCreateQuestion",
    false
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<Question>>([...questions]);
  const [createQuestionLoadingIndex, setCreateQuestionLoadingIndex] =
    useState(0);
  const [state, setState] = useState(0);

  useEffect(() => {
    if (currentQuestion > 0) {
      setState(currentQuestion);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (questions) {
      const _data = questions;
      _data.forEach((element, index) => {
        _data[index] = { ...element, answers: null };
      });
      setData(_data);
    }
  }, [questions]);

  const handleSetInterval = () => {
    var localStorageData = localStorage.getItem("questionData");
    if (localStorageData && Array.isArray(JSON.parse(localStorageData))) {
      const localDataArray = JSON.parse(localStorageData);
      localDataArray[state].answers = data[state].answers;
      localStorage.setItem("questionData", JSON.stringify(localDataArray));
    } else {
      localStorage.setItem("questionData", JSON.stringify([...data]));
    }
    data[state].loading = false;
    setData([...data]);
    setState(state + 1);
    setCurrentQuestion(state + 1);
  };

  const handleContinue = async () => {
    if (state < 14) {
      data[state].loading = true;
      setData([...data]);
      if (data[state].loadingText && data[state].loadingTextTitle) {
        setTimeout(handleSetInterval, 5000);
      } else {
        setTimeout(handleSetInterval, 1000);
      }
    } else {
      setIsCreateQuestion(true);
    }
  };

  const handleBack = () => {
    if (state > 0) {
      setState(state - 1);
      setCurrentQuestion(state - 1);
    }
  };

  const getValues = useCallback(
    (values: any) => {
      if (data?.length > 0) {
        data[state].answers = values;
        setData([...data]);
      }
    },
    [state]
  );

  const checkDisableButton = () => {
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

  const { ref: questionTxtToAnimate, inView: isQuestionTxtIsInView } =
    useInView({
      triggerOnce: true,
    });

  const { ref: headingTxtToAnimate, inView: isHeadingTxtIsInView } = useInView({
    triggerOnce: true,
  });

  const { ref: taglineToAnimate, inView: isTagLineIsInView } = useInView({
    triggerOnce: true,
  });

  const { ref: columnsToAnimate, inView: isColumnIsInView } = useInView({
    triggerOnce: true,
  });

  const { ref: buttonsToAnimate, inView: isButtonsIsInView } = useInView({
    triggerOnce: true,
  });

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

  useEffect(
    () => () => {
      setData([]);
    },
    []
  );

  if (!showChild) {
    return null;
  }

  if (data?.length === 0) {
    return (
      <section className="bg-[#FDF9F4]">
        <Container>
          <div className="flex flex-col text-whit">
            <Loading status={"Please Wait"} text={""} />
          </div>
        </Container>
      </section>
    );
  }

  if (isCreateQuestion) {
    return (
      <>
        <div className="flex flex-col text-whit pr-4 pl-4">
          {isCreateQuestion &&
            createQuestionLoadingData[createQuestionLoadingIndex]
              .loadingTextTitle && (
              <Loading
                status={
                  createQuestionLoadingData[createQuestionLoadingIndex]
                    .loadingTextTitle
                }
                notShowAnimation={true}
                text={
                  createQuestionLoadingData[createQuestionLoadingIndex]
                    .loadingText
                }
              />
            )}
        </div>
      </>
    );
  }

  if (data[state]?.loading && data[state].loadingTextTitle) {
    return (
      <section className="bg-[#FDF9F4]">
        <Container>
          <div className="flex flex-col text-whit">
            <Loading
              status={data[state].loadingTextTitle}
              text={data[state].loadingText}
            />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div className="xs:pt-[74px] md:pt-[64px] bg-[#FDF9F4]">
      <FormulaProcessBar
        currentQuestionNumber={state + 1}
        totalQuestions={15}
        className="fixed w-full top-0 left-0 right-0 pt-[48px] mt-[10px]"
      />
      <Container className="bg-brown xs:pt-[24px] md:pt-[100px] xl:pt-[122px] xs:pb-[32px] md:pb-[100px] xl:pb-[140px] 2xl:pb-[198px]">
        <div className="xs:max-w-[358px] xs:mr-auto xs:ml-0 md:ml-auto md:max-w-[400px] lg:max-w-[500px] mx-auto flex flex-col xs:justify-start md:justify-center xs:items-start md:items-center">
          <div
            ref={questionTxtToAnimate}
            className={`flex flex-row justify-center items-center gap-x-2 ${
              isQuestionTxtIsInView === true
                ? "opacity-100 addFadeUpAnimation"
                : "opacity-0"
            }`}
          >
            <Image
              src="/assets/icons/shield.svg"
              width={18}
              height={20}
              alt="Shield icon"
            />
            <p className="text-center font-normal	text-[#4E4B48] text-[16px] leading-[19px] tracking-[0.15px] font-inter">
              Question no. {state + 1}
            </p>
          </div>
          {isQuestionTxtIsInView && (
            <h3
              ref={headingTxtToAnimate}
              className={`xs:text-left md:text-center xs:mt-[27px] md:mt-[30px] lg:mt-[40px] xs:text-[32px] xs:leading-[39px] md:text-[28px] lg:text-[32px] leading-[38px] font-normal text-[#111111] ${
                isHeadingTxtIsInView === true
                  ? "opacity-100 addFadeUpAnimation"
                  : "opacity-0"
              }`}
            >
              {data[state]?.question}
            </h3>
          )}
          {isHeadingTxtIsInView &&
            data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
              <p
                ref={taglineToAnimate}
                className={`max-w-[358px] text-[14px] font-normal leading-[17px] font-inter xs:text-left md:text-center mt-2 opacity-60 text-[#111111] ${
                  isTagLineIsInView === true
                    ? "opacity-60 addFadeUpAnimation"
                    : "opacity-0"
                }`}
              >
                {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE
                  ? "(May choose more than one)"
                  : data[state]?.type === QUESTION_TYPES.RANGE
                  ? "On a scale of 0 to 5 with zero being no pain and 5 being the worst pain ever"
                  : null}
              </p>
            )}
        </div>

        {isTagLineIsInView && (
          <div
            ref={columnsToAnimate}
            className={`max-w-[1272px] mx-auto justify-center flex flex-row xs:mt-[24px] md:mt-[40px] ${
              isColumnIsInView === true
                ? "opacity-100 addFadeUpAnimation"
                : "opacity-0"
            }`}
          >
            {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
              <Selector
                type="multi"
                options={data[state]?.options}
                getValues={getValues}
                value={state}
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
        )}
        {isColumnIsInView && (
          <div
            ref={buttonsToAnimate}
            className={`xs:mt-auto md:mt-[60px] lg:mt-[104px] flex flex-row xs:gap-x-[16px] md:gap-x-[24px] justify-center items-center ${
              isButtonsIsInView === true
                ? "opacity-100 addFadeUpAnimation"
                : "opacity-0"
            }`}
          >
            <div className="xs:mt-[115px] md:mt-0 xs:w-[100%] md:w-[200px] text-center">
              <Button
                onClick={handleBack}
                backgroundColor="transparent"
                type="secondary"
                disable={state === 0}
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
        )}
      </Container>
    </div>
  );
};

QuestionnairePage.defaultProps = {
  text: "Creation of your customized pain formula is almost complete!",
};
export default QuestionnairePage;
