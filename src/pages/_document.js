import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <title>Poolshark</title>
        <meta name="description" content="Poolshark is a directional AMM where users can profit from volatility with less maintenance. Traders can now be LPs too."/>
        <meta property="og:title" content="Poolshark" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://poolshark.fi/" />
<meta property="og:image" content="/images/og.png" />
<meta name="twitter:title" content="Poolshark"/>
<meta name="twitter:description" content="Poolshark is a directional AMM where users can profit from volatility with less maintenance. Traders can now be LPs too."/>
<meta name="twitter:image" content="https://poolshark.fi/"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
