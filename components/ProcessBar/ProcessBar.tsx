import React, { FC } from "react";

import ProcessBarImage from "./images/ProcessBar";

interface ProcessBarProps {
  totalQuestions: number;
  currentQuestionNumber: number;
  className: string;
}

const ProcessBar: FC<ProcessBarProps> = ({
  totalQuestions,
  currentQuestionNumber,
  className,
}: ProcessBarProps) => {
  let barSize = 100 / totalQuestions;

  let hash = new Map();

  for (let i = 1; i <= totalQuestions; i++) {
    hash.set(i, barSize * i);
  }

  const barLevel = hash.get(currentQuestionNumber);

  return (
    <div
      className={`w-full flex items-center justify-center ${className ?? ""}`}
    >
      <ProcessBarImage level={barLevel} />
    </div>
  );
};

ProcessBar.defaultProps = {};

export default ProcessBar;
