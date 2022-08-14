import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html translate="no">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://res.cloudinary.com/cockbook/image/upload/v1659959743/single/logo_wppfyx.jpg"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className="sajsajsklassd">
        <Main />
        <NextScript />
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script src="/js/messenger_sdk.js" strategy="lazyOnload" />
      </body>
    </Html>
  );
}
