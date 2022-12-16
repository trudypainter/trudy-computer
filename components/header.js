import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [elsewhere, toggleElsewhere] = useState(false);

  return (
    <div class="px-8 mx-auto py-8 h-96 bg-blue-100 border-black border-b">
      <div class="w-[600px] max-w-full backdrop-opacity-40 bg-white/40">
        <p className="p-2">
          Trudy Painter is currently a senior at MIT and researcher at the{' '}
          <a
            className="underline"
            target="_blank"
            href="https://www.media.mit.edu/groups/viral-communications/overview/"
          >
            MIT Media Lab
          </a>
          . She focuses on developing AI tools to augment human workflows,
          rather than replace them. Examples of her recent work are{' '}
          <a className="underline" target="_blank" href="/meshup">
            Meshup
          </a>{' '}
          and{' '}
          <a className="underline" target="_blank" href="/latent-lab">
            Latent Lab
          </a>
          .
        </p>
        <p className="p-2">
          Next year, she is joining{' '}
          <a
            className="underline"
            href="https://experiments.withgoogle.com/search?q=google%20creative%20lab"
            target="_blank"
          >
            Google Creative Lab
          </a>{' '}
          in NYC as a creative technologist.
        </p>

        <p className="p-2">
          Say{' '}
          <a className="underline" href="mailto:hello@trudy.computer">
            hello@trudy.computer
          </a>{' '}
          or find her{' '}
          {elsewhere ? (
            <span
              onClick={() => toggleElsewhere(!elsewhere)}
              class="hover:cursor-pointer"
            >
              ▸ elsewhere
            </span>
          ) : (
            <span
              onClick={() => toggleElsewhere(!elsewhere)}
              class="hover:cursor-pointer"
            >
              ▾ elsewhere
            </span>
          )}
        </p>
        {!elsewhere && (
          <div className="p-2">
            <a
              className="underline"
              target="blank"
              href="https://docs.google.com/spreadsheets/d/1pBokIjBV7lxDYNxqqxfLrNb7h3h4GuhWSbrrTGd9Fho/edit?usp=sharing"
            >
              Resume
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://www.are.na/trudy-painter"
            >
              Are.na
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://vsco.co/bionicpinkytoe/gallery"
            >
              VSCO
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://open.spotify.com/user/trudypaintet?si=ZlW6diDKSl61x9oKhit5BA"
            >
              Spotify
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://github.com/trudypainter"
            >
              Github
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://www.linkedin.com/in/trudy-painter/"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
