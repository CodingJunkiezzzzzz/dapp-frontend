import React, { useCallback, useEffect, useState } from 'react';
import { FiSettings, FiChevronDown, FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import { IoMdRefreshCircle } from 'react-icons/io';
import { MdSwapVerticalCircle, MdOutlineSwapHoriz } from 'react-icons/md';
import { Rings } from 'react-loader-spinner';
import { AddressZero } from '@ethersproject/constants';
import _ from 'lodash';
import Chart from '../../components/Chart';
import SwapSettingsModal from '../../components/SwapSettingsModal';
import ChartToggleButton from '../../components/Button/ChartToggleButton';
import TokensListModal from '../../components/TokensListModal';
import { ListingModel } from '../../api/models/dex';
import { useAPIContext } from '../../contexts/api';
import { useWeb3Context } from '../../contexts/web3';
import {
  computePair,
  getToken1Price,
  fetchTokenBalanceForConnectedWallet,
  fetchChartData,
  getOutputAmount,
  calculatePercentageChange
} from '../../hooks/dex';

enum ChartPeriod {
  DAY,
  WEEK,
  MONTH,
  YEAR
}

export default function Swap() {
  const [val1, setVal1] = useState<number>(0.0);
  const [val2, setVal2] = useState<number>(0.0);
  const [chartPeriod, setChartPeriod] = useState<ChartPeriod>(ChartPeriod.DAY);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState<boolean>(false);
  const [isFirstTokensListModalVisible, setIsFirstTokensListModalVisible] = useState<boolean>(false);
  const [isSecondTokensListModalVisible, setIsSecondTokensListModalVisible] = useState<boolean>(false);

  const { tokensListing } = useAPIContext();
  const { chainId, active } = useWeb3Context();
  const [firstSelectedToken, setFirstSelectedToken] = useState<ListingModel>({} as ListingModel);
  const [secondSelectedToken, setSecondSelectedToken] = useState<ListingModel>({} as ListingModel);

  const { pair, error: pairError } = computePair(firstSelectedToken, secondSelectedToken, chainId || 97);
  const token1Price = getToken1Price(firstSelectedToken, secondSelectedToken, chainId || 97);
  const [chartPeriodInt, setChartPeriodInt] = useState<number>(60 * 60 * 24);

  const balance1 = fetchTokenBalanceForConnectedWallet(firstSelectedToken);
  const balance2 = fetchTokenBalanceForConnectedWallet(secondSelectedToken);
  const {
    chartData,
    loading: chartDataLoading,
    error: chartError
  } = fetchChartData(firstSelectedToken, secondSelectedToken, chainId || 97, _.multiply(chartPeriodInt, 1000));

  const outputAmount = getOutputAmount(firstSelectedToken, secondSelectedToken, val1, chainId || 97);

  const { token0PercentageChange, token1PercentageChange, tokensPercentageChangeType } = calculatePercentageChange(
    firstSelectedToken,
    secondSelectedToken,
    chainId || 97,
    _.multiply(chartPeriodInt, 1000)
  );

  const switchSelectedTokens = useCallback(() => {
    const token1 = firstSelectedToken;
    const token2 = secondSelectedToken;

    setFirstSelectedToken(token2);
    setSecondSelectedToken(token1);
  }, [firstSelectedToken, secondSelectedToken]);

  useEffect(() => {
    if (tokensListing.length >= 2) {
      setFirstSelectedToken(tokensListing[0]);
      setSecondSelectedToken(tokensListing[1]);
    }
  }, [tokensListing]);

  useEffect(() => {
    setVal2(outputAmount);
  }, [outputAmount]);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between w-full gap-3 md:gap-7">
        {/* Chart view */}
        <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] pt-[30px] flex justify-center items-center w-full md:w-2/3 overflow-auto md:h-[inherit]">
          <div className="flex flex-col flex-1 justify-evenly items-center w-full md:w-[757px] h-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center w-1/3">
                <div className="flex justify-center w-1/2">
                  <img src={firstSelectedToken.logoURI} alt={firstSelectedToken.name} className="rounded-[50px] w-[30px]" />
                  <img src={secondSelectedToken.logoURI} alt={secondSelectedToken.name} className="rounded-[50px] h-[30px]" />
                </div>
                <div className="flex justify-center">
                  <span className="text-white text-[16px] font-[700] font-Montserrat">
                    {firstSelectedToken.symbol}/{secondSelectedToken.symbol}
                  </span>
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
            </div>
            <div className="flex justify-between items-center w-full mt-[23px]">
              <div className="flex justify-between items-center md:w-2/5 gap-1">
                <div className="flex justify-center w-1/3">
                  <span className="text-white font-[700] text-[16px] md:text-[40px] font-Montserrat">{token1Price}</span>
                </div>
                <div className="flex justify-center w-1/3">
                  <span className="text-white text-[16px] font-[700] font-Montserrat">
                    {firstSelectedToken.symbol}/{secondSelectedToken.symbol}
                  </span>
                </div>
                <div className="flex justify-center w-1/3">
                  <span
                    className={`${
                      tokensPercentageChangeType.token0PChangeType === 'INCREASE'
                        ? 'text-green-500'
                        : tokensPercentageChangeType.token0PChangeType === 'DECREASE'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    } font-[700] text-[16px] font-Montserrat`}
                  >
                    {token0PercentageChange}%
                  </span>
                  <span
                    className={`${
                      tokensPercentageChangeType.token1PChangeType === 'INCREASE'
                        ? 'text-green-500'
                        : tokensPercentageChangeType.token1PChangeType === 'DECREASE'
                        ? 'text-red-500'
                        : 'text-yellow-500'
                    } font-[700] text-[16px] font-Montserrat`}
                  >
                    ({token1PercentageChange}%)
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center bg-[#d9d9d9]/[.1] border-[#d9d9d9] border-[1px] rounded-[18.5px]">
                <ChartToggleButton
                  onClick={() => {
                    setChartPeriod(ChartPeriod.DAY);
                    setChartPeriodInt(60 * 60 * 24);
                  }}
                  isActive={chartPeriod === ChartPeriod.DAY}
                >
                  <span>24H</span>
                </ChartToggleButton>
                <ChartToggleButton
                  onClick={() => {
                    setChartPeriod(ChartPeriod.WEEK);
                    setChartPeriodInt(60 * 60 * 24 * 7);
                  }}
                  isActive={chartPeriod === ChartPeriod.WEEK}
                >
                  <span>1W</span>
                </ChartToggleButton>
                <ChartToggleButton
                  onClick={() => {
                    setChartPeriod(ChartPeriod.MONTH);
                    setChartPeriodInt(60 * 60 * 24 * 30);
                  }}
                  isActive={chartPeriod === ChartPeriod.MONTH}
                >
                  <span>1M</span>
                </ChartToggleButton>
                <ChartToggleButton
                  onClick={() => {
                    setChartPeriod(ChartPeriod.YEAR);
                    setChartPeriodInt(60 * 60 * 24 * 365);
                  }}
                  isActive={chartPeriod === ChartPeriod.YEAR}
                >
                  <span>1Y</span>
                </ChartToggleButton>
              </div>
            </div>
            {chartDataLoading ? (
              <Rings height={200} width={200} wrapperClass="w-full flex justify-center items-center bg-[#c0c0c0]" color="#5f9ea0" />
            ) : (
              <Chart dataset={chartData} />
            )}
          </div>
        </div>

        {/* Form view */}
        <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-full md:w-1/3 md:max-h-[600px]">
          <div className="flex flex-col justify-evenly items-center w-full h-full">
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
                  <span className="text-white"> Balance: {balance1}</span>
                </div>
                <div className="flex justify-between w-full mt-[10px]">
                  <div className="flex justify-between items-center">
                    <div
                      className="flex justify-start items-center border-r border-white p-4 cursor-pointer gap-1 w-[150px]"
                      onClick={() => setIsFirstTokensListModalVisible(true)}
                    >
                      <img src={firstSelectedToken.logoURI} alt={firstSelectedToken.name} className="rounded-[50px] w-[30px] h-[30px]" />
                      <span className="text-white uppercase font-[700] text-[16px]">{firstSelectedToken.symbol}</span>
                      <FiChevronDown className="text-white" />
                    </div>
                    <div className="flex justify-center items-center gap-1 flex-1">
                      <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Max</button>
                      <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Half</button>
                    </div>
                  </div>
                  <div className="flex justify-end w-[200px]">
                    <input
                      type="number"
                      className="p-[12px] bg-transparent text-white border-0 w-full outline-0 appearance-none font-[600] text-[18px]"
                      value={val1}
                      onChange={(e) => setVal1(e.target.valueAsNumber || 0.0)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center my-[9.5px]">
                <button onClick={switchSelectedTokens} className="bg-transparent text-[#ffffff] text-[30px]">
                  <MdSwapVerticalCircle />
                </button>
              </div>
              <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly">
                <div className="flex justify-between w-full">
                  <span className="text-white">To</span>
                  <span className="text-white"> Balance: {balance2}</span>
                </div>
                <div className="flex justify-between w-full mt-[10px]">
                  <div className="flex justify-center items-center">
                    <div
                      onClick={() => setIsSecondTokensListModalVisible(true)}
                      className="flex justify-start items-center border-r border-white p-4 cursor-pointer gap-1 w-[150px]"
                    >
                      <img src={secondSelectedToken.logoURI} alt={secondSelectedToken.name} className="rounded-[50px] w-[30px] h-[30px]" />
                      <span className="text-white uppercase font-[700] text-[16px]">{secondSelectedToken.symbol}</span>
                      <FiChevronDown className="text-white" />
                    </div>
                    <div className="flex justify-center items-center flex-1 gap-1">
                      <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Max</button>
                      <button className="p-[2px] bg-[#2775ca] opacity-[.19] text-[#c6c3c3] text-[10px] font-[600]">Half</button>
                    </div>
                  </div>
                  <div className="flex justify-end w-[200px]">
                    <input
                      type="number"
                      className="p-[12px] bg-transparent text-white border-0 w-full outline-0 appearance-none font-[600] text-[18px]"
                      value={val2}
                      onChange={(e) => setVal2(e.target.valueAsNumber || 0.0)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full items-center my-2">
              {!pairError ? (
                <div className="flex justify-center w-full items-center flex-col gap-2">
                  <div className="flex justify-between w-full items-center font-poppins gap-3">
                    <span className="text-white font-[300]">1 {secondSelectedToken.symbol}</span>
                    <MdOutlineSwapHoriz className="text-white font-[400] text-[30px]" />
                    <span className="text-white font-[300]">
                      {token1Price} {firstSelectedToken.symbol}
                    </span>
                  </div>
                  <div className="flex justify-between w-full items-center font-poppins gap-3">
                    <span className="text-white font-[300]">You get:</span>
                    {/* <MdOutlineSwapHoriz className="text-white font-[400] text-[30px]" /> */}
                    <span className="text-white font-[300]">
                      {outputAmount} {secondSelectedToken.symbol}
                    </span>
                  </div>
                </div>
              ) : (
                <span className="text-red-400 font-Montserrat text-[15px]">{pairError.message}</span>
              )}
            </div>
            {!active ? (
              <button className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full mt-[54px]">
                <span>Connect Wallet</span>
              </button>
            ) : (
              <div className="flex justify-center gap-2 items-center w-full flex-col mt-[40px]">
                {firstSelectedToken.address !== AddressZero && (
                  <button
                    disabled={val1 <= 0}
                    className={`flex justify-center items-center ${
                      val1 > 0 ? 'bg-green-300' : 'bg-gray-300'
                    } py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full`}
                  >
                    <span>
                      Approve to spend {val1} {firstSelectedToken.symbol}
                    </span>
                  </button>
                )}
                <button className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full">
                  <span>Swap</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <SwapSettingsModal isOpen={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
        <TokensListModal
          isVisible={isFirstTokensListModalVisible}
          onClose={() => setIsFirstTokensListModalVisible(false)}
          onTokenSelected={(token) => setFirstSelectedToken(token)}
          selectedTokens={[firstSelectedToken, secondSelectedToken]}
        />
        <TokensListModal
          isVisible={isSecondTokensListModalVisible}
          onClose={() => setIsSecondTokensListModalVisible(false)}
          onTokenSelected={(token) => setSecondSelectedToken(token)}
          selectedTokens={[firstSelectedToken, secondSelectedToken]}
        />
      </div>
    </>
  );
}
