import React, { createContext, useContext, useState, useCallback } from 'react';

type DEXSettingsContextType = {
  gasPrice: number;
  slippageTolerance: number;
  txDeadlineInMins: number;
  isExpertMode: boolean;
  isLightningMode: boolean;
  playSounds: boolean;
  changeGasPrice: (gp: number) => void;
  changeSlippage: (slippage: number) => void;
  changeTXDeadline: (txDeadline: number) => void;
  switchExpertMode: () => void;
  switchLightningMode: () => void;
  switchSoundsMode: () => void;
};

const DEXSettingsContext = createContext<DEXSettingsContextType>({} as DEXSettingsContextType);

export function DEXSettingsContextProvider({ children }: any) {
  const [gasPrice, setGasPrice] = useState<number>(100);
  const [slippageTolerance, setSlippageTolerance] = useState<number>(0.1);
  const [txDeadlineInMins, setTxDeadlineInMins] = useState<number>(5);
  const [isExpertMode, setIsExpertMode] = useState<boolean>(false);
  const [isLightningMode, setIsLightningMode] = useState<boolean>(false);
  const [playSounds, setPlaySounds] = useState<boolean>(true);

  const changeGasPrice = useCallback((gp: number) => setGasPrice(gp), []);
  const changeSlippage = useCallback((slippage: number) => setSlippageTolerance(slippage), []);
  const changeTXDeadline = useCallback((txDeadline: number) => setTxDeadlineInMins(txDeadline), []);
  const switchExpertMode = useCallback(() => setIsExpertMode((mode) => !mode), []);
  const switchLightningMode = useCallback(() => setIsLightningMode((mode) => !mode), []);
  const switchSoundsMode = useCallback(() => setPlaySounds((mode) => !mode), []);

  return (
    <DEXSettingsContext.Provider
      value={{
        gasPrice,
        slippageTolerance,
        txDeadlineInMins,
        isExpertMode,
        isLightningMode,
        playSounds,
        changeGasPrice,
        changeSlippage,
        changeTXDeadline,
        switchExpertMode,
        switchLightningMode,
        switchSoundsMode
      }}
    >
      {children}
    </DEXSettingsContext.Provider>
  );
}

export function useDEXSettingsContext() {
  return useContext(DEXSettingsContext);
}
