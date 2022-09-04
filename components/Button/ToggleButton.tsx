import React, { MouseEvent } from 'react';

type IToggleButtonProps = {
  isActive: boolean;
  onClick: (event?: MouseEvent) => any;
  children: any;
};

export default function ToggleButton({ isActive, onClick, children }: IToggleButtonProps) {
  return (
    <button
      className={`${
        isActive ? 'bg-[#161525] rounded-[18px] text-[#ffeb82] font-[700]' : 'bg-transparent text-[#000] font-[600]'
      } py-[9px] px-[26px] flex justify-center text-[14px]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}