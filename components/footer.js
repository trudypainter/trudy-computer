import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  return (
    <div class="px-8 mx-auto py-8 bg-bottomsky border-black border-b">
      Built by me. Inspired by{' '}
      <a className="underline" target="_blank" href="https://gossipsweb.net/">
        Gossip's Web
      </a>
      .
    </div>
  );
}
