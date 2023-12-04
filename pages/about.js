import posts from '../posts.json';
import Link from 'next/link';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Post } from '../components/post';
// import Scroller from '../components/scroller';
import { useState } from 'react';

import Image from 'next/image';
import FilterBar from '../components/FilterBar';
import BackButton from '../components/backButton';
// import FindMe from '../components/FindMe';

export default function About(props) {
  const allProjects = posts.posts;
  const [selectedProjects, setSelectedProjects] = useState(posts.posts);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <>
      <div className="md:flex max-w-[800px] mx-auto my-32 space-x-4">
        <div className="mb-6 ml-4 w-96 relative">
          <Image src="/about/me.jpg" width="250" height="250" />
        </div>
        <div className="max-w-[500px]">
          <div className="mb-6">
            Hi, I'm Trudy. I'm a recent graduate of MIT (2023). I double majored
            in computer science and comparative media studies. At MIT, I was
            also involved with the MIT Media Lab, specifically the{' '}
            <a
              className="underline text-blue-600"
              href="https://www.media.mit.edu/groups/viral-communications/overview/"
            >
              Viral Communications Group
            </a>
            . I researched how to push the boundaries of interaction with large
            language models. Examples of this type of work are{' '}
            <Link href="/projects/latent-lab">
              <a className="underline text-blue-600">Latent Lab</a>
            </Link>{' '}
            and{' '}
            <Link clasName="underline" href="/projects/meshup">
              <a className="underline text-blue-600">Meshup</a>
            </Link>
            .
          </div>
          <div>
            Now, I'm working at{' '}
            <a
              className="underline text-blue-600"
              href="https://experiments.withgoogle.com"
            >
              Google Creative Lab
            </a>{' '}
            in New York City. I'm building AI experiments to make large language
            models more approachable and accessible.
          </div>
          <FindMe />
          <div className="mt-24">
            Reach out{' '}
            <a
              className="underline text-blue-600"
              href="mailto:hello@trudy.computer"
            >
              hello@trudy.computer
            </a>
          </div>
          <div className="mt-8 italic">
            I built this site using Next.js and Vercel. See{' '}
            <a
              className="underline text-blue-600"
              href="/projects/trudy-computer"
            >
              how I built it.
            </a>
          </div>
        </div>
      </div>
      <BackButton />
    </>
  );
}
