// components/Callout.js
import React from 'react';

const Hero = ({ children }) => (
  <div
    className="flex phone:flex-col space-x-8 
  phone:space-x-0 phone:space-y-4 "
  >
    <div
      className="flex flex-col p-0 pt-8 
    w-[20%]"
    >
      {children[0]}
    </div>
    <div className="p-0 w-[80%]">{children[1]}</div>
  </div>
);

export default Hero;
