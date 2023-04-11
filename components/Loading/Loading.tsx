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
      <div className="flex items-center justify-center w-auto h-screen bg-off-white">
        <div className="flex flex-col items-center justify-center text-center md:max-w-[450px] lg:max-w-[470px] xl:max-w-[572px]">
          <div className="ml-[6px] relative">
            <Loader />
          </div>
          <h6 className="text-gray mt-7 text-[16px] leading-[19px] font-normal">
            {status}
          </h6>
          <h4 className="text-black mt-6 xs:text-[20px] xs:leading-[24px] lg:text-[20px] xl:text-[24px] leading-[29px]">
            {text}
          </h4>
        </div>
      </div>
    </AppLayout>
  );
};

Loading.defaultProps = {};
export default Loading;
