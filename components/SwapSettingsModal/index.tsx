import React, { Fragment } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Switch, Dialog, Transition } from '@headlessui/react';
import { useDEXSettingsContext } from '../../contexts/dex/settings';

type SwapSettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SwapSettingsModal({ isOpen = false, onClose }: SwapSettingsModalProps) {
  const {
    gasPrice,
    changeGasPrice,
    slippageTolerance,
    changeSlippage,
    txDeadlineInMins,
    changeTXDeadline,
    isExpertMode,
    switchExpertMode,
    isLightningMode,
    switchLightningMode,
    playSounds,
    switchSoundsMode
  } = useDEXSettingsContext();
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
                <div className="container  top-0 bottom-0 left-0 right-0 w-[400px] mx-auto overflow-hidden  bg-[#161525]/[.7] mix-blend-normal rounded-[55px] backdrop-blur-[64px] text-white">
                  <div className="bg-[#161525]/[.5] p-[30px]">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-2xl font-semibold">Settings</h2>
                      <button onClick={onClose} className="text-[#000] text-[30] p-[8px] flex justify-center rounded-[100%] bg-[#fff] font-[700]">
                        <FiX />
                      </button>
                    </div>
                  </div>
                  <div className="px-[30px] py-[20px]">
                    <div className="swap flex flex-col my-5">
                      <h2 className="font-poppins uppercase text-2l font-semibold">Swaps &amp; Liquidity</h2>
                      <div className="flex flex-row items-center w-full justify-left py-2 text-sm text-slate-300">
                        <span className="font-[700]">Default Transaction Speed (GWEI)</span>
                        <div className="tooltip tooltip-bottom" data-tip="How fast do you want this transaction?">
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                      </div>
                      <div className="flex flex-row flex-wrap items-center justify-start w-full ">
                        <button
                          type="button"
                          className={`h-7 mr-1 rounded-[10px] p-2 flex items-center justify-center outline-0 text-[12px] text-slate-300 ${
                            gasPrice === 100 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                          onClick={() => changeGasPrice(100)}
                        >
                          Standard (100)
                        </button>

                        <button
                          type="button"
                          className={`h-7 mr-1 rounded-[10px] p-2 flex items-center justify-center outline-0 text-[12px] text-slate-300 ${
                            gasPrice === 150 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                          onClick={() => changeGasPrice(150)}
                        >
                          Fast (150)
                        </button>
                        <button
                          type="button"
                          className={`h-7 mr-1 rounded-[10px] p-2 flex items-center justify-center outline-0 text-[12px] text-slate-300 ${
                            gasPrice === 250 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                          onClick={() => changeGasPrice(250)}
                        >
                          Super-Fast (250)
                        </button>
                      </div>
                    </div>
                    <div className="my-5">
                      <div className="flex flex-row items-center w-full justify-left text-sm text-slate-300 mb-2">
                        <span className="font-[700]">Slippage Tolerance</span>
                        <div className="tooltip tooltip-bottom" data-tip="How much price change you're willing to permit during transaction.">
                          <FaQuestionCircle className="ml-1 mb-1 text-[10px]" />
                        </div>
                      </div>
                      <div className="flex flex-row flex-wrap items-center justify-between w-full ">
                        <button
                          type="button"
                          onClick={() => changeSlippage(0.1)}
                          className={`w-1/5 rounded-[10px] p-1 flex items-center justify-center outline-0 ${
                            slippageTolerance === 0.1 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                        >
                          0.1%
                        </button>
                        <button
                          type="button"
                          onClick={() => changeSlippage(0.5)}
                          className={`w-1/5 rounded-[10px] p-1 flex items-center justify-center outline-0 ${
                            slippageTolerance === 0.5 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                        >
                          0.5%
                        </button>
                        <button
                          type="button"
                          onClick={() => changeSlippage(1)}
                          className={`w-1/5 rounded-[10px] p-1 flex items-center justify-center outline-0 ${
                            slippageTolerance === 1 ? 'bg-blue-500' : 'bg-[#26232f]'
                          } hover:bg-blue-500`}
                        >
                          1.0%
                        </button>
                        <input
                          type="number"
                          onChange={(e) => changeSlippage(e.target.valueAsNumber || 0.1)}
                          className="w-1/5  rounded-[10px] py-1 px-2 mr-[1px] flex items-center justify-center outline-0 focus:text-[#26232F]"
                          placeholder="0.1%"
                        />
                      </div>
                    </div>
                    <div className="setting flex flex-col items-center  my-5 ">
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          <span className="font-[700]">Tx Deadline (mins)</span>
                          <div
                            className="tooltip tooltip-bottom"
                            data-tip="How long to wait after execution before a transaction is considered failed."
                          >
                            <FaQuestionCircle className="ml-1 text-[10px]" />
                          </div>
                        </div>
                        <div className="flex-[0.2]">
                          <input
                            type="number"
                            value={txDeadlineInMins}
                            onChange={(e) => changeTXDeadline(e.target.valueAsNumber || 5)}
                            className="rounded-[10px] px-2 outline-0 inline-flex h-6 w-11 text-black focus:text-[#26232F]"
                            placeholder="0.1%"
                          />
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Lightning Mode (Beta)
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={isLightningMode}
                            onClick={switchLightningMode}
                            className={`${isLightningMode ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          >
                            <span className="sr-only">Enable notifications</span>
                            <span
                              className={`${
                                isLightningMode ? 'translate-x-6 bg-black' : 'translate-x-1 bg-white'
                              } inline-block h-4 w-4 transform rounded-full transition`}
                            />
                          </Switch>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Expert Mode
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={isExpertMode}
                            onClick={switchExpertMode}
                            className={`${isExpertMode ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          >
                            <span className="sr-only">Enable notifications</span>
                            <span
                              className={`${
                                isExpertMode ? 'translate-x-6 bg-black' : 'translate-x-1 bg-white'
                              } inline-block h-4 w-4 transform rounded-full transition`}
                            />
                          </Switch>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Play Sounds
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={playSounds}
                            onClick={switchSoundsMode}
                            className={`${playSounds ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          >
                            <span className="sr-only">Enable notifications</span>
                            <span
                              className={`${
                                playSounds ? 'translate-x-6 bg-black' : 'translate-x-1 bg-white'
                              } inline-block h-4 w-4 transform rounded-full transition`}
                            />
                          </Switch>
                        </div>
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
