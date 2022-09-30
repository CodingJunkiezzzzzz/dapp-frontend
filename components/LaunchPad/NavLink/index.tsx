import { FiChevronDown } from 'react-icons/fi';
import React, { MouseEvent } from 'react';

type INavLinkProps = {
  label?: string;
  icon?: any;
  dropdown?: boolean;
  onClick?: (e?: MouseEvent) => any;
  active?: any;
};

export default function NavLink({ label, icon, dropdown, onClick, active }: INavLinkProps) {
  return (
    <>
      <div
        className={`flex w-full items-center justify-between cursor-pointer text-[14px] text-[#C7C7C7] font-[600] font-Montserrat hover:text-[green] ${active}`}
        onClick={onClick}
      >
        <div className="flex w-50 items-center justify-start">
          <span className="mr-5">{icon && icon}</span>
          <span>{label}</span>
        </div>
        <div> {dropdown && <FiChevronDown className="text-white" />}</div>
      </div>
    </>
  );
}
