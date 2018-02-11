import React from 'react';
import Head from 'next/head';

export default () => (
  <Head>
    <title>Henry Kaufman</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <link rel="stylesheet" href="https://use.typekit.net/tut6mfe.css" />
    <style dangerouslySetInnerHTML={{
      __html: `body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
      } h1,h2,h3,h4,h5,h6 {font-weight:500;margin:0;padding:0}`
    }}
    />
  </Head>
);
