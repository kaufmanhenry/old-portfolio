import React from 'react';
import Head from 'next/head';

export default () => (
  <Head>
    <title>Henry Kaufman</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <style dangerouslySetInnerHTML={{
      __html: `body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'neue-haas-unica', sans-serif;
      } h1,h2,h3,h4,h5,h6 {font-weight:500;}*{padding:0;margin:0}`
    }}
    />
    <link rel="stylesheet" href="https://use.typekit.net/hnm1snx.css" />
    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/static/favicon/android-icon-192x192.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicon/manifest.json" />
    <meta name="msapplication-TileColor" content="#28f" />
    <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />

    <meta name="description" content="Designer and developer based out of Boston focused on building intuitive, simple products." />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@kaufmanhenry" />
    <meta name="twitter:title" content="Henry Kaufman" />
    <meta name="twitter:description" content="Designer and developer based out of Boston focused on building intuitive, simple products." />
    <meta name="twitter:creator" content="@kaufmanhenry" />
    <meta name="twitter:image" content="http://kaufman.io/static/me.jpg" />

    <meta property="og:title" content="Henry Kaufman" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://kaufman.io" />
    <meta property="og:image" content="http://kaufman.io/static/me.jpg" />
    <meta property="og:description" content="Designer and developer based out of Boston focused on building intuitive, simple products." />
  </Head>
);
