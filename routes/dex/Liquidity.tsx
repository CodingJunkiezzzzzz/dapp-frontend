import React, { useCallback, useEffect, useState } from 'react';
import assert from 'assert';
import _ from 'lodash';
import { FiSettings, FiPlus, FiChevronDown } from 'react-icons/fi';
import { IoMdRefreshCircle, IoIosUndo } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { Fetcher, Pair, WETH } from 'quasar-sdk-core';
import { Contract } from '@ethersproject/contracts';
import { AddressZero } from '@ethersproject/constants';
import { Web3Provider } from '@ethersproject/providers';
import { parseUnits } from '@ethersproject/units';
import { abi as erc20Abi } from 'quasar-v1-core/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json';
import { abi as routerAbi } from 'quasar-v1-periphery/artifacts/contracts/QuasarRouter.sol/QuasarRouter.json';
import useSound from 'use-sound';
import { useAPIContext } from '../../contexts/api';
import UserLPItem from '../../components/PoolsListItem';
import { useWeb3Context } from '../../contexts/web3';
import { ListingModel } from '../../api/models/dex';
import { fetchTokenBalanceForConnectedWallet } from '../../hooks/dex';
import SwapSettingsModal from '../../components/SwapSettingsModal';
import TokensListModal from '../../components/TokensListModal';
import { useDEXSettingsContext } from '../../contexts/dex/settings';
import routers from '../../assets/routers.json';
import { addToMetamask } from '../../utils';
import successFx from '../../assets/sounds/success_sound.mp3';
import errorFx from '../../assets/sounds/error_sound.mp3';

enum LiquidityRoutes {
  ADD_LIQUIDITY,
  LIQUIDITY_POOLS
}

const LPRoute = ({ routeChange }: any) => {
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState<boolean>(false);
  const { liquidityPoolsForUser } = useAPIContext();
  return (
    <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-full md:w-1/3 md:max-h-[600px] font-Montserrat">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex justify-between items-center border-b-[#4e4e4e]/[.43] border-b-[2px] w-full">
          <div className="flex flex-col justify-start items-start w-8/8">
            <span className="font-[700] text-[25px] text-white">Your Liquidity</span>
            <span className="font-[700] text-[13px] text-white">Remove liquidity to get tokens back</span>
          </div>
          <div className="flex justify-evenly w-1/4">
            <button onClick={() => setIsSettingsModalVisible(true)} className="bg-transparent text-white text-[23px]">
              <FiSettings />
            </button>
            <button className="bg-transparent text-white text-[23px]">
              <IoMdRefreshCircle />
            </button>
          </div>
        </div>
        <div className="mt-[63px] bg-[#0c0b16] rounded-[12px] flex justify-center items-center py-[9px] px-[26px] w-full">
          <div className="flex justify-center items-center w-full flex-col gap-1 px-1">
            {liquidityPoolsForUser.length === 0 ? (
              <span className="text-white">No liquidity found</span>
            ) : (
              <ul className="menu w-full bg-[#000]/70 p-2 rounded-box">
                {_.map(liquidityPoolsForUser, (lp, index) => (
                  <UserLPItem pair={lp} key={index} />
                ))}
              </ul>
            )}
            <span className="text-white">Don&apos;t see a pool you&apos;ve joined?</span>
            <div className="mt-[36px] w-full">
              <button className="border-[#1673b9] border-[2px] rounded-[19px] w-full py-[13px] px-[17px] text-[#1673b9] text-[18px] font-[600] flex justify-center">
                <span>Find other LP tokens</span>
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={routeChange}
          className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[62px] rounded-[19px] text-[18px] text-white w-full mt-[54px]"
        >
          <FiPlus /> <span className="ml-[16px]">Add Liquidity</span>
        </button>
      </div>
      <SwapSettingsModal isOpen={isSettingsModalVisible} onClose={() => setIsSettingsModalVisible(false)} />
    </div>
  );
};

const AddLiquidityRoute = ({ routeChange }: any) => {
  const [val1, setVal1] = useState<number>(0.0);
  const [val2, setVal2] = useState<number>(0.0);
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState<boolean>(false);
  const [isFirstTokensListModalVisible, setIsFirstTokensListModalVisible] = useState<boolean>(false);
  const [isSecondTokensListModalVisible, setIsSecondTokensListModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { tokensListing } = useAPIContext();
  const { chainId, active, library, account } = useWeb3Context();
  const { txDeadlineInMins, gasPrice, playSounds } = useDEXSettingsContext();
  const [firstSelectedToken, setFirstSelectedToken] = useState<ListingModel>({} as ListingModel);
  const [secondSelectedToken, setSecondSelectedToken] = useState<ListingModel>({} as ListingModel);

  const balance1 = fetchTokenBalanceForConnectedWallet(firstSelectedToken, [isLoading]);
  const balance2 = fetchTokenBalanceForConnectedWallet(secondSelectedToken, [isLoading]);

  const [playSuccess] = useSound(successFx);
  const [playError] = useSound(errorFx);

  const addLiquidity = useCallback(async () => {
    try {
      setIsLoading(true);
      const firstIsZero = firstSelectedToken.address === AddressZero;
      const secondIsZero = secondSelectedToken.address === AddressZero;
      const t0 = firstIsZero ? WETH[(chainId as keyof typeof WETH) || 97] : await Fetcher.fetchTokenData(chainId || 97, firstSelectedToken.address);
      const t1 = secondIsZero ? WETH[(chainId as keyof typeof WETH) || 97] : await Fetcher.fetchTokenData(chainId || 97, secondSelectedToken.address);
      const router = routers[chainId as unknown as keyof typeof routers];

      assert.notDeepEqual(t0, t1, 'Identical tokens');

      const value0 = parseUnits(val1.toString(), t0.decimals).toHexString();
      const value1 = parseUnits(val2.toString(), t1.decimals).toHexString();

      const provider = new Web3Provider(library?.givenProvider);
      const token0Contract = new Contract(t0.address, erc20Abi, provider.getSigner());
      const token1Contract = new Contract(t1.address, erc20Abi, provider.getSigner());
      const routerContract = new Contract(router, routerAbi, provider.getSigner());

      if (!firstIsZero) {
        const approvalTx = await token0Contract.approve(router, value0);
        await approvalTx.wait();
        toast(`Router approved to spend ${val1} ${t0.symbol}`, { type: 'info' });
      }

      if (!secondIsZero) {
        const approvalTx = await token1Contract.approve(router, value1);
        await approvalTx.wait();
        toast(`Router approved to spend ${val2} ${t1.symbol}`, { type: 'info' });
      }

      let liquidityTx: any;

      if (firstIsZero || secondIsZero) {
        const paths = firstIsZero ? [t0, t1] : [t1, t0];
        const values = firstIsZero ? [value0, value1] : [value1, value0];
        // Estimate gas first
        const gas = await routerContract.estimateGas.addLiquidityETH(
          paths[1].address,
          values[1],
          values[1],
          values[0],
          account,
          `0x${Math.floor(Date.now() / 1000) + _.multiply(txDeadlineInMins, 60)}`,
          { value: values[0], gasPrice: parseUnits(gasPrice.toString(), 'gwei').toHexString() }
        );
        liquidityTx = await routerContract.addLiquidityETH(
          paths[1].address,
          values[1],
          values[1],
          values[0],
          account,
          `0x${Math.floor(Date.now() / 1000) + _.multiply(txDeadlineInMins, 60)}`,
          { value: values[0], gasLimit: gas.toHexString(), gasPrice: parseUnits(gasPrice.toString(), 'gwei').toHexString() }
        );
      } else {
        const gas = await routerContract.estimateGas.addLiquidity(
          firstSelectedToken.address,
          secondSelectedToken.address,
          value0,
          value1,
          value0,
          value1,
          account,
          `0x${Math.floor(Date.now() / 1000) + _.multiply(txDeadlineInMins, 60)}`,
          { gasPrice: parseUnits(gasPrice.toString(), 'gwei').toHexString() }
        );
        liquidityTx = await routerContract.addLiquidity(
          firstSelectedToken.address,
          secondSelectedToken.address,
          value0,
          value1,
          value0,
          value1,
          account,
          `0x${Math.floor(Date.now() / 1000) + _.multiply(txDeadlineInMins, 60)}`,
          { gasPrice: parseUnits(gasPrice.toString(), 'gwei').toHexString(), gasLimit: gas.toHexString() }
        );
      }

      await liquidityTx.wait();
      setIsLoading(false);

      const pair = Pair.getAddress(t0, t1);

      if (playSounds) playSuccess();

      toast(
        <div className="flex justify-between items-center w-full gap-2">
          <span className="text-white font-poppins text-[16px]">Liquidity added successfully!</span>
          <button
            onClick={() => {
              addToMetamask(pair, 'Quasar-LP', 18);
            }}
            className="btn btn-primary"
          >
            Add LP Token
          </button>
        </div>,
        { type: 'success' }
      );
    } catch (error: any) {
      setIsLoading(false);
      if (playSounds) playError();
      toast(error.message, { type: 'error' });
    }
  }, [
    account,
    chainId,
    firstSelectedToken.address,
    gasPrice,
    library?.givenProvider,
    playError,
    playSounds,
    playSuccess,
    secondSelectedToken.address,
    txDeadlineInMins,
    val1,
    val2
  ]);

  useEffect(() => {
    if (tokensListing.length >= 2) {
      setFirstSelectedToken(tokensListing[0]);
      setSecondSelectedToken(tokensListing[1]);
    }
  }, [tokensListing]);

  return (
    <div className="bg-[#000000]/50 border-[#ffeb82] border-[1px] rounded-[20px] px-[19px] flex justify-center items-center py-[19px] w-full md:w-1/3 md:max-h-[600px] font-Montserrat">
      <div className="flex flex-col justify-evenly items-center w-full">
        <div className="flex justify-between w-full">
          <div>
            <button onClick={routeChange} className="bg-transparent text-white text-[23px]">
              <IoIosUndo />
            </button>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={() => setIsSettingsModalVisible(true)} className="bg-transparent text-white text-[23px]">
              <FiSettings />
            </button>
            <button className="bg-transparent text-white text-[23px] ml-[4px]">
              <IoMdRefreshCircle />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full mt-10 gap-2">
          <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly gap-2">
            <div className="flex justify-between w-full">
              <span className="text-white">From</span>
              <span className="text-white"> Balance: {balance1}</span>
            </div>
            <div className="flex justify-between w-full gap-1">
              <div className="flex justify-between items-center gap-1">
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
          <div className="flex justify-center items-center">
            <button className="bg-transparent text-[#ffffff] text-[30px]">
              <FiPlus />
            </button>
          </div>
          <div className="bg-[#0c0b16] rounded-[12px] flex flex-col w-full px-[23px] py-[9px] justify-evenly gap-2">
            <div className="flex justify-between w-full">
              <span className="text-white">To</span>
              <span className="text-white"> Balance: {balance2}</span>
            </div>
            <div className="flex justify-between w-full gap-1">
              <div className="flex justify-center items-center gap-1">
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
        {!active ? (
          <button className="flex justify-center items-center bg-[#1673b9] py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full mt-[54px]">
            <span>Connect Wallet</span>
          </button>
        ) : (
          <button
            onClick={addLiquidity}
            disabled={isLoading}
            className={`flex justify-center font-Montserrat items-center bg-[#1673b9] btn py-[14px] px-[10px] rounded-[19px] text-[18px] text-white w-full mt-[54px] ${
              isLoading ? 'loading' : ''
            }`}
          >
            <span>Add Liquidity</span>
          </button>
        )}
      </div>
      <ToastContainer position="top-right" theme="dark" autoClose={5000} />
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
  );
};

export default function Liquidity() {
  const [route, setRoute] = useState<LiquidityRoutes>(LiquidityRoutes.LIQUIDITY_POOLS);
  return (
    <div className="w-full overflow-auto flex justify-center items-center">
      {route === LiquidityRoutes.LIQUIDITY_POOLS && <LPRoute routeChange={() => setRoute(LiquidityRoutes.ADD_LIQUIDITY)} />}
      {route === LiquidityRoutes.ADD_LIQUIDITY && <AddLiquidityRoute routeChange={() => setRoute(LiquidityRoutes.LIQUIDITY_POOLS)} />}
    </div>
  );
}
