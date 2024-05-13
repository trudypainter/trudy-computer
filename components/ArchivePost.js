import Link from 'next/link';
import { useEffect, useState } from 'react';

export function ArchivePost(props) {
  let p = props.post;

  const borderDiv = 'border-b-[1px] border-gray-400 pb-4';

  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhone(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <a
      key={p.slug}
      href={p.slug}
      className={`flex h-48 w-full space-x-4 bg-gray-100 
      hover:bg-gray-200
      rounded-md p-4
      phone:flex-col phone:space-x-0 phone:space-y-0 
      phone:h-auto phone:w-full phone:p-4
    `}
    >
      <div className={`flex-shrink-0 phone:border-0 `}>
        {p.image && (
          <a href={p.slug}>
            <img
              src={p.image}
              loading="lazy"
              className="h-full w-64 object-cover bg-gray-50
              rounded-md
              phone:w-full phone:border-[1px] 
              phone:object-cover phone:h-64 
              "
            />
          </a>
        )}
      </div>

      <div
        className={`flex flex-col justify-between flex-grow  
        phone:border-0 phone:justify-start phone:space-y-1 phone:pb-0`}
      >
        {isPhone && (
          <div className="flex justify-between mt-2 phone:py-0">
            <div className="text-xl phone:text-base">{p.title}</div>
          </div>
        )}
        <div>
          <div
            className={`flex justify-between w-full flex-shrink-0 
        phone:invisible phone:h-0 phone:w-0
        `}
          >
            <div className="text-lg text-gray-900 phone:text-base">
              {p.title
                .split(' ')
                .map((word) =>
                  ['VSCO', 'LLM', 'MIT'].includes(word.toUpperCase())
                    ? word
                    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(' ')}
            </div>
          </div>

          <div className="leading-snug text-lg text-gray-500 phone:text-base">
            {p.description}
          </div>
        </div>
        <div className="flex flex-wrap leading-snug phone:text-sm">
          <span
            className="bg-transparent border-[1px] text-gray-500
            border-gray-400 px-1 rounded-md mr-1 mt-1"
          >
            {p.location}
          </span>
          <span
            className="bg-transparent border-[1px] text-gray-500
            border-gray-400 px-1 rounded-md mr-1 mt-1"
          >
            {p.year}
          </span>
          {p.tags.split(', ').map((elm) => (
            <span
              className="bg-transparent border-[1px] text-gray-500
            border-gray-400 px-1 rounded-md mr-1 mt-1 m"
            >
              {elm}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
