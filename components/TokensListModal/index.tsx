import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaTimesCircle, FaSearch } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';

export default function TokensListModal({ setIsTokensListModalVisible }: any) {
  return (
    <div className="w-[380px] min-h-[530px] max-h-[530px]  rounded-[15px] transition-all bg-gradient-to-r from-[#FFFFFF8F] via-[#F8F8FFB5] to-[#FFFFFF96]">
      <div className="p-[20px] ">
        <div className="flex items-center justify-between w-full">
          <div className="font-poppins font-[700] text-[22px] leading-[24px] text-[#161525]">Select Token</div>
          <div>
            <FaTimesCircle className="text-[25px] text-[#161525] cursor-pointer" onClick={() => setIsTokensListModalVisible(false)} />
          </div>
        </div>
        <div>
          <form action="" className="flex items-center mt-[20px] w-full bg-[#FCFCFC] rounded-[20px] h-[45px] px-[10px]">
            <input
              type="text"
              className="w-full font-poppins placeholder:font-poppins placeholder:text-[#D8D8D8] outline-none border-none"
              placeholder="Search for a token..."
            />
            <FiSearch className="text-[24px] text-[#D8D8D8]" />
          </form>
        </div>
      </div>
      <div className="flex items-center mt-[20px] w-full space-x-5 ">
        <div className="bg-gradient-to-r from-[#FFFFFF24] via-[#FFFFFF30] to-[#FFFFFF85] p-[15px] rounded-tr-[10px]">
          <div className="h-[25px] w-[25px] bg-white rounded-[5px] flex items-center justify-center shadow">
            <Image src="/images/bitcoin.png" width={13} height={17} alt="" />
          </div>
        </div>
        <div className=" grow   h-full  flex items-center space-x-2">
          <div> <Image src="/images/bitprotocol.png" width={28} height={28} alt="" /></div>
          <div> 
            <p className='font-poppins font-[500] text-[18px] leading-[24px] text-[#161525]'>BTC</p>
            <p className='text-[#3D3C56] font-poppins font-[500] text-[14px] leading-[24px]'>Bitcoin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
