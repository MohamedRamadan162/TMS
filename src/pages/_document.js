/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src='https://use.fontawesome.com/releases/v6.1.0/js/all.js'
          crossOrigin='anonymous'
        ></script>
        {/* <!-- Google fonts--> */}
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,700'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <body id='page-top'>
        <Main />
        <NextScript />
        
        {/* Custom JS files */}
      </body>
    </Html>
  )
}
