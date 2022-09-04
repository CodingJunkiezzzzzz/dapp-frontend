import React, { MouseEvent } from 'react';

type IReusableButtonProps = {
  bgColor?: string;
  width?: string;
  height?: string;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  onClick?: (e?: MouseEvent) => any;
  disabled?: boolean;
  disabledBg?: string;
  children: any;
  otherClasses?: string[];
};

const ReusableButton = ({
  bgColor,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  onClick,
  disabled,
  disabledBg,
  children,
  otherClasses
}: IReusableButtonProps) => (
  <button
    className={`bg-${(disabled ? disabledBg : bgColor) || '[#000000]'} ${width ? `w-${width}` : ''} ${height ? `h-${height}` : ''} py-${
      paddingVertical || '[9px]'
    } px-${paddingHorizontal || '[9px]'} ${otherClasses ? otherClasses.join(' ') : ''}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default ReusableButton;
