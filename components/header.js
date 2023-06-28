import Link from 'next/link';
import { Bio } from './unused/bioWithDropDown';
import { MatterScene } from './unused/comp';
import { useState, useEffect } from 'react';

export function Header() {
  let bgGradient = 'bg-gradient-to-b from-[#78A7E5] to-[#93C3FD]';

  let colorList = ['#FEFF1F', '#FC5D42', '#FF3FB3', '#28ABE2', '7E51F5'];

  const [nameColor, setNameColor] = useState('white');
  const [moreColor, setMoreColor] = useState('white');

  // on hover, change the nameColor to a random color from the colorList
  const handleNameHover = () => {
    // decrease index of color by 1
    let nameColorIndex = colorList.indexOf(nameColor) - 1;

    // if the index is less than 0, reset to the last index of the colorList
    if (nameColorIndex < 0) {
      nameColorIndex = colorList.length - 1;
    }
    let randomColor = colorList[nameColorIndex];

    setNameColor(randomColor);
  };

  // on hover, change the moreColor to a random color from the colorList
  const handleMoreHover = () => {
    // increase index of color by 1
    let moreColorIndex = colorList.indexOf(moreColor) + 1;
    // if the index is greater than the length of the colorList, reset to 0
    if (moreColorIndex > colorList.length - 1) {
      moreColorIndex = 0;
    }
    let randomColor = colorList[moreColorIndex];

    setMoreColor(randomColor);
  };

  return (
    <div
      class="px-8 py-16  bg-lightergreen
      border-black -md:border-b "
    >
      <div className=" justify-between ">
        <div>
          <p className="text-2xl my-4 lg:max-w-[50vw]">
            <span
              onMouseEnter={() => handleNameHover()}
              style={{
                backgroundColor: nameColor,
              }}
              className={` px-2 py-1 hover:cursor-pointer`}
            >
              Trudy Painter
            </span>{' '}
            is a software developer at{' '}
            <a
              className="underline"
              href="https://experiments.withgoogle.com/"
              target="_blank"
            >
              Google Creative Lab
            </a>{' '}
            in New York City and recent graduate of MIT.
          </p>

          <p className="text-2xl my-4 mb-8 lg:max-w-[50vw]">
            She builds AI tools that feel more like a copilot than an autopilot.
          </p>
        </div>

        <div className="w-full lg:w-1/2 flex ">
          <div
            style={{
              backgroundColor: moreColor,
              borderColor: moreColor,
            }}
            onMouseEnter={() => handleMoreHover()}
            className={`hover:cursor-pointer  px-2 py-1 flex items-center justify-center -sm:mx-auto`}
          >
            <Link href="/about">More About Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
