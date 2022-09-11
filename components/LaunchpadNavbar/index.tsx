import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { IoIosRocket} from 'react-icons/io';

type ILaunchpadProps = {
  children: React.ReactNode;
};

export default function LaunchpadNavbar({ children }: ILaunchpadProps) {
  return (
    <div className="bg-[#000] w-full lg:w-1/4">
      <div className="flex flex-row lg:flex-col justify-evenly menu p-4 overflow-y-auto w-full">
        {React.Children.map(children, (child) => (
          <div className="lg:w-full my-[12px]">{child}</div>
        ))}
      </div>
    </div>
  );
}
