import React, { createContext, useContext, useState, useEffect } from 'react';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../web3';
import { fetchLiquidityPoolsForUser, fetchListing } from '../../api/dex';
import { convertListingToDictionary } from '../../api/models/utils';

type APIContextType = {
  tokensListing: Array<ListingModel>;
  tokensListingAsDictionary: { [key: string]: ListingModel };
  liquidityPoolsForUser: Array<string>;
};

const APIContext = createContext({} as APIContextType);

export const APIContextProvider = ({ children }: any) => {
  const { chainId, active, account } = useWeb3Context();
  const [tokensListing, setTokensListing] = useState<Array<ListingModel>>([]);
  const [tokensListingAsDictionary, setTokensListingAsDictionary] = useState<{ [key: string]: ListingModel }>({});
  const [liquidityPoolsForUser, setLiquidityPoolsForUser] = useState<Array<string>>([]);

  useEffect(() => {
    fetchListing(chainId || 97)
      .then(setTokensListing)
      .catch(console.log);
  }, [chainId]);

  useEffect(() => {
    if (tokensListing.length > 0) {
      setTokensListingAsDictionary(convertListingToDictionary(tokensListing));
    }
  }, [tokensListing]);

  useEffect(() => {
    if (active && !!account) {
      fetchLiquidityPoolsForUser(chainId || 97, account)
        .then(setLiquidityPoolsForUser)
        .catch(console.log);
    }
  }, [active, chainId, account]);

  return <APIContext.Provider value={{ tokensListing, tokensListingAsDictionary, liquidityPoolsForUser }}>{children}</APIContext.Provider>;
};

export const useAPIContext = () => useContext(APIContext);
