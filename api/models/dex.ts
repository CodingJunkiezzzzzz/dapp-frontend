export interface ListingModel {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export interface SyncModel {
  pair: string;
  reserve0: string;
  reserve1: string;
  transactionHash: string;
  chainId: string;
  timestamp: number;
}
