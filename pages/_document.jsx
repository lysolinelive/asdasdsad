import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://cdn.discordapp.com/attachments/1014356400358572052/1136999773388419072/Lysolineavatar.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Lysoline BOT İnvite "
          />  
          <meta
            property="og:description"
            content="Lysoline BOT İnvite "
          />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/1014356400358572052/1136999773388419072/Lysolineavatar.png" />
          <meta property="og:image:alt" content="Lysoline BOT" /> 
          <meta
            property="og:site_name"
            content="Lysoline BOT"
          />

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
