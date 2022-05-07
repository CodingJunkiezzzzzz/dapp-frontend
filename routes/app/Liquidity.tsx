import { useState } from 'react';
import { FaCog, FaPlus } from 'react-icons/fa';
import { IoMdRefreshCircle } from 'react-icons/io';
import { Button } from '../../components';
import { LiquidityWrapper } from '../../styles/Liquidity.style';
import { SwapWrapper } from '../../styles/Swap.style';

const Liquidity = () => {
  const [walletConnected] = useState(false);
  return (
    <>
      <SwapWrapper>
        <LiquidityWrapper>
          <div className="liquidity__header">
            <div className="text">
              <h2>Your Liquidity</h2>
              <p>Remove liquidity to receive tokens back</p>
            </div>
            <div className="setting">
              <FaCog />
              <IoMdRefreshCircle />
            </div>
          </div>
          {walletConnected ? (
            <>
              <div className="liquidity__body">
                <div className="not__liquidity__wrapper">
                  <div className="inner__wrapper">
                    <h3>No liquidity found.</h3>
                    <Button
                      label="Find other LP tokens"
                      bg="transparent"
                      border="1px solid var(--btn-blue)"
                      borderRadius="10px"
                      color="var(--text-light)"
                      hoverColor="var(--text-yellow)"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="liquidity__body not__connected">
                <div className="wallet__not__connected">
                  <div className="inner__wrapper">
                    <h3>Connect to a wallet to view your liquidity</h3>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="liquidity__btn">
            <Button
              icon={<FaPlus />}
              label="Add Liquidity Instead"
              bg="var(--btn-blue)"
              border="1px solid var(--text-yellow)"
              borderRadius="10px"
              hoverBg="var(--text-black)"
              color="var(--text-light)"
              hoverColor="var(--text-yellow)"
            />
          </div>
        </LiquidityWrapper>
      </SwapWrapper>
    </>
  );
};

export default Liquidity;
