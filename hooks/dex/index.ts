/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { hexStripZeros } from '@ethersproject/bytes';
import { AddressZero } from '@ethersproject/constants';
import { formatEther } from '@ethersproject/units';
import { ChainId, Fetcher, Pair, TokenAmount, WETH } from 'quasar-sdk-core';
import { abi as erc20Abi } from 'quasar-v1-core/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json';
import { abi as pairAbi } from 'quasar-v1-core/artifacts/contracts/QuasarPair.sol/QuasarPair.json';
import { Interface } from '@ethersproject/abi';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../../contexts/web3';
import rpcCall from '../../api/rpc';
import chains from '../../assets/chains.json';
import { fetchPriceHistoryForPair } from '../../api/dex';

export const computePair = (token1: ListingModel, token2: ListingModel, chainId: ChainId) => {
  const [pair, setPair] = useState<string>(AddressZero);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (token1 && token2 && token1.address && token2.address) {
      (async () => {
        try {
          const url = chains[chainId as unknown as keyof typeof chains].rpcUrl;
          const tokenA = token1.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, token1.address, url);
          const tokenB = token2.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, token2.address, url);
          const address = Pair.getAddress(tokenA, tokenB);
          setPair(address);
          setError(undefined);
        } catch (error: any) {
          setError(error);
        }
      })();
    }
  }, [token1, token2, chainId]);

  return { pair, error };
};

export const getToken1Price = (tokenA: ListingModel, tokenB: ListingModel, chainId: ChainId) => {
  const [token1Price, setToken1Price] = useState<string>('0');

  useEffect(() => {
    if (tokenA && tokenB && tokenA.address && tokenB.address) {
      (async () => {
        try {
          const url = chains[chainId as unknown as keyof typeof chains].rpcUrl;
          const t0 = tokenA.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, tokenA.address, url);
          const t1 = tokenB.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, tokenB.address, url);
          const pair = await Fetcher.fetchPairData(t0, t1);
          setToken1Price(pair.priceOf(t1).toSignificant(4));
        } catch (error: any) {
          console.error(error);
        }
      })();
    }
  }, [tokenA, tokenB, chainId]);

  return token1Price;
};

export const fetchTokenBalanceForConnectedWallet = (token: ListingModel, deps: Array<any> = []) => {
  const [balance, setBalance] = useState<string>('0');
  const { active, account, chainId } = useWeb3Context();
  useEffect(() => {
    if (active && !!account && !!chainId && token && token.address) {
      (async () => {
        const url = chains[chainId as unknown as keyof typeof chains].rpcUrl;
        if (token.address !== AddressZero) {
          const t = await Fetcher.fetchTokenData(chainId, token.address, url);
          const erc20Interface = new Interface(erc20Abi);
          const balanceOf = erc20Interface.encodeFunctionData('balanceOf(address)', [account]);
          const call = await rpcCall(url, { method: 'eth_call', params: [{ to: t.address, data: balanceOf }, 'latest'] });
          const bal = _.divide(parseInt(call, 16), 10 ** t.decimals);
          setBalance(bal.toPrecision(4));
        } else {
          const call = await rpcCall(url, { method: 'eth_getBalance', params: [account, 'latest'] });
          setBalance(parseFloat(formatEther(call)).toPrecision(4));
        }
      })();
    } else {
      setBalance('0');
    }
  }, [active, account, chainId, token, ...deps]);
  return balance;
};

export const fetchChartData = (token0: ListingModel, token1: ListingModel, chainId: ChainId, period: number = 60 * 60 * 24 * 1000) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!!token0 && !!token1 && token0.address && token1.address) {
      (async () => {
        try {
          const url = chains[chainId as unknown as keyof typeof chains].rpcUrl;

          setIsLoading(true);
          const t0 = token0.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, token0.address, url);
          const t1 = token1.address === AddressZero ? WETH[chainId] : await Fetcher.fetchTokenData(chainId, token1.address, url);
          const pair = Pair.getAddress(t0, t1);

          const history = await fetchPriceHistoryForPair(pair, chainId, period);
          let queryInfo: Array<any> = [];

          for (const item of history) {
            const receipt = await rpcCall(url, { method: 'eth_getTransactionReceipt', params: [item.transactionHash] });
            queryInfo = _.concat(queryInfo, {
              blockNumber: receipt.blockNumber,
              reserve0: item.reserve0,
              reserve1: item.reserve1
            });
          }

          let cData: any[] = [];

          for (const query of queryInfo) {
            try {
              const pairAbiInterface = new Interface(pairAbi);
              const token0Hash = pairAbiInterface.getSighash('token0()');

              const block = await rpcCall(url, { method: 'eth_getBlockByNumber', params: [query.blockNumber, false] });
              const token0Call = await rpcCall(url, { method: 'eth_call', params: [{ to: pair, data: token0Hash }, 'latest'] });

              const [asset0, asset1] = t0.address.toLowerCase() === hexStripZeros(token0Call) ? [t0, t1] : [t1, t0];
              const token0Amount = new TokenAmount(asset0, query.reserve0);
              const token1Amount = new TokenAmount(asset1, query.reserve1);

              const pairFromTokenAmount = new Pair(token0Amount, token1Amount);
              const date = new Date(_.multiply(parseInt(block.timestamp), 1000));
              const monthLabels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
              ];
              const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

              cData = _.concat(cData, {
                price: parseFloat(pairFromTokenAmount.priceOf(t0).toSignificant(4)),
                label: () => {
                  if (_.isEqual(period, 60 * 60 * 24 * 1000)) {
                    return date.toLocaleTimeString();
                  } else if (_.isEqual(period, 60 * 60 * 24 * 7 * 1000)) {
                    return `${dayLabels[date.getDay()]}`;
                  } else if (_.isEqual(period, 60 * 60 * 24 * 30 * 1000)) {
                    return `${monthLabels[date.getMonth()]}`;
                  } else {
                    return `${date.getFullYear()}`;
                  }
                }
              });
            } catch (e: any) {
              console.log(e);
            }
          }
          setChartData(cData);
          setIsLoading(false);
          setError(undefined);
        } catch (error: any) {
          setError(error);
        }
      })();
    }
  }, [token0, token1, chainId, period]);
  return { chartData, error, loading };
};
