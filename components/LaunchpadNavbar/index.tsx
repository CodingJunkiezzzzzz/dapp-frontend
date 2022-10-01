import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { IoIosRocket} from 'react-icons/io';

type ILaunchpadProps = {
  children: React.ReactNode;
};

export default function LaunchpadNavbar({ children }: ILaunchpadProps) {
  return (
    <div className="">
      <div className="md:menu flex flex-row justify-center items-center gap-1 w-full h-full">
        {React.Children.map(children, (child) => (
          <div className="md:w-full mx-[4px] md:my-[12px] h-full">{child}</div>
        ))}
      </div>
    </div>
  );
}
