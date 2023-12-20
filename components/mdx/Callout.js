// components/Callout.js
import React from 'react';

const Callout = ({ children, link, text }) => (
  <div className=" py-1">
    <a className="hover:underline" href={link}>
      ↪ {text}
    </a>
  </div>
);

export default Callout;
