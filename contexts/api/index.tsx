import React, { createContext, useContext, useState, useEffect } from 'react';
import { ListingModel } from '../../api/models/dex';
import { useWeb3Context } from '../web3';
import { fetchListing } from '../../api/dex';

type APIContextType = {
  tokensListing: Array<ListingModel>;
};

const APIContext = createContext({} as APIContextType);

export const APIContextProvider = ({ children }: any) => {
  const { chainId } = useWeb3Context();
  const [tokensListing, setTokensListing] = useState<Array<ListingModel>>([]);

  useEffect(() => {
    fetchListing(chainId || 97)
      .then(setTokensListing)
      .catch(console.log);
  }, [chainId]);

  return <APIContext.Provider value={{ tokensListing }}>{children}</APIContext.Provider>;
};

export const useAPIContext = () => useContext(APIContext);
