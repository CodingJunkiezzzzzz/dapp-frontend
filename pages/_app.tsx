import '../styles/global.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DEXSettingsContextProvider } from '../contexts/dex/settings';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DEXSettingsContextProvider>
        <div className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover h-screen scroll-smooth flex flex-col">
          <Header />
          <div className="overflow-auto flex-1 backdrop-opacity-10 backdrop-invert bg-[#000]/70">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </DEXSettingsContextProvider>
    </>
  );
}
