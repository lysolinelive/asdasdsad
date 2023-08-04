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
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />  
          <meta
            property="og:description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta property="og:image" content="https://cdn.discordapp.com/attachments/1014356400358572052/1136999773388419072/Lysolineavatar.png" />
          <meta property="og:image:alt" content="Lysoline BOT" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Lysoline BOT"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="https://cdn.discordapp.com/attachments/1014356400358572052/1136999773388419072/Lysolineavatar.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
