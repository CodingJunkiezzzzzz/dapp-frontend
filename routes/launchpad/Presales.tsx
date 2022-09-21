import React from 'react';
import { FiPlus, FiChevronDown } from 'react-icons/fi';
import _ from 'lodash';

enum Subroutes {
  ALL_ITEMS,
  SINGLE_ITEM,
  CREATE_NEW
}

const mockData: Array<{
  name: string;
  maxContribution: number;
  hardCap: number;
  softCap: number;
  liquidity: number;
}> = []

export default function Presales() {
  
  const AllSalesRoute = () => (
    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2">

    </div>
  );

  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col lg:flex-row justify-center w-full lg:w-1/2 gap-2 py-[18px]">
          <button className="flex justify-center px-4 bg-[#ffeb82] items-center rounded-[11px] text-[#000] max-h-[54px]">
            <FiPlus />
            <span className="font-[600] ml-[4px]">Create</span>
          </button>
          <button className="flex justify-center px-4 bg-[#ffeb82] items-center rounded-[11px] text-[#000] max-h-[54px]">
            <span className="font-[600]">Networks</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center w-full lg:w-1/2">
          <div className="dropdown">
            <div className="flex flex-col justify-center items-center">
              <span className="text-[#c7c7c7] font-[#600] text-[12px]">Filter By</span>
              <label
                tabIndex={0}
                className="border-[#1673b9] border-[1px] py-[10px] px-4 flex justify-center items-center rounded-[12px] text-[#fff] bg-transparent m-2"
              >
                <span className="font-[600] mr-[4px]">All Status</span>
                <FiChevronDown />
              </label>
            </div>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
              <li>
                <a>Active</a>
              </li>
              <li>
                <a>Pending</a>
              </li>
              <li>
                <a>Failed</a>
              </li>
              <li>
                <a>Successful</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
