import React, { FC } from "react";

import ProcessBarImage from "./images/ProcessBar";

interface ProcessBarProps {
  totalQuestions: number;
  currentQuestionNumber: number;
}

const ProcessBar: FC<ProcessBarProps> = ({
  totalQuestions,
  currentQuestionNumber,
}: ProcessBarProps) => {
  let barSize = 100 / totalQuestions;

  let hash = new Map();

  for (let i = 1; i <= totalQuestions; i++) {
    hash.set(i, barSize * i);
  }

  const barLevel = hash.get(currentQuestionNumber);

  return (
    <div className="w-full flex items-center justify-center">
      <ProcessBarImage level={barLevel} />
    </div>
  );
};

ProcessBar.defaultProps = {};

export default ProcessBar;
