import React, { FC } from "react";
import { ProcessLevelType } from ".";

import ProcessBar from "./images/ProcessBar";

interface FormulaProcessBarProps {
  level?: ProcessLevelType; // process levels should be between 1 to 15 levels
}

let hash = new Map();
for (let i = 1; i <= 15; i++) {
  hash.set(`${i}`, i * 100);
}

const FormulaProcessBar: FC<FormulaProcessBarProps> = ({
  level = "1",
}: FormulaProcessBarProps) => {
  const barLevel = hash.get(level);

  return (
    <div className="w-full flex items-center justify-center">
      <ProcessBar level={barLevel} />
    </div>
  );
};

FormulaProcessBar.defaultProps = {};

export default FormulaProcessBar;
