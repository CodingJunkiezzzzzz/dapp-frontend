import React, { useState } from 'react';
import { FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';

type IStakingPoolCardProps = {
  apy: number;
  poolId: string;
  token1Symbol: string;
  token2Symbol: string;
  totalStakes: number;
  tvl: number;
  stakingFee: number;
  token1Image: string;
  token2Image: string;
};

export default function StakingPoolCard({
  apy,
  poolId,
  token1Symbol,
  token2Symbol,
  totalStakes,
  tvl,
  stakingFee,
  token1Image,
  token2Image
}: IStakingPoolCardProps) {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  return (
    <div className="card backdrop-blur-[32px] rounded-[20px] bg-[#000]/50 shadow-xl font-Montserrat overflow-auto hidden-scrollbar w-full">
      <div className="card-body w-full py-7 overflow-auto">
        <div className="flex flex-row justify-between items-center w-full gap-3">
          <div className="flex flex-row justify-center gap-1 items-center">
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-8">
                  <img src={token1Image} alt={token1Symbol} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src={token2Image} alt={token2Symbol} />
                </div>
              </div>
            </div>
            <span className="card-title text-[#fff]">
              {token1Symbol}-{token2Symbol}
            </span>
          </div>
          <div className="bg-[#0cedfc]/[.27] px-[2px] py-[2px] rounded-[3px]">
            <span className="text-[#0cedfc] font-[400] text-[12px]">Classic</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-[16px] text-[#fff]">APY</span>
          <span className="text-[#0cedfc] font-[500] text-[15px]">{apy}%</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-[16px] text-[#fff]">Pool ID</span>
          <span className="text-[#fff] font-[500] text-[15px] lowercase">
            {poolId.slice(0, 10) + '...'} <FiExternalLink />
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-[16px] text-[#fff]">Staking Fee</span>
          <span className="text-[#fff] font-[500] text-[15px]">{stakingFee} BRISE</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-[16px] text-[#fff]">Total Stakes</span>
          <span className="text-[#fff] font-[500] text-[15px]">{totalStakes}</span>
        </div>
        <div className="card-actions flex-col w-full justify-evenly gap-3">
          <button className="bg-[#0cedfc] py-[8px] px-[12px] rounded-[10px] w-full">
            <span className="text-[#2b2828] font-[700] text-[15px]">Connect Wallet</span>
          </button>
          <div className="flex justify-center items-center w-full">
            <button className="text-[16px] text-[#fff] flex justify-center gap-1 items-center" onClick={() => setShowDetails((val) => !val)}>
              <span className="font-[400]">Details</span>
              {showDetails ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </div>
          {showDetails && (
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center gap-2 w-full">
                <span className="text-[16px] text-[#fff]">Total {token1Symbol} Staked</span>
                <span className="text-[#fff] font-[500] text-[15px]">4000</span>
              </div>
              <div className="flex justify-between items-center gap-2 w-full">
                <span className="text-[16px] text-[#fff]">Total {token2Symbol} Staked</span>
                <span className="text-[#fff] font-[500] text-[15px]">7000</span>
              </div>
              <div className="flex justify-between items-center gap-2 w-full">
                <span className="text-[16px] text-[#fff]">TVL</span>
                <span className="text-[#fff] font-[500] text-[15px]">${tvl}</span>
              </div>
              <div className="flex justify-between items-center gap-2 w-full">
                <button className="font-[500]">
                  <span className="text-[16px] text-[#0cedfc]">Add {token1Symbol} to Metamask</span>
                </button>
              </div>
              <div className="flex justify-between items-center gap-2 w-full">
                <button className="font-[500]">
                  <span className="text-[16px] text-[#0cedfc]">Add {token2Symbol} to Metamask</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
