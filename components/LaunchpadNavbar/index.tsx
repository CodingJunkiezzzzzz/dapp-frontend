import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { IoIosRocket} from 'react-icons/io';

type ILaunchpadProps = {
  children: React.ReactNode;
};

export default function LaunchpadNavbar({ children }: ILaunchpadProps) {
  return (
    <div className="bg-[linear-gradient(180.24deg,_#1673B9_-52.15%,_#125C94_-52.14%,_#161525_26.69%,_#000000_99.76%)] w-full lg:w-1/4">
      <div className="flex flex-row lg:flex-col justify-evenly menu p-4 overflow-y-auto w-full">
        {React.Children.map(children, (child) => (
          <div className="lg:w-full my-[12px]">{child}</div>
        ))}
      </div>
    </div>
  );
}
