import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';
import { Switch } from '@headlessui/react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function SwapSettingsModal() {
  const [enabled, setEnabled] = React.useState(false);
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="fixed inset-0 bg-black/100" aria-hidden="true" />
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div
                  className="container  top-0 bottom-0 left-0 right-0 w-[400px] mx-auto  bg-[#161525B2] rounded-[55px] text-white"
                  style={{ overflow: 'hidden' }}
                >
                  <div className="bg-[#161525]  p-[30px] ">
                    <div className="flex flex-row items-center justify-between">
                      <h2 className="text-2xl font-semibold">Settings</h2>
                      <FiXCircle className="text-2xl font-semibold cursor-pointer" onClick={closeModal} />
                    </div>
                  </div>
                  <div className="px-[30px] py-[20px]">
                    <div className="swap flex flex-col my-5">
                      <h2 className="font-poppins uppercase text-2l font-semibold">Swaps &amp; Liquidity</h2>
                      <p className="flex flex-row items-center w-full items-center justify-left py-2 text-sm text-slate-300	">
                        Default Transaction Speed (GWEI) <FaQuestionCircle className="ml-1 text-[10px]" />
                      </p>
                      <div className="flex flex-row flex-wrap items-center justify-start w-full ">
                        <button
                          type="button"
                          className="w-1/4 h-7 mr-1 rounded-[10px] p-1 flex items-center justify-center outline-0 text-[12px] text-slate-300 bg-[#26232F] hover:bg-blue-500"
                        >
                          Standard(5)
                        </button>

                        <button
                          type="button"
                          className="w-1/4 h-7 m-1 rounded-[10px] p-1 flex items-center justify-center outline-0 text-[12px] text-slate-300 bg-[#26232F] hover:bg-blue-500"
                        >
                          Fast(6)
                        </button>
                        <button
                          type="button"
                          className="w-1/4 h-7 m-1 rounded-[10px] p-1 flex items-center justify-center outline-0 text-[12px] text-slate-300 bg-[#26232F] hover:bg-blue-500"
                        >
                          Instant(7)
                        </button>
                      </div>
                    </div>
                    <div className="my-5">
                      <h2 className="flex flex-row items-center w-full items-center justify-left text-sm text-slate-300 mb-2">
                        Slippage Tolerance <FaQuestionCircle className="ml-1 mb-1text-[10px]" />
                      </h2>
                      <div className="flex flex-row flex-wrap items-center justify-between w-full ">
                        <button
                          type="button"
                          className="w-1/5  rounded-[10px] p-1 flex items-center justify-center outline-0 bg-[#26232F] hover:bg-blue-500"
                        >
                          0.1%
                        </button>
                        <button
                          type="button"
                          className="w-1/5  rounded-[10px] p-1 flex items-center justify-center outline-0 bg-[#26232F] hover:bg-blue-500"
                        >
                          0.5%
                        </button>
                        <button
                          type="button"
                          className="w-1/5  rounded-[10px] p-1 flex items-center justify-center outline-0 bg-[#26232F] hover:bg-blue-500"
                        >
                          1.0%
                        </button>
                        <input
                          type="text"
                          className="w-1/5  rounded-[10px] py-1 px-2 mr-[1px] flex items-center justify-center outline-0 focus:text-[#26232F]"
                          placeholder="0.1%"
                        />
                      </div>
                    </div>
                    <div className="setting flex flex-col items-center  my-5 ">
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Tx deadline(mins)
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <input
                            type="text"
                            className="rounded-[10px] px-2 outline-0 inline-flex h-6 w-11 text-black focus:text-[#26232F]"
                            placeholder="0.1%"
                          />
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Zap(Beta)
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          >
                            <span className="sr-only">Enable notifications</span>
                            <span
                              className={`${
                                enabled ? 'translate-x-6' : 'translate-x-1'
                              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
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
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          ></Switch>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Disabled Multihops
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          ></Switch>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-between my-2">
                        <div className="mr-1 flex items-center flex-[1] text-sm text-slate-300">
                          Flippy sounds
                          <FaQuestionCircle className="ml-1 text-[10px]" />
                        </div>
                        <div className="flex-[0.2]">
                          <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-[#4F4F4F]' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
                          ></Switch>
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
