import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { IoIosRocket } from 'react-icons/io';
import LaunchpadNavbar from '../../components/LaunchpadNavbar';

export default function Launchpad() {
  return (
    <div className="w-screen flex flex-row justify-start h-full">
      <div className="w-1/4">
        <LaunchpadNavbar>
          <button className="flex justify-between items-center text-[19px] bg-transparent w-full">
            <IoIosRocket />
            <span className="font-[600]">Launches</span>
            <FiChevronRight />
          </button>
        </LaunchpadNavbar>
      </div>
      <div className="w-3/4">
        <span>Hello world</span>
      </div>
    </div>
  );
}
