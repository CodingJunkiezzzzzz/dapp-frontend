import React from 'react';
import _ from 'lodash';
import { PresaleItemCard } from '../../components/LaunchPad';
import { FiPlus, FiBell, FiChevronDown } from 'react-icons/fi';

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
}> = [];

export default function Presales() {
  const AllSalesRoute = () => <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2"></div>;

  return (
    <>
      <div className="flex w-full p-5 m-5">
        <div className="flex items-center w-full flex-wrap">
          <div className="flex bg-red-400 h-[80px] rounded-[15px] bg-[rgba(0,0,0,0.25)] border border-[rgba(199,199,199,0.5)] w-[168px] m-2"></div>
          <div className="flex bg-red-400 h-[80px] rounded-[15px] bg-[rgba(0,0,0,0.25)] border border-[rgba(199,199,199,0.5)] w-[168px] m-2"></div>
          <div className="flex bg-red-400 h-[80px] rounded-[15px] bg-[rgba(0,0,0,0.25)] border border-[rgba(199,199,199,0.5)] w-[168px] m-2"></div>
          <div className="flex bg-red-400 h-[80px] rounded-[15px] bg-[rgba(0,0,0,0.25)] border border-[rgba(199,199,199,0.5)] w-[168px] m-2"></div>
          <div className="flex bg-red-400 h-[80px] rounded-[15px] bg-[rgba(0,0,0,0.25)] border border-[rgba(199,199,199,0.5)] w-[168px] m-2"></div>
        </div>
      </div>
      <div className="flex w-full mb-5">
        <div className="flex w-full items-center justify-evenly text-[#C7C7C7] font-[600] text-[14px] ">
          <div className="flex items-center ">
            <div className="flex mr-3">
              <FiBell />
            </div>
            <div className="font-Montserrat ">All Presales</div>
          </div>
          <div className="flex items-center ">
            <div className="flex mr-3">
              <FiBell />
            </div>
            <div className="font-Montserrat">My Contributions</div>
          </div>
          <div className="flex items-center ">
            <div className="flex mr-3">
              <FiBell />
            </div>
            <div className="font-Montserrat">My Alarms</div>
          </div>
          <div className="flex items-center ">
            <div className="flex mr-3">
              <FiBell />
            </div>
            <div className="font-Montserrat">Created Presales</div>
          </div>
          <div className="flex items-center ">
            <div className="flex mr-3">
              <FiBell />
            </div>
            <div className="font-Montserrat">Favorite</div>
          </div>
        </div>
      </div>
      <div className="flex w-full my-8">
        <div className="flex w-full items-center">
          <div className="flex w-1/4 justify-evenly">
            <button className="flex justify-center p-3 bg-[#ffeb82] items-center rounded-[11px] text-[#000] max-h-[54px]">
              <FiPlus />
              <span className="font-[600] ml-[4px]">Create</span>
            </button>
            <button className="flex justify-center p-3 bg-[#ffeb82] items-center rounded-[11px] text-[#000] max-h-[54px]">
              <span className="font-[600]">Networks</span>
            </button>
          </div>
          <div className="flex w-3/4 p-5 justify-end">
            <div className="dropdown">
              <div className="flex flex-col justify-center items-center">
                <span className="text-[#c7c7c7] font-[600] text-[10px] ml-[-34px] font-Montserrat">Filter By</span>
                <label
                  tabIndex={0}
                  className="border-[#1673b9] border-[1px] p-[5px] px-3 flex justify-center items-center rounded-[5px] text-[#fff] text-[11px] bg-transparent m-2"
                >
                  <span className="font-[600] mr-[4px]">All Status</span>
                  <FiChevronDown />
                </label>
              </div>
              <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-box w-full text-[12px]">
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
            <div className="dropdown">
              <div className="flex flex-col justify-center items-center">
                <span className="text-[#c7c7c7] font-[600] text-[10px] ml-[-34px] font-Montserrat">Sort By</span>
                <label
                  tabIndex={0}
                  className="border-[#1673b9] border-[1px] p-[5px] px-3 flex justify-center items-center rounded-[5px] text-[#fff] text-[11px] bg-transparent m-2"
                >
                  <span className="font-[600] mr-[4px]">No Filter</span>
                  <FiChevronDown />
                </label>
              </div>
              <ul tabIndex={0} className="dropdown-content menu shadow bg-base-100 rounded-box w-full text-[12px]">
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
      <PresaleItemCard
        logo={`/images/brise.png`}
        name="Brise"
        maxCon="1"
        softCap="150"
        hardCap="300"
        liquidity="70%"
        lockTime="80 days"
        tagColor="#FA00FF"
        tagName="Audit"
      />
      <PresaleItemCard
        logo={`/images/vefi.png`}
        name="Vefi"
        maxCon="200"
        softCap="150"
        hardCap="300"
        liquidity="65%"
        lockTime="20 days"
        tagColor="#E18700"
        tagName="Audit"
      />
      <PresaleItemCard
        logo={`/images/phantom.svg`}
        name="phantom"
        maxCon="50"
        softCap="150"
        hardCap="300"
        liquidity="70%"
        lockTime="30 days"
        tagColor="#19B916"
        tagName="upcoming"
      />
    </>
  );
}
