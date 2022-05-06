import { Input } from 'antd';
import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { ImageWrapper } from '../../components';
import { SwapInputBox } from './TokenInput.style';
const TokenInput = () => {
  return (
    <SwapInputBox>
      <div className="swapInput__container">
        <div className="swap__select">
          <div className="swap__select__top">
            <p>From</p>
          </div>
          <div className="swap__select__info">
            <div className="swap__token__logo">
              <ImageWrapper
                src="/images/vefi.png"
                width="20px"
                height="20px"
                alt="vefi token"
              />
            </div>
            <div className="swap__token__name">
              VEFI{' '}
              <span>
                <FiChevronDown />
              </span>
            </div>
            <div className="swap__token__btn">
              <span>Max</span>
              <span>Half</span>
            </div>
          </div>
        </div>
        <div className="swap__price">
          <div className="swap__select__top right">
            <p>Balance:(wallet not connected)</p>
          </div>
          <div className="swap__price__balance">
            <Input value="0.00" />
          </div>
        </div>
      </div>
    </SwapInputBox>
  );
};

export default TokenInput;
