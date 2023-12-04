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
    <div
      key={p.slug}
      className={`flex h-48 w-full space-x-4 
      phone:flex-col phone:space-x-0 phone:space-y-0 
      phone:h-auto phone:w-full phone:p-2
    `}
    >
      <div
        className={`flex flex-col justify-between w-48 flex-shrink-0 ${borderDiv}
        phone:invisible phone:h-0 phone:w-0
        `}
      >
        <div className="text-xl">{p.title}</div>
        <div>
          [{p.location}, {p.year}]
        </div>
      </div>

      <div className={`flex-shrink-0 phone:border-0 ${borderDiv}`}>
        {p.image && (
          <a href={p.slug}>
            <img
              src={p.image}
              className="h-full w-64  object-cover bg-gray-50
              phone:w-full phone:border-[1px] phone:border-gray-400 
              phone:object-contain
              "
            />
          </a>
        )}
      </div>

      <div
        className={`flex flex-col justify-between flex-grow ${borderDiv} 
        phone:border-0 phone:justify-start phone:space-y-1 phone:pb-0`}
      >
        {isPhone && (
          <div className="flex justify-between">
            <div className="text-xl">{p.title}</div>
            <div>
              [{p.location}, {p.year}]
            </div>
          </div>
        )}
        <div className="leading-snug">{p.description}</div>
        <div className="flex flex-wrap leading-snug">
          {p.tags.split(', ').map((elm) => (
            <span className="bg-gray-100 px-1 rounded-md mr-1 mt-1">{elm}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
