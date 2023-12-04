import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  return (
    <div class="px-4 mt-24 mx-auto py-8 bg-gray-100 border-black border-b">
      {/* <div>
        Built by me. Inspired by{' '}
        <a className="underline" target="_blank" href="https://gossipsweb.net/">
          Gossip's Web
        </a>
        .
      </div> */}

      <div className="text-sm  max-w-[600px]">
        <div className="italic">
          Prior to the preeminence of sticks, swords and the Hero's long, hard,
          killing tools, our ancestors' greatest invention was the container:
          the basket of wild oats, the medicine bundle, the net made of your own
          hair, the home, the shrine, the place that contains whatever is
          sacred.
        </div>
        <div className="mt-4">
          - Ursula K. Le Guin in "The Carrier Bag Theory of Fiction"
        </div>
      </div>
    </div>
  );
}
