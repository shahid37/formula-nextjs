import React, { FC } from "react";

import AppLayout from "../AppLayout/AppLayout";

interface FormulaLoadingProps {
  status?: string;
  text?: string;
}

const FormulaLoading: FC<FormulaLoadingProps> = ({
  text,
  status,
}: FormulaLoadingProps) => {
  return (
    <AppLayout showNaveLink={false}>
      <div className="flex items-center justify-center w-screen h-screen bg-off-white">
        <div className="flex flex-col items-center text-center w-96">
          <div className="relative">
            <div className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <h6 className="text-gray mt-7">{status}</h6>
          <h4 className="text-black mt-6">{text}</h4>
        </div>
      </div>
    </AppLayout>
  );
};

FormulaLoading.defaultProps = {};
export default FormulaLoading;
