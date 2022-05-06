import styled from 'styled-components';

export const SwapTokenWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  min-height: 400px;
  z-index: 10;
  backdrop-filter: blur(2px);
  .swap__token {
    padding: 20px;
  }
  .token__info {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px 0;

    h2,
    h3 {
      color: #fff;
    }
    h3 {
      font-size: 0.7rem;
      font-weight: 500;
      line-height: 0.8rem;
      text-transform: capitalize;
    }
  }
`;

export const TokenCard = styled.div`
  width: 100%;
  min-height: 50px;
  background: rgba(218, 218, 218, 0.05);
  border: 1px solid rgba(218, 218, 218, 0.25);
  border-radius: 20px;
  display: flex;
  .token__card__wrapper {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .token__card__detail {
    display: flex;
    flex: 1;
    margin-right: 10px;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
  }
  .token__card {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: left;
    .green {
      color: #00ffa3 !important;
    }
    span:nth-child(2) {
      font-weight: 600;
      color: #fff;
    }
    span:nth-child(1) {
      font-weight: 500;
      color: #fff;
    }

    img {
      object-fit: contain;
    }
  }
  .token__chart {
    flex: 0.5;
  }
  .token__ {
    span:nth-child(2) {
      margin-top: 3px;
    }
  }
`;
