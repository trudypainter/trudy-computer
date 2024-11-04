import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  return (
    <div class="px-4 mt-0 mx-auto py-18 pb-32 ">
      {/* <div>
        Built by me. Inspired by{' '}
        <a className="underline" target="_blank" href="https://gossipsweb.net/">
          Gossip's Web
        </a>
        .
      </div> */}

      <div className="text-sm bg-gray-100 text-gray-500 rounded-3xl p-8  max-w-[800px] mx-auto">
        Hey thanks for scrolling... if you made it this far we probably have
        some shared interests. Sincerely, send me an email{' '}
        <a className="underline" href="mailto:hello@trudy.computer">
          hello@trudy.computer
        </a>
        . Or check out my{' '}
        <a
          target="_blank"
          className="underline"
          href="https://are.na/trudy-painter"
        >
          Are.na
        </a>
        .
      </div>
    </div>
  );
}
