import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { UnsupportedChainIdError, Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DEXSettingsContextProvider } from '../contexts/dex/settings';
import { Web3ContextProvider, useWeb3Context } from '../contexts/web3';
import { APIContextProvider } from '../contexts/api';

function getLibrary(provider: any) {
  return new Web3(provider);
}

const AppContent = ({ children }: any) => {
  const { active, error } = useWeb3Context();
  return (
    <div className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover h-screen scroll-smooth flex flex-col w-screen overflow-hidden">
      <Header />
      <div className="overflow-auto flex-1 backdrop-opacity-10 backdrop-invert bg-[#000]/70">
        {!active ? (
          <div className="flex justify-center items-center w-full my-[100px]">
            <span className="text-[red]/70 font-[700] text-[18px] md:text-[50px] font-Montserrat">Please connect wallet!!!</span>
          </div>
        ) : (
          <>
            {!!error && error instanceof UnsupportedChainIdError ? (
              <div className="flex justify-center items-center w-full">
                <span className="text-[red]/70 font-[700] text-[50px] font-Montserrat">{error.message}</span>
              </div>
            ) : (
              <>{children}</>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ContextProvider>
          <DEXSettingsContextProvider>
            <APIContextProvider>
              <AppContent>
                <Component {...pageProps} />
              </AppContent>
            </APIContextProvider>
          </DEXSettingsContextProvider>
        </Web3ContextProvider>
      </Web3ReactProvider>
    </>
  );
}
