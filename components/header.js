import Link from 'next/link';
import { Bio } from './bio';
import { MatterScene } from './comp';

export function Header() {
  let bgGradient = 'bg-gradient-to-b from-[#78A7E5] to-[#93C3FD]';
  return (
    <div
      class="p-8  bg-[#07FE7E]  mx-auto  
      border-black -md:border-b "
    >
      {/* <MatterScene /> */}
      <Bio />
    </div>
  );
}
