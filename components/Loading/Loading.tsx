import React, { FC, useState, useEffect } from "react";

import AppLayout from "../AppLayout/AppLayout";
import Loader from "../Loader";

interface LoadingProps {
  status?: string;
  text?: string;
  notShowAnimation?: boolean;
}

const Loading: FC<LoadingProps> = ({ text, status,notShowAnimation }: LoadingProps) => {
  const [dotSizes, setDotSizes] = useState([5, 5, 5, 5, 5]);
  const [greenIndex, setGreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotSizes((sizes) => {
        const newSizes = [...sizes];
        if (greenIndex >= 5) {
          setGreenIndex(0);
        } else {
          newSizes[greenIndex] = 10;
          setGreenIndex(greenIndex + 1);
        }
        return newSizes;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [greenIndex]);

  return (
    <AppLayout showNaveLink={false}>
      <div className="flex items-center justify-center w-auto h-screen bg-off-white">
        <div className="flex flex-col items-center justify-center text-center md:max-w-[450px] lg:max-w-[470px] xl:max-w-[572px]">
          <div className="ml-[6px] relative">
            {/* <Loader /> */}
            {!notShowAnimation &&
            <div className="loading-container">
              {dotSizes.map((size, index) => (
                <span
                  key={index}
                  className={`dot ${index === greenIndex ? "green" : ""}`}
                  style={{ width: `${size}px`, height: `${size}px` }}
                ></span>
              ))}
            </div>}
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
