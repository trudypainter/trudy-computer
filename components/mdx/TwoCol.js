// components/Callout.js
import React from 'react';

const TwoCol = ({ children }) => (
  <div
    className="flex  relative space-x-8 
  phone:flex-col phone:space-x-0 phone:space-y-2"
  >
    <div
      className="flex flex-col pt-0 w-[20%] mt-0 
    phone:w-full phone:mt-2
    "
    >
      {children[0]}
    </div>
    <div
      className="p-0  w-[80%] 
    phone:w-full phone:pl-4
    "
    >
      {children.slice(1).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  </div>
);

export default TwoCol;
