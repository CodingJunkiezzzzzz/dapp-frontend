import React from 'react';
import _ from 'lodash';
import StakingPoolCard from '../../components/Staking/StakingPoolCard';

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

export default function RegularStakingPools() {
  return (
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
}
