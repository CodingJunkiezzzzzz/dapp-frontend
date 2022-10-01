import React from 'react';
import _ from 'lodash';
import { FiSearch } from 'react-icons/fi';
import StakingPoolCard from '../components/Staking/StakingPoolCard';

const mockData: Array<{
  apy: number;
  poolId: string;
  token1Symbol: string;
  token2Symbol: string;
  totalStakes: number;
  tvl: number;
  stakingFee: number;
  token1Image: string;
  token2Image: string;
}> = [
  {
    apy: 8,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'VEF',
    token2Symbol: 'PHA',
    totalStakes: 9000,
    tvl: 780000,
    stakingFee: 4,
    token1Image: '/images/vefi.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 14,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBRISE',
    token2Symbol: 'PHA',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/brise.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 14,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBRISE',
    token2Symbol: 'PHA',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/brise.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 8,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'VEF',
    token2Symbol: 'PHA',
    totalStakes: 9000,
    tvl: 780000,
    stakingFee: 4,
    token1Image: '/images/vefi.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 8,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'VEF',
    token2Symbol: 'PHA',
    totalStakes: 9000,
    tvl: 780000,
    stakingFee: 4,
    token1Image: '/images/vefi.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 14,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBRISE',
    token2Symbol: 'PHA',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/brise.png',
    token2Image: '/images/phantom.svg'
  },
  {
    apy: 74,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBTC',
    token2Symbol: 'VEF',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/bitcoin.png',
    token2Image: '/images/vefi.png'
  },
  {
    apy: 74,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBTC',
    token2Symbol: 'VEF',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/bitcoin.png',
    token2Image: '/images/vefi.png'
  },
  {
    apy: 74,
    poolId: '0xb69DB7b7B3aD64d53126DCD1f4D5fBDaea4fF578',
    token1Symbol: 'WBTC',
    token2Symbol: 'VEF',
    totalStakes: 19000,
    tvl: 78000,
    stakingFee: 5,
    token1Image: '/images/bitcoin.png',
    token2Image: '/images/vefi.png'
  }
];

export default function Staking() {
  const AllStakingPools = () => (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 flex-nowrap md:flex-wrap w-full flex-grow px-[4px]">
      {_.map(mockData, (data, index) => (
        <div className="px-[3px] py-[4px] w-full md:w-1/5" key={index}>
          <StakingPoolCard
            token1Image={data.token1Image}
            token2Image={data.token2Image}
            token1Symbol={data.token1Symbol}
            token2Symbol={data.token2Symbol}
            apy={data.apy}
            poolId={data.poolId}
            stakingFee={data.stakingFee}
            totalStakes={data.totalStakes}
            tvl={data.tvl}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col justify-evenly gap-4 items-start w-full h-full bg-radialed overflow-auto hidden-scrollbar">
      <div className="flex flex-col justify-evenly gap-1 px-5">
        <span className="text-[#fff] font-Montserrat font-[700] text-[64px]">Staking Pools</span>
        <span className="text-[#fff] font-Montserrat font-[400] text-[20px]">Stake Tokens To Earn Rewards</span>
      </div>
      <div className="flex flex-1 border-[#ffeb82] border-t rounded-t-[20px] flex-col gap-3 w-full backdrop-opacity-10 backdrop-invert px-[2px] py-[12px] md:px-[82px] md:py-[44px] overflow-auto hidden-scrollbar">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <div className="flex flex-row justify-center items-center gap-3 text-[#fff] font-Montserrat">
            <button className="border-b-[1px] border-[#0cedfc]">Regular Staking Pools</button>
            <button className="border-b-[1px] border-[#0cedfc]">Special Staking Pools</button>
            <button className="border-b-[1px] border-[#0cedfc]">Create New Pool</button>
            <button className="border-b-[1px] border-[#0cedfc]">My Pools</button>
          </div>
          <div className="bg-[#000]/[72] rounded-[20px] py-2 flex justify-center items-center gap-1 px-4">
            <FiSearch className="text-[#fff]" />
            <input className="bg-transparent outline-0 w-[120px] text-[#fff]" placeholder="Search pools" />
          </div>
        </div>

        <div className="overflow-auto hidden-scrollbar">
          <AllStakingPools />
        </div>
      </div>
    </div>
  );
}
