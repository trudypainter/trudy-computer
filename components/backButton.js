import Link from 'next/dist/client/link';

export default function BackButton() {
  return (
    <div className="fixed top-6 left-0">
      <Link href="/">
        <a className="px-4 ml-2 py-4  md:px-8 border-2 hover:bg-funyellow border-black bg-white text-black z-80 ">
          Home
        </a>
      </Link>
    </div>
  );
}
