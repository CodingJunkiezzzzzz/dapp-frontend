/* eslint-disable react-hooks/rules-of-hooks */
import { AddressZero } from '@ethersproject/constants';
import { ChainId, Fetcher, Pair, Price, TokenAmount } from 'quasar-sdk-core';
import { useEffect, useCallback, useState } from 'react';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../../contexts/web3';

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

export const fetchTokenBalancesConnectedWallet = (tokenA: ListingModel, tokenB: ListingModel) => {
  const [balance0, setBalance0] = useState('0');
  const [balance1, setBalance1] = useState('0');
  const { active, account, chainId } = useWeb3Context();

  useEffect(() => {}, [active, account, chainId]);
};
