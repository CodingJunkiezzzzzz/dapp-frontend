import React from 'react';
import Link from 'next/link';
// import { FiChevronRight } from 'react-icons/fi';
// import { IoIosRocket} from 'react-icons/io';

// type ILaunchpadNavbarProps = {
//   isReceeded?: boolean
// };

export default function LaunchpadNavbar({ children }: any) {
  return (
    <div className="bg-gradient-to-b from-[#1673b9]/[52.15%] via-[#125c94]/[-52.14] to-[#000] left-0 flex flex-col py-[40px] text-[#fff] w-full">{children}</div>
  );
}
