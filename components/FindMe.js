import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FindMe() {
  const textColor = 'text-gray-500 hover:underline';

  return (
    <div className="relative mt-8  text-base w-[250px] h-[250px] ml-48 phone:mx-auto">
      {/* SVG of a four quadrant graph with arrows on the axis */}

      <svg
        className="absolute top-0 left-0 visible"
        width="100%"
        height="100%"
        viewBox="0 0 250 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="125"
          y1="0"
          x2="125"
          y2="250"
          stroke="black"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="125"
          x2="250"
          y2="125"
          stroke="black"
          strokeWidth="1"
        />
      </svg>

      <a
        className={`absolute top-[2px] left-[22px] ${textColor} hover:no-${textColor}`}
        target="blank"
        href="https://www.are.na/trudy-painter"
      >
        Are.na
      </a>

      <a
        className={`absolute top-[138px] right-[150px] ${textColor} hover:no-${textColor}`}
        target="blank"
        href="https://open.spotify.com/user/trudypaintet?si=ZlW6diDKSl61x9oKhit5BA"
      >
        Spotify
      </a>

      <a
        className={`absolute top-[50px] right-[134px] ${textColor} hover:no-${textColor}`}
        target="blank"
        href="https://github.com/trudypainter"
      >
        Github
      </a>

      <a
        className={`absolute top-[100px] left-[2px] ${textColor} hover:no-${textColor}`}
        target="blank"
        href="https://vsco.co/bionicpinkytoe/gallery"
      >
        VSCO
      </a>

      <a
        className={`absolute bottom-[90px] right-[22px] ${textColor} hover:no-${textColor}`}
        target="blank"
        href="https://www.linkedin.com/in/trudy-painter/"
      >
        LinkedIn
      </a>

      <a
        className={`absolute top-[80px] right-[4px] ${textColor}`}
        target="blank"
        href="TrudyPainter_Resume.pdf"
      >
        Resume
      </a>
      <a
        className={`absolute bottom-[10px] right-[4px] ${textColor}`}
        target="_blank"
        href="https://docs.google.com/spreadsheets/d/1pBokIjBV7lxDYNxqqxfLrNb7h3h4GuhWSbrrTGd9Fho/edit#gid=0"
      >
        Full CV
      </a>

      <div className="absolute px-2 bg-white right-[250px]  top-[112px]">
        Personal
      </div>
      <div className="absolute px-2 bg-white left-[240px]  top-[112px]">
        Professional
      </div>
      <div className="absolute w-full text-center bg-white py-2  bottom-[250px]">
        Essential
      </div>
      <div className="absolute w-full text-center bg-white py-2  top-[250px]">
        Peripheral
      </div>
    </div>
  );
}
