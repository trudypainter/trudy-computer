import React from 'react';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';
import MDImage from './unused/Img';
import Link from 'next/link';
import BackButton from './backButton';
import Callout from './Callout';

const components = { Callout };

export default function Blog(props) {
  const { meta, route, ...rest } = props;

  const sharedHead = (
    <Head>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={'Trudy Painter - ' + meta.title} />
    </Head>
  );

  if (route.startsWith('/projects')) {
    return function Layout({ children }) {
      return (
        <>
          {sharedHead}
          <BackButton />
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
