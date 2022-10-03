import React from 'react';
import { FiHeart, FiBell } from 'react-icons/fi';

type IReuseableCardProps = {
  logo?: string;
  tagName: 'gold' | 'silver' | 'bronze';
  tagColor?: any;
  name: string;
  maxContribution: string;
  hardCap: string;
  softCap: string;
  liquidity: string;
  lockTime: string;
  progress: number;
};
export default function PresaleItemCard({
  logo,
  tagName,
  tagColor,
  name,
  maxContribution,
  hardCap,
  softCap,
  liquidity,
  lockTime,
  progress
}: IReuseableCardProps) {
  return (
    <>
      <div className="flex w-80 h-auto bg-[#161525] m-1 p-5 rounded-lg lg:w-85">
        <div className="w-full flex flex-col ">
          <div className="flex items-center justify-between h-10 w-full">
            <div className="flex">
              <img src={logo} alt={name} className="w-[40px] h-[40px] rounded-[50px]" />
            </div>
            <div className="flex w-2/5 justify-around items-center">
              <span className={`flex items-center ${tagColor} text-white text-[10px] font-[600] rounded p-1`}>{tagName}</span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-[20px] uppercase text-[#fff] font-[800] pt-2 font-Montserrat">{name}</h2>
            <h3 className="flex items-center justify-between text-[1rem] text-[#fff] capitalize font-[700] pb-2 font-Montserrat">
              <span>Max Contribution:</span>
              <span>{maxContribution}</span>
            </h3>
          </div>
          <div className="flex flex-col my-5">
            <span className="text-[#fff] font-Montserrat font-[600] pb-[0.099rem]">Progress ({progress.toFixed(3)}%)</span>
            <div className="h-[8px] bg-[#1673B9]">
              <div className="h-full bg-green-400" style={{ width: progress + '%' }} />
            </div>
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
