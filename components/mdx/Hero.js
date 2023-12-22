// components/Callout.js
import React from 'react';

const Hero = ({ children }) => (
  <div
    className="flex phone:flex-col space-x-8 
  phone:space-x-0 phone:space-y-4 "
  >
    <div
      className="flex flex-col p-0 pt-6 
    w-[20%] phone:w-full phone:pt-2"
    >
      {children[0]}
    </div>
    <div className="p-0 w-[80%] phone:w-full phone:pl-0">
      {children.slice(1).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  </div>
);

export default Hero;
