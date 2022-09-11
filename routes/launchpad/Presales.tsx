import React from 'react';
import { FiPlus, FiChevronDown } from 'react-icons/fi';

enum Subroutes {
  ALL_ITEMS,
  SINGLE_ITEM,
  CREATE_NEW
}

export default function Presales() {
  return (
    <div className="flex flex-col justify-evenly items-center w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col lg:flex-row justify-center w-full lg:w-1/2">
          <button className="flex justify-center py-[10px] px-4 bg-[#ffeb82] items-center rounded-[11px] text-[#000] m-2">
            <FiPlus />
            <span className="font-[600] ml-[4px]">Create</span>
          </button>
          <button className="flex justify-center py-[10px] px-4 bg-[#ffeb82] rounded-[11px] text-[#000] m-2">
            <span className="font-[600]">Networks</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-center w-full lg:w-1/2">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="border-[#1673b9] border-[1px] py-[10px] px-4 flex justify-center items-center rounded-[12px] text-[#fff] bg-transparent m-2"
            >
              <span className="font-[600] mr-[4px]">All Status</span>
              <FiChevronDown />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
