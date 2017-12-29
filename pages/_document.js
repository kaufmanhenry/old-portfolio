import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import HeadContent from '../components/Head';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <HeadContent />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}