import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import '../styles/fonts.css'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   if (metric.label === 'web-vital') {
    
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
