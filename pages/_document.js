import Document, { Html, Head, Main, NextScript } from "next/document";
import patchSharing from "@module-federation/nextjs-mf/patchSharing";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
          {patchSharing()}
          <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
