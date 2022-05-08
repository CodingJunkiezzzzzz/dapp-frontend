import { Space } from 'antd';
import { useState } from 'react';
import { FaCog, FaPlus } from 'react-icons/fa';
import { FiRotateCw, FiSettings } from 'react-icons/fi';
import { IoMdRefreshCircle } from 'react-icons/io';
import {
  Button,
  ImageWrapper,
  SwapTokenInfo,
  TokenInput,
} from '../../components';
import {
  AddLiquidity,
  LiquidityTokenInfo,
  LiquidityWrapper,
  TokenDisclaimer,
} from '../../styles/Liquidity.style';
import { SwapHeader, SwapWrapper } from '../../styles/Swap.style';

const Liquidity = () => {
  const [walletConnected] = useState(true);
  const [addLiquidity, setAddLiquidity] = useState(true);
  return (
    <>
      <SwapWrapper>
        <LiquidityWrapper>
          <div className="liquidity__header">
            {/* If the add liquidity button is not clicked  */}
            {!addLiquidity || !walletConnected ? (
              <>
                <div className="text">
                  <h2>Your Liquidity</h2>
                  <p>Remove liquidity to receive tokens back</p>
                </div>
                <div className="setting">
                  <FaCog />
                  <IoMdRefreshCircle />
                </div>
              </>
            ) : (
              <>
                <SwapHeader>
                  <div className="icon">
                    <FiRotateCw className="ico" />
                  </div>
                  <div>Add Liquidity to receive LP Tokens</div>
                  <div
                    className="icon"
                    style={{
                      background: 'transparent',
                      boxShadow: 'none',
                      color: '#fff',
                    }}
                    // onClick={() => setIsSlipageModal(!isSlipageModal)}
                  >
                    <FiSettings />
                  </div>
                </SwapHeader>
              </>
            )}
          </div>
          {/* If wallet is not connected  */}
          {!walletConnected ? (
            <>
              <div className="liquidity__body not__connected">
                <div className="wallet__not__connected">
                  <div className="inner__wrapper">
                    <h3>Connect to a wallet to view your liquidity</h3>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* if add liquidity button is clicked or wallet is connected  */}
              {!addLiquidity || walletConnected ? (
                <>
                  <AddLiquidity>
                    <TokenInput type="&nbsp;" />
                    <Space>
                      <div className="space__wrapper">
                        <ImageWrapper
                          src="/images/plus.svg"
                          width="25px"
                          height="25px"
                          alt="toggle"
                        />
                      </div>
                    </Space>
                    <TokenInput type="&nbsp;" />
                    <LiquidityTokenInfo>
                      <div className="liquidity__token__info__wrapper">
                        <div className="title">
                          <h2>Prices and pool share</h2>
                        </div>
                        <div className="details">
                          <div className="info">
                            <span>905.94</span>
                            <span>VEF per BRISE</span>
                          </div>
                          <div className="info">
                            <span>905.94</span>
                            <span>BRISE per VEF</span>
                          </div>
                          <div className="info">
                            <span>0.01%</span>
                            <span>Share of Pool</span>
                          </div>
                        </div>
                      </div>
                    </LiquidityTokenInfo>
                  </AddLiquidity>
                </>
              ) : (
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
              )}
            </>
          )}
          <div className="liquidity__btn">
            <Button
              icon={<FaPlus />}
              label="Add Liquidity Instead"
              bg="var(--btn-blue)"
              borderRadius="20px"
              hoverBg="var(--text-black)"
              color="var(--text-light)"
              hoverColor="var(--text-yellow)"
              onClick={() => setAddLiquidity(!addLiquidity)}
            />
          </div>
        </LiquidityWrapper>
      </SwapWrapper>
      {walletConnected && (
        <>
          <TokenDisclaimer>
            <p>
              By adding liquidity you&apos;ll earn 0.17% of all trades on this
              pair proportional to your share of the pool. fees are added to the
              pool, accrue in real time and can be claimed by withdrawing your
              liquidity.
            </p>
          </TokenDisclaimer>
          <SwapTokenInfo />
        </>
      )}
    </>
  );
};

export default Liquidity;
