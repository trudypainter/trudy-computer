import Link from 'next/link';
import FindMe from '../components/FindMe';
import dynamic from 'next/dynamic';
import React, { useRef, useEffect, useState } from 'react';

const P5Background = dynamic(() => import('./pfive'), {
  ssr: false,
});

export function Header({ scrollPosition }) {
  const headerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setHeight(headerRef.current.offsetHeight);
      setWindowWidth(window.innerWidth);
    }

    // Initial height and width calculation
    handleResize();

    // Add event listener for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-1/2" ref={headerRef}>
      {/* <P5Background
        height={height}
        windowWidth={windowWidth}
        scrollPosition={scrollPosition}
      /> */}

      <div className="absolute top-0 left-0 w-full h-3/4 bg-[black] z-0"></div>

      <div
        className="text-2xl p-16 phone:p-8 phone:text-xl  
        border-b-[1px] border-black 
        flex flex-col justify-center h-1/2
        absolute top-0 left-0 w-full z-30 "
      >
        <div className="max-w-[1000px] mx-auto text-white">
          <div>
            <span className="">Trudy Painter</span> is a creative technologist
            at Google Creative Lab in New York City and recent graduate of MIT.
            <br></br>
            <br></br>
            She designs and builds prototypes to make AI models more
            approachable to everyone.{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
