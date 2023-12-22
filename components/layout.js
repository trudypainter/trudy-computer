import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';
import MDImage from './unused/Img';
import Link from 'next/link';
import BackButton from './backButton';
import Callout from './mdx/Callout';
import Hero from './mdx/Hero';
import TwoCol from './mdx/TwoCol';
import Line from './mdx/Line';
import posts from '../posts.json';

const components = { Callout, Hero, TwoCol, Line };

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  const currentPriority = posts.posts.find(
    (post) => post.title === meta.title
  ).priority;
  let nextProject = posts.posts.reduce((next, post) => {
    return Number(post.priority) < Number(currentPriority) &&
      (!next || Number(post.priority) > Number(next.priority))
      ? post
      : next;
  }, null);

  // if nextProject is null, then we are on the last project
  // so we want to go to the top priority project
  if (!nextProject) {
    nextProject = posts.posts.reduce((next, post) => {
      return !next || post.priority > next.priority ? post : next;
    }, null);
  }

  if (route.startsWith('/projects')) {
    return function Layout({ children }) {
      return (
        <>
          <Head>
            <title>Trudy Painter</title>
            <link rel="icon" href="favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <BackButton meta={meta} nextProject={nextProject} />
          <div
            className="md:prose-lg   mx-auto py-24 
            -z-10 font-sans w-[1000px] leading-snug
            phone:w-full phone:mx-auto phone:prose-sm phone:px-4
            "
            style={{ lineHeight: '1.4' }}
          >
            <MDXEmbedProvider>
              {' '}
              <MDXProvider components={components}>{children}</MDXProvider>{' '}
            </MDXEmbedProvider>
          </div>
        </>
      );
    };
  }

  return function Layout({ children }) {
    return (
      <>
        <Head></Head>
        {children}
      </>
    );
  };
}
