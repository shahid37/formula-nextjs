import React, { FC } from "react";

import AppLayout from "../AppLayout/AppLayout";
import Loader from "../Loader";

interface LoadingProps {
  status?: string;
  text?: string;
}

const Loading: FC<LoadingProps> = ({ text, status }: LoadingProps) => {
  return (
    <AppLayout showNaveLink={false}>
      <div className="flex items-center justify-center w-screen h-screen bg-off-white">
        <div className="flex flex-col items-center text-center w-[572px]">
          <div className="relative">
            <Loader />
          </div>
          <h6 className="text-gray mt-7">{status}</h6>
          <h4 className="text-black mt-6">{text}</h4>
        </div>
      </div>
    </AppLayout>
  );
};

Loading.defaultProps = {};
export default Loading;
