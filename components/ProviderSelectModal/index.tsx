import React, { Fragment } from 'react';
import { FiX } from 'react-icons/fi';
import { Dialog, Transition } from '@headlessui/react';
import { useWeb3Context } from '../../contexts/web3';

type ProviderSelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProviderSelectModal({ isOpen = false, onClose }: ProviderSelectModalProps) {
  const { connectInjected, connectTorus, connectWalletConnect } = useWeb3Context();
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="fixed inset-0 bg-[#000]/[.95]" aria-hidden="true" />
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="container  top-0 bottom-0 left-0 right-0 w-[500px] mx-auto overflow-hidden  bg-[#161525]/[.7] mix-blend-normal rounded-[15px] backdrop-blur-[64px] text-white">
                  <div className="bg-[#161525]/[.5] p-[30px]">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-2xl font-semibold">Select Provider</h2>
                      <button onClick={onClose} className="text-[#000] text-[30] p-[8px] flex justify-center rounded-[100%] bg-[#fff] font-[700]">
                        <FiX />
                      </button>
                    </div>
                  </div>
                  <div className="px-[20px] py-[10px]">
                    <div className="flex flex-col w-full gap-2">
                      <div className="flex flex-col md:flex-row w-full justify-evenly gap-2">
                        <button
                          onClick={() => {
                            connectInjected();
                            onClose();
                          }}
                          className="bg-[#1b1e24]/[0.2] border-[0.5px] border-[#fff8f8]/[0.35] rounded-[15px] w-full md:w-1/2 px-3 py-[26px] flex justify-between gap-2 items-center"
                        >
                          <img src="/images/metamask.svg" className="w-[50px] h-[50px]" alt="metamask" />
                          <span className="text-white font-poppins font-[500] text-[18px]">Metamask</span>
                        </button>
                        <button
                          onClick={() => {
                            connectWalletConnect();
                            onClose();
                          }}
                          className="bg-[#1b1e24]/[0.2] border-[0.5px] border-[#fff8f8]/[0.35] rounded-[15px] w-full md:w-1/2 px-3 py-[26px] flex justify-between gap-2 items-center"
                        >
                          <img src="/images/wallet.svg" className="w-[50px] h-[50px]" alt="wallet_connect" />
                          <span className="text-white font-poppins font-[500] text-[18px]">WalletConnect</span>
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row w-full justify-evenly gap-2">
                        <button
                          onClick={() => {
                            connectInjected();
                            onClose();
                          }}
                          className="bg-[#1b1e24]/[0.2] border-[0.5px] border-[#fff8f8]/[0.35] rounded-[15px] w-full md:w-1/2 px-3 py-[26px] flex justify-between gap-2 items-center"
                        >
                          <img src="/images/trustwallet.svg" className="w-[50px] h-[50px]" alt="trust_wallet" />
                          <span className="text-white font-poppins font-[500] text-[18px]">Trust Wallet</span>
                        </button>
                        <button
                          onClick={() => {
                            connectTorus();
                            onClose();
                          }}
                          className="bg-[#1b1e24]/[0.2] border-[0.5px] border-[#fff8f8]/[0.35] rounded-[15px] w-full md:w-1/2 px-3 py-[26px] flex justify-between gap-2 items-center"
                        >
                          <img src="/images/torus.svg" className="w-[50px] h-[50px]" alt="torus" />
                          <span className="text-white font-poppins font-[500] text-[18px]">Torus</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
