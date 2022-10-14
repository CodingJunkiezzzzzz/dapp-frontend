import React, { createContext, useContext, useState, useEffect } from 'react';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../web3';
import { fetchListing } from '../../api/dex';
import { convertListingToDictionary } from '../../api/models/utils';

type APIContextType = {
  tokensListing: Array<ListingModel>;
  tokensListingAsDictionary: { [key: string]: ListingModel };
};

const APIContext = createContext({} as APIContextType);

export const APIContextProvider = ({ children }: any) => {
  const { chainId } = useWeb3Context();
  const [tokensListing, setTokensListing] = useState<Array<ListingModel>>([]);
  const [tokensListingAsDictionary, setTokensListingAsDictionary] = useState<{ [key: string]: ListingModel }>({});

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

  return <APIContext.Provider value={{ tokensListing, tokensListingAsDictionary }}>{children}</APIContext.Provider>;
};

export const useAPIContext = () => useContext(APIContext);
