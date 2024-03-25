// -----------------------------------------------------------------------------
import Document, { Html, Head, Main, NextScript } from "next/document";

// -----------------------------------------------------------------------------
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta name="author" content="mateus.digital" />
          <meta name="title" content="divas.fashion" />
          <meta name="description" content="divas.fashion" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
