import next from 'next';
import Link from 'next/dist/client/link';

export default function BackButton({ meta, nextProject }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-16 bg-yellow z-10 phone:h-10
      border-b-[1px] border-black bg-[yellow] text-2xl flex items-center justify-center"
    >
      {/* DESKTOP */}
      <div
        className="w-[1000px] flex justify-between 
        mx-auto space-x-8 phone:hidden"
      >
        <Link className="w-[20%] phone:w-fit" href="/">
          Trudy Painter
        </Link>
        <div className="w-[80%] flex justify-between">
          <div className="pl-6">{meta && meta.title}</div>
          <div className="text-base hover:underline  h-full flex flex-col justify-center items-center">
            <Link
              className="hover:underline"
              href={nextProject ? nextProject.slug : '/'}
            >
              <>{nextProject && 'Next: ' + nextProject.title + '→'}</>
            </Link>
          </div>
        </div>
      </div>

      {/* PHONE */}
      <div className="block md:hidden text-lg flex justify-between w-full p-4">
        <Link href="/">Trudy Painter</Link>
        <div>{meta && meta.title}</div>
      </div>
      <div
        className="md:hidden fixed bottom-0 left-0 w-full h-16 bg-yellow z-10 phone:h-10
      border-t-[1px] border-black bg-[yellow] text-lg flex items-center justify-end p-2"
      >
        <Link
          className="hover:underline "
          href={nextProject ? nextProject.slug : '/'}
        >
          <>{nextProject && 'Next: ' + nextProject.title + '→'}</>
        </Link>
      </div>
    </div>
  );
}
