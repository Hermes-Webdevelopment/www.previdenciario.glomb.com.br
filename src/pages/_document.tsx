import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default class MyDocument extends Document {
    render() {
        return ( 
            <Html lang="pt">
                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> 
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    {/* <Script id="gtm-script" strategy="afterInteractive">
                        {
                            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-MZG2JHG');`
                        }
                    </Script> */}
                    <Main />
                    <NextScript />
                    {/* <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZG2JHG" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
                    </noscript> */}
                </body>
            </Html>
        ) 
    } 
}