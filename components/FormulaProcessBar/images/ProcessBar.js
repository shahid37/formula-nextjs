import React from "react";

const ProcessBar = ({ level }) => {
  return (
    <svg
      className="w-full"
      height="8"
      viewBox="0 0 1500 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1500" height="8" fill="white" />
      <rect width={level} height="8" fill="#A1CD5D" />
    </svg>
  );
};

export default ProcessBar;
