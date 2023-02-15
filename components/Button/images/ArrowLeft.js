import React from 'react';

// NPM build currently does not support SVG markup import, so we need to create a component

const ArrowLeft = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49085 15.2083L3.125 10M3.125 10L8.49085 4.79168M3.125 10L16.875 10"
        stroke="#22252D"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
