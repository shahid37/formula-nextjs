import React from "react";

const ProcessBar = ({ level }) => {
  return (
    <svg
      height="8"
      width={"100%"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="8" fill="white" />
      <rect width={`${level}%`} height="8" fill="#A1CD5D" />
    </svg>
  );
};

export default ProcessBar;
