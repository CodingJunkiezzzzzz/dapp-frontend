import React from 'react';
import { FiHeart, FiBell } from 'react-icons/fi';
import Image from 'next/image';

type IReuseableCardProps = {
  logo?: any;
  tagName?: string;
  tagColor?: any;
  name: string;
  maxCon: string;
  hardCap: string;
  softCap: string;
  liquidity: string;
  lockTime: string;
};
export default function PresaleItemCard({ logo, tagName, tagColor, name, maxCon, hardCap, softCap, liquidity, lockTime }: IReuseableCardProps) {
  return (
    <>
      <div className="flex w-80 h-auto bg-[#161525] m-1 p-5 rounded-lg lg:w-85">
        <div className="w-full flex flex-col ">
          <div className="flex items-center justify-between h-10 w-full">
            <div className="flex">
              <Image src={logo} alt="brise" width="40px" height="40px" />
            </div>
            <div className="flex w-2/5 justify-around items-center">
              <span className={`flex items-center bg-[${tagColor}] text-white text-[10px] font-[600] rounded p-1`}>{tagName}</span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-[2rem] uppercase text-[#fff] font-[800] pt-2 font-Montserrat">{name}</h2>
            <h3 className="flex items-center justify-between text-[1rem] text-[#fff] capitalize font-[700] pb-2 font-Montserrat">
              <span>Max Contribution:</span>
              <span>{maxCon}</span>
            </h3>
          </div>
          <div className="flex flex-col my-5">
            <span className="text-[#fff] font-Montserrat font-[600] pb-[0.099rem]">Progress (0.00%)</span>
            <span className="border-t-8 border-t-[#1673B9]"></span>
            <div className="flex justify-between text-center pt-[0.099rem]">
              <span className="text-[#fff] font-bold font-Montserrat">0</span>
              <span className="text-[#fff] font-bold font-Montserrat">300</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mt-2">
              <span className="text-[#fff] font-bold font-Montserrat">Hard Cap:</span>
              <span className="text-[#fff] font-bold font-Montserrat">{hardCap}</span>
            </div>
            <div className="flex justify-between  mt-2">
              <span className="text-[#fff] font-bold font-Montserrat">Soft Cap:</span>
              <span className="text-[#fff] font-bold font-Montserrat">{softCap}</span>
            </div>
            <div className="flex justify-between  mt-2">
              <span className="text-[#fff] font-bold font-Montserrat">Liquidity:</span>
              <span className="text-[#fff] font-bold font-Montserrat">{liquidity}</span>
            </div>
            <div className="flex justify-between  mt-2">
              <span className="text-[#fff] font-bold font-Montserrat">Lock Time:</span>
              <span className="text-[#fff] font-bold font-Montserrat">{lockTime}</span>
            </div>
          </div>
          <div className="flex ">
            <div className="flex w-full justify-between items-center mt-5 border-t-[0.03rem] border-t-[#5B5B5B] pt-3">
              <div className="flex flex-col">
                <span className="text-[whitesmoke] text-sm  font-Montserrat">Sales Ends In:</span>
                <span className="text-[whitesmoke] text-sm tracking-[0.16rem]  font-Montserrat">00:56:12:45</span>
              </div>
              <div className="flex items-center justify-between text-[#fff] font-bold text-[1.5rem]">
                <span className="pr-[8px]">
                  <FiHeart />
                </span>
                <span className="bg-[#1673B9] rounded-[7px] p-[0.5rem]">
                  <FiBell />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
