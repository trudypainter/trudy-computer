import next from 'next';
import Link from 'next/dist/client/link';

export default function BackButton({ meta, nextProject }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-16 bg-yellow z-10 
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
          <div className="pl-6">{meta.title}</div>
          <div className="text-base hover:underline  h-full flex flex-col justify-center items-center">
            <Link className="hover:underline" href={nextProject.slug}>
              {'Next: ' + nextProject.title + '→'}
            </Link>
          </div>
        </div>
      </div>

      {/* PHONE */}
      <div className=" hidden phone:visible flex justify-between w-full">
        <div>Trudy Painter</div>
      </div>
    </div>
  );
}
