import { SwapHeader, SwapInputBox, SwapWrapper } from '../../styles/Swap.style';
import { FiRotateCw, FiSettings, FiChevronDown } from 'react-icons/fi';

const Swap = () => {
  return (
    <>
      <SwapWrapper>
        <div className="swap__container">
          <SwapHeader>
            <div className="icon">
              <FiRotateCw />
            </div>
            <div>Vefi dex</div>
            <div className="icon">
              <FiSettings />
            </div>
          </SwapHeader>
          <SwapInputBox>
            <div className="swapInput__container">
              <div className="swap__select">
                <div className="swap__select__top">
                  <p>From</p>
                </div>
                <div className="swap__select__info">
                  <div className="swap__token__logo">
                    <FiRotateCw />
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
                <div className="swap__price__balance">0.00</div>
              </div>
            </div>
          </SwapInputBox>
        </div>
      </SwapWrapper>
    </>
  );
};

export default Swap;
