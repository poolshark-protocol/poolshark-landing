import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
     <Head>
        <title>Poolshark</title>
        <meta name="description" content="Poolshark is a cutting-edge AMM where users can create directional positions to profit from volatility. Traders are able to utilise their orders to provide liquidity."/>
        <meta property="og:title" content="Poolshark" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://poolshark.fi/" />
<meta property="og:image" content="/images/og.png" />
<meta name="twitter:title" content="Poolshark"/>
<meta name="twitter:description" content="Poolshark is a cutting-edge AMM where users can create directional positions to profit from volatility. Traders are able to utilise their orders to provide liquidity."/>
<meta name="twitter:image" content="/images/og.png"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <body className="bg-[#040110]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
