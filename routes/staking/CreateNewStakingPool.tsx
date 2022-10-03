import React from 'react';

export default function CreateNewStakingPool() {
  return (
    <div className="flex justify-center items-center w-full px-4 py-4">
      <div className="card rounded-[20px] bg-[#000]/50 shadow-xl font-Montserrat overflow-auto hidden-scrollbar w-full md:w-2/6 backdrop-blur-[60px] py-4">
        <form className="card-body w-full font-poppins">
          <span className="card-title text-white font-[800]">Create New Staking Pool</span>
          <div className="flex flex-col w-full justify-start items-start gap-1">
            <span className="text-white font-[500]">Token 1 Address</span>
            <input
              required
              className="outline-0 w-full bg-[#000]/70 py-4 px-4 rounded-[12px] text-white"
              placeholder="Enter the first token address"
            />
            <span className="text-info text-[12px]">The contract address of the first token in this pool.</span>
          </div>
          <div className="flex flex-col w-full justify-start items-start gap-1">
            <span className="text-white font-[500]">Token 2 Address</span>
            <input
              required
              className="outline-0 w-full bg-[#000]/70 py-4 px-4 rounded-[12px] text-white"
              placeholder="Enter the second token address"
            />
            <span className="text-info text-[12px]">The contract address of the second token in this pool.</span>
          </div>
          <div className="flex flex-col w-full justify-start items-start gap-1">
            <span className="text-white font-[500]">Token 1 APY</span>
            <input
              required
              type="number"
              className="outline-0 w-full bg-[#000]/70 py-4 px-4 rounded-[12px] text-white"
              placeholder="Enter the first token APY"
            />
            <span className="text-info text-[12px]">
              Percentage of the first token that would be given as a reward annually when the second token is staked.
            </span>
          </div>
          <div className="flex flex-col w-full justify-start items-start gap-1">
            <span className="text-white font-[500]">Token 2 APY</span>
            <input
              required
              type="number"
              className="outline-0 w-full bg-[#000]/70 py-4 px-4 rounded-[12px] text-white"
              placeholder="Enter the second token APY"
            />
            <span className="text-info text-[12px]">
              Percentage of the second token that would be given as a reward annually when the first token is staked.
            </span>
          </div>
          <button className="bg-[#0cedfc] py-[12px] px-[12px] rounded-[10px] w-full">
            <span className="text-[#2b2828] font-[700] text-[15px]">Connect Wallet</span>
          </button>
        </form>
      </div>
    </div>
  );
}
