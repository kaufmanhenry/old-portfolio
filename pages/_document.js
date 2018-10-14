import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import HeadContent from '../components/Head';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <HeadContent />
        <body className="tk-neue-haas-unica">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
