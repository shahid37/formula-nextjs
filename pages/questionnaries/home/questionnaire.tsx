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
} from "@/utils/constants";
import Selector from "@/components/Selector";

import { FORMULA_CREATA_API } from "../constant";
import usePersistentState from "@/hooks/usePersistentState";
import QuestionnaireContext from "@/context/QuestionnaireContext";


interface QuestionnairePageProps {
  text?: string;
}

const QuestionnairePage: FC<QuestionnairePageProps> = ({
  text,
}: QuestionnairePageProps) => {
   const [questionnaireData, setQuestionnaireData] = usePersistentState("questionnaireData",[]);
   const [currentQuestion, setCurrentQuestion] = usePersistentState(
     "currentQuestion",-1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<Question>>(questions);
  const [state, setState] = useState(0);

  useEffect(() => {
    if (questionnaireData?.length > 0) {
      setData(questionnaireData);
    }
    if(currentQuestion > -1){
    setState(currentQuestion);
    }
  }, [questionnaireData, setCurrentQuestion]);

   const handleSetInterval = () => {
    const _data = data;
    _data[state].loading = false;
    setData([..._data]);
    setState(state + 1);
    setQuestionnaireData([..._data]);
    setCurrentQuestion(state + 1);
  };

  const handleContinue = async () => {
    if(state < 14){
    const _data = data;
    _data[state].loading = true;
    setData( [..._data] );
    setTimeout(handleSetInterval, 1000);
    }else{
        setLoading(true);
        let url = BASE_URL + FORMULA_CREATA_API;
        const _data = {
          user_id: -1,
          answers: {
            pain_types: data[0]?.answers,
            pain_locations: data[1].answers,
            pain_radiation: false,
            pain_factors: [data[3].answers],
            pain_relievers: [data[4].answers],
            pain_current_severity: MAPPING[data[5].answers],
            pain_worst_severity: MAPPING[data[6].answers],
            pain_least_severity: MAPPING[data[7].answers],
            pain_consistency: MAPPING[data[8].answers],
            pain_duration: MAPPING[data[9].answers],
            pain_medications: [data[10].answers],
            allergies: [data[11].answers],
            surgeries: [data[12].answers],
            general_medications: [data[13].answers],
          },
          type: "pain",
          formula_id: -1,
        };
        setQuestionnaireData(_data);
        await axios
          .post(url, _data)
          .then((res) => {
            setLoading(false);
          })
          .catch((error) => {
            setLoading(false);
            console.log("error", error);
            toast.error(`${error?.response?.data}`);
          });
    }
  };

 

  const handleBack = () => {
    setState(state - 1);
    setCurrentQuestion(state + 1);
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
    if (data[state]?.answers && Array.isArray(data[state]?.answers)) {
      if (data[state]?.answers.length === 0) {
        return true;
      } else {
        return false;
      }
    } if(data[state]?.answers === ''){
      return true;
    }else{
      return false;
    }
  };

  console.log(data, "CHECKINGGGGG111",state);
   console.log(questionnaireData, "questionnaireData");

  


  return (
    <div>
      <div className="flex flex-col text-whit">
        {data[state]?.loading && data[state].loadingTextTitle ? (
          <Loading
            status={data[state].loadingTextTitle}
            text={data[state].loadingText}
          />
        ) : (
          <>
            <div className="mt-[64px]">
              <FormulaProcessBar
                currentQuestionNumber={state + 1}
                totalQuestions={15}
              />
            </div>
            <h1 className="text-center text-black mt-[120px] font-normal text-base">
              Question no. {state + 1}
            </h1>
            <div className="w-full text-center flex items-center justify-center ">
              <div className="w-[500px]">
                <h1 className="text-center text-black mt-[45px] font-normal text-3xl">
                  {data[state]?.question}
                </h1>
                {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
                  <h1 className="text-center text-black mt-2 font-normal text-base">
                    (May choose more than one)
                  </h1>
                )}
                {data[state]?.type === QUESTION_TYPES.RANGE && (
                  <h1 className="text-center text-black mt-2 font-normal text-base">
                    (On a scale of 0 to 5 with zero being no pain and 5 being
                    the worst pain ever)
                  </h1>
                )}
              </div>
            </div>
            <div className="mx-32 mt-[40px]">
              {data[state]?.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
                <Selector
                  type="multi"
                  options={data[state]?.options}
                  getValues={getValues}
                  value={state}
                  data={data}
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
                  answers={data[state]?.answers}
                  getValues={getValues}
                  value={state}
                />
              )}
            </div>
            <div className="flex items-center justify-center mt-[104px]">
              <div className="w-[200px] text-center mr-[24px]">
                <Button
                  onClick={handleBack}
                  backgroundColor="white"
                  type="secondary"
                >
                  Back
                </Button>
              </div>
              <div className="w-[200px] text-center">
                <Button disable={checkDisableButton()} onClick={handleContinue}>
                  {state === 14 ? "Show my formula" : "Continue"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

QuestionnairePage.defaultProps = {
  text: "Creation of your customized pain formula is almost complete!",
};
export default QuestionnairePage;
