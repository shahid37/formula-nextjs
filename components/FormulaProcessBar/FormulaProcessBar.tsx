import React, { FC } from "react";

import ProcessBar from "./images/ProcessBar";

interface FormulaProcessBarProps {
  totalQuestions: number;
  currentQuestionNumber: number;
}

const FormulaProcessBar: FC<FormulaProcessBarProps> = ({
  totalQuestions,
  currentQuestionNumber,
}: FormulaProcessBarProps) => {
  let barSize = 100 / totalQuestions;

  let hash = new Map();

  for (let i = 1; i <= totalQuestions; i++) {
    hash.set(i, barSize * i);
  }
  console.log("barSize", barSize);
  console.log("hash", hash);

  const barLevel = hash.get(currentQuestionNumber);

  return (
    <div className="w-full flex items-center justify-center">
      <ProcessBar level={barLevel} />
    </div>
  );
};

FormulaProcessBar.defaultProps = {};

export default FormulaProcessBar;
