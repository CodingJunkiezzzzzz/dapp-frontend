import { hexValue } from '@ethersproject/bytes';
import { default as rootDAppClient } from './root';
import { ListingModel, SyncModel } from './models/dex';

export const fetchListing = (chainId: number) => {
  return new Promise<Array<ListingModel>>((resolve, reject) => {
    rootDAppClient
      .get(`/dex/listing/${chainId}`)
      .then((res) => resolve(res.data.result))
      .catch(reject);
  });
};

export const fetchPriceHistoryForPair = (pair: string, chainId: number, period?: number) => {
  return new Promise<Array<SyncModel>>((resolve, reject) => {
    rootDAppClient
      .get(`/dex/price_history/${pair}/${hexValue(chainId)}${period ? `?period=${period}` : ''}`)
      .then((res) => resolve(res.data.result))
      .catch(reject);
  });
};
