import styled from 'styled-components';

export const LiquidityWrapper = styled.div`
  padding: 30px 30px;

  .liquidity__header {
    display: flex;

    .text {
      h2 {
        margin-bottom: 3px;
      }
      p {
        font-size: small;
      }
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      width: 100%;
      padding-bottom: 8px;
    }
    .setting {
      display: flex;
      gap: 10px;
    }
  }
  .liquidity__body {
    background: var(--text-black);
    padding: 35px 30px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0;

    h3 {
      color: var(--text-light);
      font-size: 0.8rem;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
    }
    .not__liquidity__wrapper {
      width: 100%;
      text-align: center;
      padding: 10px;
    }
  }
  .liquidity__btn {
    display: flex;
    justify-content: center;
    padding-top: 35px;
    button {
      width: 90%;
      padding: 15px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 600;
    }
  }
  .not__connected {
    margin-bottom: 50px;
  }
`;

export const AddLiquidity = styled.div`
  .ant-space {
    display: block;
    padding: 5px 0;
  }
  .space__wrapper {
    justify-content: center;
    display: block;
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

export const LiquidityTokenInfo = styled.div`
  .liquidity__token__info__wrapper {
    display: flex;
    flex-direction: column;

    width: 100%;
    .title {
      justify-content: center;
      text-align: center;
    }
    .details {
      display: flex;
      gap: 5px;
      width: 100%;
      justify-content: space-between;
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span:first-child {
          margin-bottom: -3px;
        }
        span:last-child {
          font-size: 0.7rem;
          font-weight: 800;
        }
      }
    }
  }
`;

export const TokenDisclaimer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -25px;
  color: var(--text-black);
  font-size: 0.8rem;
`;
