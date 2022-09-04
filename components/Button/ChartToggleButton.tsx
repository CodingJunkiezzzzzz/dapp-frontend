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
      } py-[6px] px-[19px] flex justify-center text-[14px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
