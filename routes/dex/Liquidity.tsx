import React from 'react';
import { FiSettings, FiPlus } from 'react-icons/fi';
import { IoMdRefreshCircle } from 'react-icons/io';

export default function Liquidity() {
  return (
    <div className="bg-white/75 rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-[492px]">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex justify-between items-center border-b-[#4e4e4e]/[.43] border-b-[2px] w-full">
          <div className="flex flex-col justify-start items-start w-8/8">
            <span className="font-[700] text-[25px] text-[#000000]">Your Liquidity</span>
            <span className="font-[700] text-[13px] text-[#000000]">Remove liquidity to get tokens back</span>
          </div>
          <div className="flex justify-evenly w-1/4">
            <button className="bg-transparent text-[#161525] text-[23px]">
              <FiSettings />
            </button>
            <button className="bg-transparent text-[#161525] text-[23px]">
              <IoMdRefreshCircle />
            </button>
          </div>
        </div>
        <div className="mt-[63px] bg-[#0c0b16] rounded-[12px] flex justify-center items-center py-[9px] px-[26px] w-full">
          <div className="flex justify-center items-center w-full flex-col">
            <span className="text-white">No liquidity found</span>
            <span className="text-white">Don&apos;t see a pool you&apos;ve joined?</span>
            <div className="mt-[36px] w-full">
              <button className="border-[#1673b9] border-[2px] rounded-[19px] w-full py-[13px] px-[17px] text-[#1673b9] text-[18px] font-[600] flex justify-center">
                <span>Find other LP tokens</span>
              </button>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[62px] rounded-[19px] text-[18px] text-white w-full mt-[54px]">
          <FiPlus /> <span className="ml-[16px]">Add Liquidity</span>
        </button>
      </div>
    </div>
  );
}
