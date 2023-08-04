import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
         
                <title>Discord Bot Dokümantasyonu</title>
                <meta name="description" content="Lysoline Bot İnvite." />
                <meta property="og:description" content="Lysoline Bot İnvite." />
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/1014356400358572052/1136999773388419072/Lysolineavatar.png" />
                <meta property="og:image:alt" content="Lysoline" />
                <meta property="og:site_name" content="Lysoline" />
                {/* Diğer head içeriği */}
           
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
