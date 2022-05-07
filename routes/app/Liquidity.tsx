import { SwapWrapper, Liquid } from '../../styles/Swap.style';
import {IoSettingsOutline} from 'react-icons/io5'
import { IoMdRefreshCircle} from 'react-icons/io'
import { AiOutlinePlus} from 'react-icons/ai'

const Liquidity = () => {
  return (
    <>
      <SwapWrapper>
        <Liquid>
          <div className="liquid-con">
            <div className="liquid-header">
            <p>Your Liquidity</p>
            <div className='icon-con'><IoSettingsOutline className='icon'/> <IoMdRefreshCircle className='icon'/></div>
            </div>
            <p className='liquid-text'>Remove liquidity to receive tokens back</p>


          </div>
          <div className="liquid-message">
            <p>No liquidity found</p>
            <p>Don't see a pool you joined?</p>
            <button>Find other LP tokens</button>
          </div>
          <div className="add-liquidity">
            <button><AiOutlinePlus className='icon'/>Add Liquidity Instead</button>
          </div>
        </Liquid>
      </SwapWrapper>
    </>
  );
};

export default Liquidity;
