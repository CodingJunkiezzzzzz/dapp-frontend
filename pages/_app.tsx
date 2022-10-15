import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DEXSettingsContextProvider } from '../contexts/dex/settings';
import { Web3ContextProvider } from '../contexts/web3';
import { APIContextProvider } from '../contexts/api';

function getLibrary(provider: any) {
  return new Web3(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ContextProvider>
          <DEXSettingsContextProvider>
            <APIContextProvider>
              <div className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover h-screen scroll-smooth flex flex-col w-screen overflow-hidden">
                <Header />
                <div className="overflow-auto flex-1 backdrop-opacity-10 backdrop-invert bg-[#000]/70">
                  <Component {...pageProps} />
                </div>
                <Footer />
              </div>
            </APIContextProvider>
          </DEXSettingsContextProvider>
        </Web3ContextProvider>
      </Web3ReactProvider>
    </>
  );
}
