import React, { useState } from 'react';
import { FiSettings, FiChevronDown, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { IoMdRefreshCircle } from 'react-icons/io';
import { MdSwapVerticalCircle, MdOutlineSwapHoriz } from 'react-icons/md';
import Chart from '../../components/Chart';
import SwapSettingsModal from '../../components/SwapSettingsModal';
import ChartToggleButton from '../../components/Button/ChartToggleButton';
import TokensListModal from '../../components/TokensListModal';

enum ChartPeriod {
  DAY,
  WEEK,
  MONTH,
  YEAR
}

export default function Swap() {
  const [val1, setVal1] = useState<number>(0.0);
  const [val2, setVal2] = useState<number>(0.0);
  const [isChartAreaMaximized, setIsChartAreaMaximized] = useState<boolean>(false);
  const [chartPeriod, setChartPeriod] = useState<ChartPeriod>(ChartPeriod.DAY);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState<boolean>(false);
  const [isTokensListModalVisible, setIsTokensListModalVisible] = useState<boolean>(false);

  const ChartView = () => (
    <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] pt-[32px] flex justify-center items-center w-full md:w-2/3 overflow-auto">
      <div className={`flex flex-col flex-1 justify-evenly items-center w-full md:w-[757px] ${isChartAreaMaximized ? 'h-screen' : 'h-full'}`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-1/3">
            <div className="flex justify-center w-1/2">
              <img src="/images/vefi.png" alt="vefi_logo" className="rounded-[50px] w-[30px]" />
              <img src="/images/brise.png" alt="brise_logo" className="rounded-[50px] h-[30px]" />
            </div>
            <div className="flex justify-center">
              <span className="text-white text-[16px] font-[700]">VEF/BRISE</span>
            </div>
            <div className="flex justify-center">
              <button className="bg-transparent text-[white] flex justify-center text-[30px]">
                <MdOutlineSwapHoriz />
              </button>
            </div>
            <div className="flex justify-center">
              <button className="bg-[#ffffff]/[.5] text-[#fff] text-[16px] font-[700] py-[7px] px-[12px] border-[#ffeb82] border-[1px] rounded-[5px]">
                <span>Basic</span>
              </button>
            </div>
          </div>
          <button onClick={() => setIsChartAreaMaximized((val) => !val)} className="bg-transparent text-[white] flex justify-center text-[20px]">
            {isChartAreaMaximized ? <FiMinimize2 /> : <FiMaximize2 />}
          </button>
        </div>
        <div className="flex justify-between items-center w-full mt-[23px]">
          <div className="flex justify-between items-center md:w-2/5 gap-1">
            <div className="flex justify-center w-1/3">
              <span className="text-white font-[700] text-[16px] md:text-[40px]">68.01</span>
            </div>
            <div className="flex justify-center w-1/3">
              <span className="text-white text-[16px] font-[700]">VEF/BRISE</span>
            </div>
            <div className="flex justify-center w-1/3">
              <span className="text-[#da004e] font-[700] text-[16px] w-full">-1.638(-2.35%)</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center bg-[#d9d9d9]/[.1] border-[#d9d9d9] border-[1px] rounded-[18.5px]">
            <ChartToggleButton onClick={() => setChartPeriod(ChartPeriod.DAY)} isActive={chartPeriod === ChartPeriod.DAY}>
              <span>24H</span>
            </ChartToggleButton>
            <ChartToggleButton onClick={() => setChartPeriod(ChartPeriod.WEEK)} isActive={chartPeriod === ChartPeriod.WEEK}>
              <span>1W</span>
            </ChartToggleButton>
            <ChartToggleButton onClick={() => setChartPeriod(ChartPeriod.MONTH)} isActive={chartPeriod === ChartPeriod.MONTH}>
              <span>1M</span>
            </ChartToggleButton>
            <ChartToggleButton onClick={() => setChartPeriod(ChartPeriod.YEAR)} isActive={chartPeriod === ChartPeriod.YEAR}>
              <span>1Y</span>
            </ChartToggleButton>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );

  const FormView = () => (
    <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-full h-full md:w-1/3">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex justify-between w-full">
          <div>
            <button className="bg-transparent text-white text-[23px]">
              <IoMdRefreshCircle />
            </button>
          </div>
          <div>
            <button onClick={() => setIsSettingsModalVisible(true)} className="bg-transparent text-white text-[23px]">
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
    </div>
  );
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row px-[20px] justify-between w-full gap-3 md:gap-7">
        <ChartView />

        <FormView />

        <SwapSettingsModal isOpen={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
      </div>
    </>
  );
}
