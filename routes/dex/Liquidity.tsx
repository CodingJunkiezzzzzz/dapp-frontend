import React, { useState } from 'react';
import { FiSettings, FiPlus, FiChevronDown } from 'react-icons/fi';
import { IoMdRefreshCircle, IoIosUndo } from 'react-icons/io';

enum LiquidityRoutes {
  ADD_LIQUIDITY,
  LIQUIDITY_POOLS
}

export default function Liquidity() {
  const [route, setRoute] = useState<LiquidityRoutes>(LiquidityRoutes.LIQUIDITY_POOLS);
  const [val1, setVal1] = useState<number>(0.0);
  const [val2, setVal2] = useState<number>(0.0);

  const LPRoute = () => (
    <div className="flex flex-col justify-evenly items-center w-full">
      <div className="flex justify-between items-center border-b-[#4e4e4e]/[.43] border-b-[2px] w-full">
        <div className="flex flex-col justify-start items-start w-8/8">
          <span className="font-[700] text-[25px] text-white">Your Liquidity</span>
          <span className="font-[700] text-[13px] text-white">Remove liquidity to get tokens back</span>
        </div>
        <div className="flex justify-evenly w-1/4">
          <button className="bg-transparent text-white text-[23px]">
            <FiSettings />
          </button>
          <button className="bg-transparent text-white text-[23px]">
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
      <button
        onClick={() => setRoute(LiquidityRoutes.ADD_LIQUIDITY)}
        className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[62px] rounded-[19px] text-[18px] text-white w-full mt-[54px]"
      >
        <FiPlus /> <span className="ml-[16px]">Add Liquidity</span>
      </button>
    </div>
  );

  const AddLiquidityRoute = () => (
    <div className="flex flex-col justify-evenly items-center w-full">
      <div className="flex justify-between w-full">
        <div>
          <button onClick={() => setRoute(LiquidityRoutes.LIQUIDITY_POOLS)} className="bg-transparent text-white text-[23px]">
            <IoIosUndo />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-transparent text-white text-[23px]">
            <FiSettings />
          </button>
          <button className="bg-transparent text-white text-[23px] ml-[4px]">
            <IoMdRefreshCircle />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full mt-10">
        <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly">
          <div className="flex justify-between w-full">
            <span className="text-white">Token 1</span>
            <span className="text-white"> Balance: 0</span>
          </div>
          <div className="flex justify-between w-full mt-[10px]">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center border-r border-white pr-[4px] mr-[4px]">
                <img src="/images/vefi.png" alt="vefi_logo" className="rounded-[50px] w-[40px] h-[40px]" />
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
          <button className="bg-transparent text-[#ffffff] text-[30px]">
            <FiPlus />
          </button>
        </div>
        <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly">
          <div className="flex justify-between w-full">
            <span className="text-white">Token 2</span>
            <span className="text-white"> Balance: 0</span>
          </div>
          <div className="flex justify-between w-full mt-[10px]">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center border-r border-white pr-[4px] mr-[4px]">
                <img src="/images/brise.png" alt="vefi_logo" className="rounded-[50px] w-[40px] h-[40px]" />
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
  );

  return (
    <div className="px-[20px]">
      <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] flex justify-center items-center py-[19px]">
        {route === LiquidityRoutes.LIQUIDITY_POOLS && <LPRoute />}
        {route === LiquidityRoutes.ADD_LIQUIDITY && <AddLiquidityRoute />}
      </div>
    </div>
  );
}
