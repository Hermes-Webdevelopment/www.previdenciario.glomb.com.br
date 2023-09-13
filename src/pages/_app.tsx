import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/fonts.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { analytics } from '../components/gtmFile/analytics';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    analytics(window, document, 'script', 'dataLayer', 'GTM-MZG2JHG');
  },[])

  return <Component {...pageProps} />
}

export default MyApp
