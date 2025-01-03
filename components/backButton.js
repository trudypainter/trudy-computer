import next from 'next';
import Link from 'next/dist/client/link';

export default function BackButton({ meta, nextProject }) {
  let title = '';

  if (nextProject) {
    title = 'Next: ' + nextProject.title + '→';
  }

  return (
    <div
      className="fixed top-0 left-0 w-full p-0 text-gray-900 
      z-10 
      tablet:h-10 py-0 h-16
 text-2xl flex items-center justify-center"
    >
      {/* DESKTOP */}
      <div
        className={`w-screen flex justify-between px-16
        mx-auto space-x-0 tablet:hidden text-gray-500
        ${nextProject || title ? 'bg-white h-full' : ''}`}
      >
        <div className=" w-[calc(50vw-500px)]  flex justify-start items-center">
          <Link className=" " href="/">
            Trudy Painter
          </Link>
        </div>
        <div className="flex-shrink-0 w-[1000px] flex items-center justify-start pl-4">
          {meta && meta.title}
        </div>
        <div
          className="text-base w-[calc(50vw-500px)] 
         hover:underline  h-full flex  justify-end items-center"
        >
          <Link
            className="hover:underline"
            href={nextProject ? nextProject.slug : '/'}
          >
            {title}
          </Link>
        </div>
      </div>

      {/* tablet */}
      <div
        className="hidden  bg-white w-0 text-lg  p-4
        tablet:block  tablet:w-full
       "
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" w-auto text-gray-500">
          <Link href="/">Trudy Painter</Link>
        </div>

        <div className=" w-auto text-right text-gray-500">
          {meta && meta.title}
        </div>
      </div>
      {nextProject && (
        <div
          className="hidden -tablet:block fixed bottom-0 
          left-0 w-screen h-16 bg-white z-10 tablet:h-10
          text-base text-gray-500 
          flex items-center justify-end px-4 py-2 "
        >
          <Link className="hover:underline " href={nextProject.slug}>
            {title}
          </Link>
        </div>
      )}
    </div>
  );
}
