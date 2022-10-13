/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { AddressZero } from '@ethersproject/constants';
import { ChainId, Fetcher, Pair } from 'quasar-sdk-core';
import { abi as erc20Abi } from 'quasar-v1-core/artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json';
import { Interface } from '@ethersproject/abi';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../../contexts/web3';
import rpcCall from '../../api/rpc';
import chains from '../../assets/chains.json';

export const computePair = (token1: ListingModel, token2: ListingModel, chainId: ChainId) => {
  const [pair, setPair] = useState<string>(AddressZero);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (token1 && token2 && token1.address && token2.address) {
      (async () => {
        try {
          const tokenA = await Fetcher.fetchTokenData(chainId, token1.address);
          const tokenB = await Fetcher.fetchTokenData(chainId, token2.address);
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
          const t0 = await Fetcher.fetchTokenData(chainId, tokenA.address);
          const t1 = await Fetcher.fetchTokenData(chainId, tokenB.address);
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
        const t = await Fetcher.fetchTokenData(chainId, token.address);
        const erc20Interface = new Interface(erc20Abi);
        const balanceOf = erc20Interface.encodeFunctionData('balanceOf(address)', [account]);
        const url = chains[chainId as unknown as keyof typeof chains].rpcUrl;
        const call = await rpcCall(url, { method: 'eth_call', params: [{ to: t.address, data: balanceOf }, 'latest'] });
        const bal = _.divide(parseInt(call, 16), 10 ** t.decimals);
        setBalance(bal.toPrecision(4));
      })();
    } else {
      setBalance('0');
    }
  }, [active, account, chainId, token, ...deps]);
  return balance;
};
