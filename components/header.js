import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [elsewhere, toggleElsewhere] = useState(true);

  return (
    <div class="p-4 md:p-8 mx-auto -md:py-16 md:h-[460px] bg-gradient-to-b from-[#78A7E5] to-[#93C3FD] border-black -md:border-b">
      <div class="w-[600px] max-w-full backdrop-blur-sm bg-white/100">
        <p className="p-4">
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
          <a className="underline" target="_blank" href="/projects/meshup">
            Meshup
          </a>{' '}
          and{' '}
          <a className="underline" target="_blank" href="/projects/latent-lab">
            Latent Lab
          </a>
          .
        </p>
        <p className="p-4 pt-0">
          Next year, she is joining{' '}
          <a
            className="underline"
            href="https://experiments.withgoogle.com"
            target="_blank"
          >
            Google Creative Lab
          </a>{' '}
          in NYC as a creative technologist.
        </p>

        <p className="p-4 pt-0">
          Say{' '}
          <a className="underline" href="mailto:hello@trudy.computer">
            hello@trudy.computer
          </a>{' '}
          or find her{' '}
          {elsewhere ? (
            <span
              onClick={() => toggleElsewhere(!elsewhere)}
              class="hover:cursor-pointer whitespace-nowrap"
            >
              ▸ elsewhere
            </span>
          ) : (
            <span
              onClick={() => toggleElsewhere(!elsewhere)}
              class="hover:cursor-pointer whitespace-nowrap"
            >
              ▾ elsewhere
            </span>
          )}
        </p>
        {!elsewhere && (
          <div className="p-4 pt-0">
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
              href="https://vsco.co/bionicpinkytoe/gallery"
            >
              VSCO
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="https://www.linkedin.com/in/trudy-painter/"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              className="underline"
              target="blank"
              href="TrudyPainter_Resume.pdf"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
