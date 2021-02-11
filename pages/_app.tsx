import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'
import '../styles/reset.css'
import { RecoilRoot } from 'recoil';
import LoadingBar from '@/components/loading-bar/LoadingBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LoadingBar/>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
