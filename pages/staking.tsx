import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RegularStakingPools, CreateNewStakingPool } from '../routes/staking';

enum Subroutes {
  REGULAR_POOLS,
  CREATE_NEW_POOL,
  SPECIAL_POOLS,
  MY_POOLS
}

export default function Staking() {
  const [activeRoute, setActiveRoute] = useState<Subroutes>(Subroutes.REGULAR_POOLS);
  return (
    <div className="flex flex-col justify-evenly gap-4 items-start w-full h-full bg-radialed overflow-auto hidden-scrollbar">
      <div className="flex flex-col justify-evenly gap-1 px-5">
        <span className="text-[#fff] font-Montserrat font-[700] text-[64px]">Staking Pools</span>
        <span className="text-[#fff] font-Montserrat font-[400] text-[20px]">Stake Tokens To Earn Rewards</span>
      </div>
      <div className="flex flex-1 border-[#ffeb82] border-t rounded-t-[20px] flex-col gap-3 w-full backdrop-opacity-10 backdrop-invert px-[2px] py-[12px] md:px-[82px] md:py-[44px] overflow-auto hidden-scrollbar">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <div className="flex flex-row justify-center items-center gap-3 text-[#fff] font-Montserrat">
            <button
              className={activeRoute === Subroutes.REGULAR_POOLS ? 'border-b-[1px] border-[#0cedfc]' : undefined}
              onClick={() => setActiveRoute(Subroutes.REGULAR_POOLS)}
            >
              Regular Staking Pools
            </button>
            <button
              className={activeRoute === Subroutes.SPECIAL_POOLS ? 'border-b-[1px] border-[#0cedfc]' : undefined}
              onClick={() => setActiveRoute(Subroutes.SPECIAL_POOLS)}
            >
              Special Staking Pools
            </button>
            <button
              className={activeRoute === Subroutes.CREATE_NEW_POOL ? 'border-b-[1px] border-[#0cedfc]' : undefined}
              onClick={() => setActiveRoute(Subroutes.CREATE_NEW_POOL)}
            >
              Create New Pool
            </button>
            <button
              className={activeRoute === Subroutes.MY_POOLS ? 'border-b-[1px] border-[#0cedfc]' : undefined}
              onClick={() => setActiveRoute(Subroutes.MY_POOLS)}
            >
              My Pools
            </button>
          </div>
          <div className="bg-[#000]/[72] rounded-[20px] py-2 flex justify-center items-center gap-1 px-4">
            <FiSearch className="text-[#fff]" />
            <input className="bg-transparent outline-0 w-[120px] text-[#fff]" placeholder="Search pools" />
          </div>
        </div>

        <div className="overflow-auto hidden-scrollbar">
          {activeRoute === Subroutes.REGULAR_POOLS && <RegularStakingPools />}
          {activeRoute === Subroutes.CREATE_NEW_POOL && <CreateNewStakingPool />}
        </div>
      </div>
    </div>
  );
}
