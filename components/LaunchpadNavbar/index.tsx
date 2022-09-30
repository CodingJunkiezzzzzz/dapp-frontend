import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { IoIosRocket} from 'react-icons/io';

type ILaunchpadProps = {
  children: React.ReactNode;
};

export default function LaunchpadNavbar({ children }: ILaunchpadProps) {
  return (
    <div className="">
      <div className="menu">
        {React.Children.map(children, (child) => (
          <div className="lg:w-full my-[12px]">{child}</div>
        ))}
      </div>
    </div>
  );
}
