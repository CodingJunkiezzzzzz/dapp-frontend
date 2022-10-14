import React, { MouseEvent } from 'react';

type IToggleButtonProps = {
  isActive: boolean;
  onClick: (event?: MouseEvent) => any;
  children: any;
};

export default function ChartToggleButton({ isActive, onClick, children }: IToggleButtonProps) {
  return (
    <button
      className={`${
        isActive ? 'bg-[#1673b9] rounded-[18px] text-[#ffffff] font-[700]' : 'bg-transparent text-[#1673b9] font-[600]'
      } px-[6px] py-[19px] md:py-[6px] md:px-[19px] flex flex-col md:flex-row justify-center text-[14px] font-Montserrat`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
