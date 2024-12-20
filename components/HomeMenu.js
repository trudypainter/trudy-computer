import Link from 'next/dist/client/link';

export default function HomeMenu({ scrollPosition, windowHeight }) {
  function mapRange(value, in_min, in_max, out_min, out_max) {
    const val = Math.min(
      Math.round(
        ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      ),
      100
    ).toString();

    // Calculate the closest value in the step of 10 interval
    // For example, 23 is closest to 20 and 47 is closest to 50
    const closestVal = Math.round(val / 10) * 10;

    if (closestVal === 0) return 'text-opacity-10';
    return `text-opacity-${closestVal}`;
  }

  console.log('⭐️scrollPosition', scrollPosition);
  console.log('windowHeight', (windowHeight * 3) / 4);
  console.log(
    'diff',
    Math.max((window.innerHeight * 3) / 4 - scrollPosition, 1)
  );
  console.log(
    mapRange((window.innerHeight * 3) / 4 - scrollPosition, 64, 0, 0, 100)
  );

  return (
    <div
      className="fixed top-0 left-0 w-full bg-yellow z-30 phone:h-10
       bg-white text-2xl flex text-gray-500
      items-center justify-center p-4 px-16 phone:px-4"
    >
      {/* DESKTOP */}
      <div
        className={`w-screen flex justify-between items-center 
        p-  phone:hidden  
        ${mapRange(
          (window.innerHeight * 1) / 2 - scrollPosition,
          64,
          0,
          0,
          100
        )}
        `}
      >
        <Link className="w-[20%] phone:w-fit" href="/">
          Trudy Painter
        </Link>
        <div className="w-[80%] flex justify-end">
          <div
            className="text-base hover:underline  h-full flex 
          flex-col items-center justify-between"
          >
            <Link className="hover:underline" href={'/about'}>
              About
            </Link>
          </div>
        </div>
      </div>

      {/* PHONE */}
      <div
        className="block md:hidden text-lg flex 
      justify-between w-full p-4 text-gray-500 p-0"
      >
        <a href="/">Trudy Painter</a>
        <a className="hover:underline " href={'/about'}>
          About
        </a>
      </div>
    </div>
  );
}
