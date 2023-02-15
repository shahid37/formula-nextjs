import React from 'react';

// NPM build currently does not support SVG markup import, so we need to create a component

const ArrowRight = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5091 4.79166L16.875 9.99999M16.875 9.99999L11.5091 15.2083M16.875 9.99999L3.125 9.99999"
        stroke="#22252D"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
