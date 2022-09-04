import React, { useState } from 'react';
import { FiSettings, FiChevronDown } from 'react-icons/fi';
import { IoMdRefreshCircle } from 'react-icons/io';
import { MdSwapVerticalCircle } from 'react-icons/md';
import Image from 'next/image';

export default function Swap() {
  const [val1, setVal1] = useState<number>(0.0);
  const [val2, setVal2] = useState<number>(0.0);
  return (
    <div className="bg-white/50 rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-[312px] lg:w-[492px]">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex justify-between w-full">
          <div>
            <button className="bg-transparent text-white text-[20px]">
              <IoMdRefreshCircle />
            </button>
          </div>
          <div>
            <button className="bg-transparent text-white text-[20px]">
              <FiSettings />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full mt-10">
          <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly">
            <div className="flex justify-between w-full">
              <span className="text-white">From</span>
              <span className="text-white"> Balance: 0</span>
            </div>
            <div className="flex justify-between w-full mt-[10px]">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center border-r border-white pr-[4px] mr-[4px]">
                  <Image src="/images/vefi.png" alt="vefi_logo" width={40} height={40} className="rounded-[50px]" />
                  <span className="text-white uppercase font-[700] text-[16px] mr-[20px] ml-[20px]">VEF</span>
                  <FiChevronDown className="text-white" />
                </div>
                <div className="flex justify-center items-center">
                  <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600] mr-[4px]">Max</button>
                  <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Half</button>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  type="number"
                  className="p-[12px] bg-transparent text-white border-0 justify-center w-1/3 flex items-center outline-0 appearance-none font-[600] text-[18px]"
                  value={val1}
                  onChange={(e) => setVal1(e.target.valueAsNumber || 0.0)}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center my-[9.5px]">
            <button className="bg-transparent text-[#ffeb82] text-[30px]">
              <MdSwapVerticalCircle />
            </button>
          </div>
          <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly">
            <div className="flex justify-between w-full">
              <span className="text-white">To</span>
              <span className="text-white"> Balance: 0</span>
            </div>
            <div className="flex justify-between w-full mt-[10px]">
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center border-r border-white pr-[4px] mr-[4px]">
                  <Image src="/images/brise.png" alt="brise_logo" width={40} height={40} className="rounded-[50px]" />
                  <span className="text-white uppercase font-[700] text-[16px] mr-[20px] ml-[20px]">BRISE</span>
                  <FiChevronDown className="text-white" />
                </div>
                <div className="flex justify-center items-center">
                  <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600] mr-[4px]">Max</button>
                  <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Half</button>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  type="number"
                  className="p-[12px] bg-transparent text-white border-0 justify-center w-1/3 flex items-center outline-0 appearance-none font-[600] text-[18px]"
                  value={val2}
                  onChange={(e) => setVal2(e.target.valueAsNumber || 0.0)}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full mt-[54px]">
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
}
