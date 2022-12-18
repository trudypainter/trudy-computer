import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

const Scroller = (props) => {
  let data = `Website Views:  |  Songs Listened to Today:  |  Boston's Current Weather: `;

  const [scrollerInfo, updateScrollerInfo] = useState(
    [data, data, data].join('  | ') + '  |  '
  );
  const [scrollSpeed, updateScrollSpeed] = useState(10);

  useEffect(() => {
    if (window.innerWidth < 800) {
      updateScrollSpeed(3);
      console.log(window.innerWidth);
    }

    fetch('/api/scroller')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        updateScrollerInfo(response.data);
      });
  }, []);

  return (
    <div className="bg-white sticky top-0 z-50  h-7 text-sm flex justify-center border-black border-b">
      <Marquee
        gradientWidth="0"
        gradient="false"
        pauseOnHover="true"
        speed={scrollSpeed}
      >
        {scrollerInfo}
      </Marquee>
    </div>
  );
};

export default Scroller;
