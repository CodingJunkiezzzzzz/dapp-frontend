import React, { useState } from 'react';
import { FaParachuteBox, FaCrown, FaTelegram } from 'react-icons/fa';
import { FiShield, FiLock, FiAlertTriangle, FiTwitter, FiLayout, FiDollarSign, FiSettings, FiFile, FiNavigation } from 'react-icons/fi';
import { IoIosRocket } from 'react-icons/io';
import { TiArrowShuffle } from 'react-icons/ti';
import { NavLink } from '../components/LaunchPad';
import LaunchpadNavbar from '../components/LaunchpadNavbar';
import { Presales } from '../routes/launchpad';

enum Routes {
  PRESALES,
  PRIVATE_SALES
}

export default function Launchpad() {
  const [route, setRoute] = useState<Routes>(Routes.PRESALES);
  return (
    <div className="flex flex-col md:flex-row w-screen backdrop-opacity-10 backdrop-invert bg-[#05325B]/70 h-screen overflow-auto hidden-scrollbar">
      {/*Nav Bar*/}
      <div className="w-full md:w-80 py-10 px-5 h-[40px] md:h-full bg-[#161525] text-white">
        <LaunchpadNavbar>
          <NavLink
            label="Presales"
            icon={<TiArrowShuffle className="text-white" />}
            dropdown
            onClick={() => setRoute(Routes.PRESALES)}
            active={`${route === Routes.PRESALES ? 'text-[#46aefc]' : 'text-[#fff]'}`}
          />
          <NavLink label="Private sales" icon={<FiDollarSign className="text-white" />} dropdown onClick={() => setRoute(Routes.PRIVATE_SALES)} />
          <NavLink label="Airdrops" icon={<FaParachuteBox className="text-white" />} dropdown />
          <NavLink label="Locks" icon={<FiLock className="text-white" />} dropdown />
          <NavLink label="Utitlty &amp; Tools" icon={<FiSettings className="text-white" />} dropdown />
          <NavLink label="Listing Alerts (Beta)" icon={<FiNavigation className="text-white" />} />
          <NavLink label="KYC &amp; Audit" icon={<FiShield className="text-white" />} />
          {/* <div>
            <NavLink label="Docs" icon={<FiFile className="text-white" />} />
            <div className="flex flex-col ml-10 py-2">
              <div className="flex items-center py-1 text-[12px] font-Montserrat">
                <span className="w-3 h-3 rounded-[50%] bg-[#E7B401] mr-1"></span>
                <span>Gold</span>
              </div>
              <div className="flex py-1 text-[12px] font-Montserrat">
                <span className="w-3 h-3 rounded-[50%] bg-[#FFDDDD] mr-1"></span>
                <span>Platinum</span>
              </div>
              <div className="flex py-1 text-[12px] font-Montserrat">
                <span className="w-3 h-3 rounded-[50%] bg-[#CC00FF] mr-1"></span>
                <span>Diamond</span>
              </div>
            </div>
          </div> */}
        </LaunchpadNavbar>
      </div>
      {/*Main Content*/}
      <div className="w-screen p-10">{route === Routes.PRESALES && <Presales />}</div>
    </div>
  );
}
