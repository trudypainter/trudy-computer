// components/Callout.js
import React from 'react';

const TwoCol = ({ children }) => (
  <div className="flex relative space-x-8 ">
    <div className="flex flex-col pt-0 w-[20%] mt-0 ">{children[0]}</div>
    <div className="p-0  w-[80%]">
      {children.slice(1).map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </div>
  </div>
);

export default TwoCol;
