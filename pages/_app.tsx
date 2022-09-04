import '../styles/global.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover overflow-auto h-screen">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
