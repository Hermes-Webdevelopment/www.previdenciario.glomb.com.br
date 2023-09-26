import Document, { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import { gtmCaller } from '../components/gtmCaller/gtmScript'


export default class MyDocument extends Document {
    render() {
        
        useEffect(() => {
            gtmCaller()
        },[])

        return ( 
            <Html lang="pt">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com/" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> 
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <noscript>
                        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZG2JHG" height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe>
                    </noscript>
                </body>
            </Html>
        ) 
    } 
}