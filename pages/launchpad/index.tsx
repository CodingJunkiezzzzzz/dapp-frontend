import React, { useState } from 'react';
import { FaParachuteBox, FaCrown, FaTelegram } from 'react-icons/fa';
import { FiChevronRight, FiShield, FiLock, FiAlertTriangle, FiTwitter } from 'react-icons/fi';
import { IoIosRocket } from 'react-icons/io';
import { TiArrowShuffle } from 'react-icons/ti';
import LaunchpadNavbar from '../../components/LaunchpadNavbar';
import { Presales } from '../../routes/launchpad';

enum Routes {
  PRESALES,
  PRIVATE_SALES
}

export default function Launchpad() {
  const [route, setRoute] = useState<Routes>(Routes.PRESALES);
  return (
    <div className="w-screen flex flex-col lg:flex-row justify-start items-center">
      <LaunchpadNavbar>
        <button
          onClick={() => setRoute(Routes.PRESALES)}
          className={`flex justify-between items-center text-[19px] bg-transparent w-full ${
            route === Routes.PRESALES ? 'text-[#46aefc]' : 'text-[#fff]'
          }`}
        >
          <IoIosRocket />
          <span className="font-[600] hidden lg:block">Presales</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button
          onClick={() => setRoute(Routes.PRIVATE_SALES)}
          className={`flex justify-between items-center text-[19px] bg-transparent w-full ${
            route === Routes.PRIVATE_SALES ? 'text-[#46aefc]' : 'text-[#fff]'
          }`}
        >
          <FiShield />
          <span className="font-[600] hidden lg:block">Private Sales</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff]">
          <FaParachuteBox />
          <span className="font-[600] hidden lg:block">Airdrops</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff]">
          <TiArrowShuffle />
          <span className="font-[600] hidden lg:block">Multi-Sender</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff]">
          <FaCrown />
          <span className="font-[600] hidden lg:block">Leaderboard</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff]">
          <FiLock />
          <span className="font-[600] hidden lg:block">Token Locks</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff]">
          <FiAlertTriangle />
          <span className="font-[600] hidden lg:block">Pool Alerts</span>
          <FiChevronRight className="hidden lg:block" />
        </button>
        <div className="border-l-[1px] border-l-[#fff] lg:border-l-0 lg:border-t-[1px] lg:border-t-[#fff] flex flex-row lg:flex-col lg:w-full justify-evenly lg:py-3 px-3 lg:px-0">
          <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff] lg:mt-2 ml-2 lg:ml-0">
            <FaTelegram />
            <span className="font-[600] hidden lg:block">Telegram</span>
            <FiChevronRight className="hidden lg:block" />
          </button>
          <button className="flex justify-between items-center text-[19px] bg-transparent w-full text-[#fff] lg:mt-2 ml-2 lg:ml-0">
            <FiTwitter />
            <span className="font-[600] hidden lg:block">Twitter</span>
            <FiChevronRight className="hidden lg:block" />
          </button>
        </div>
      </LaunchpadNavbar>
      <div className="w-full lg:w-3/4 flex justify-center mx-auto my-auto">{route === Routes.PRESALES && <Presales />}</div>
    </div>
  );
}
