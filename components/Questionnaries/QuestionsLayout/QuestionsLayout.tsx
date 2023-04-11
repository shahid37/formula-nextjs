import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import FormulaProcessBar from "../../ProcessBar/ProcessBar";
import Navbar from "../../../components/Navbar/Navbar";
import Button from "../../../components/Button/Button";

import Shield from "./images/Shield";

interface QuestionsLayoutProps {
  totalQuestions: number;
  questionNumber: number;
  question?: string;
  description?: string;
  hasCompleted?: boolean;
  children?: ReactNode;
  backBtnAction?: () => {} | void;
  continueBtnAction?: () => {} | void;
  formulaBtnAction?: () => {} | void;
}

const QuestionsLayout: FC<QuestionsLayoutProps> = ({
  question,
  questionNumber,
  totalQuestions,
  description,
  hasCompleted,
  children,
  backBtnAction,
  continueBtnAction,
  formulaBtnAction,
}: QuestionsLayoutProps) => {
  const commonClassNames = "flex items-center";

  return (
    <div className="bg-off-white h-screen">
      <Navbar showLink={false} />
      <FormulaProcessBar
        totalQuestions={totalQuestions}
        currentQuestionNumber={questionNumber}
        className={""}
      />
      <div className={classNames(commonClassNames, "flex-col px-28 pt-32")}>
        <div className={classNames(commonClassNames)}>
          <Shield />
          <h6 className="ml-3 text-gray">Question no. {questionNumber}</h6>
        </div>
        <h3 className="mt-11">{question}</h3>
        {description && (
          <p className="mt-2 text-gray text-sm font-normal">{description}</p>
        )}
        <div className="mt-10">{children}</div>
        <div className="flex gap-6">
          <div className="w-52">
            <Button type="secondary" onClick={backBtnAction}>
              back
            </Button>
          </div>
          {hasCompleted ? (
            <div className="w-52">
              <Button onClick={formulaBtnAction}>Show my formula</Button>
            </div>
          ) : (
            <div className="w-52">
              <Button onClick={continueBtnAction}>continue</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

QuestionsLayout.defaultProps = {
  question: "Describe your pain ",
  questionNumber: 1,
  totalQuestions: 15,
  description: "(May choose more than one)",
};
export default QuestionsLayout;
