import ImageWrapper from '../Image';
import { SwapTokenWrapper, TokenCard } from './SwapTokenInfo.style';
const SwapTokenInfo = () => {
  return (
    <>
      <SwapTokenWrapper>
        <div className="swap__token">
          <div className="token__info">
            <div className="token__info__left">
              <h2>Price info</h2>
            </div>
            <div className="token__info__right">
              <h3>
                1 <span>VEF</span> = 55555.55 <span>BRAISE</span>
              </h3>
            </div>
          </div>
          <div className="token__info">
            <div className="token__info__left">
              <h3>Rate</h3>
            </div>
            <div className="token__info__right">
              <h3>{`<0.1%`}</h3>
            </div>
          </div>
          <div className="token__info">
            <div className="token__info__left">
              <h3>Price impact</h3>
            </div>
            <div className="token__info__right">
              <h3>100%</h3>
            </div>
          </div>
          <div className="token__info">
            <div className="token__info__left">
              <h3>Minimum received</h3>
            </div>
            <div className="token__info__right">
              <h3>-</h3>
            </div>
          </div>
          <div className="token__info">
            <div className="token__info__left">
              <h3>transaction fee</h3>
            </div>
            <div className="token__info__right">
              <h3>0.001 Vef</h3>
            </div>
          </div>
          <TokenCard>
            <div className="token__card__wrapper">
              <div className="token__card__detail">
                <div className="token__card">
                  <span>
                    <ImageWrapper
                      src="/images/vefi.svg"
                      alt="chart"
                      width="20px"
                      height="20px"
                    />
                  </span>
                  <span>VEF</span>
                </div>
                <div className="token__card token__">
                  <span>Price</span>
                  <span>$1.00</span>
                </div>
                <div className="token__card token__">
                  <span>24H%</span>
                  <span className="green">1000%</span>
                </div>
              </div>
              <div className="token__chart">
                <ImageWrapper
                  src="/images/chart.png"
                  alt="chart"
                  width="200px"
                  height="40px"
                />
              </div>
            </div>
          </TokenCard>
        </div>
      </SwapTokenWrapper>
    </>
  );
};

export default SwapTokenInfo;
