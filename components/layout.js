import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';
import Link from 'next/link';

const components = {};

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  const sharedHead = (
    <Head>
      <meta property="og:title" content="Trudy" />
      <meta property="og:site_name" content="Trudy Painter" />
    </Head>
  );

  if (route.startsWith('/projects')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <div className="sticky top-6 left-8">
            <Link href="/">
              <a className="px-4 py-4  md:px-8 bg-bottomsky z-80 rounded-r-full">
                Home
              </a>
            </Link>
          </div>{' '}
          <div className="prose mx-auto py-24 -z-10">
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
