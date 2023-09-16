import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/fonts.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}

export default MyApp
