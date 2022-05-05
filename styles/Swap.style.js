import styled from 'styled-components';

export const SwapWrapper = styled.div`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  min-height: 400px;
  border-radius: 20px;

  .swap__container {
    padding: 20px 30px;
  }
`;

export const SwapHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: purple;
  margin-bottom: 5px;

  .icon {
    color: #000 !important;
    font-size: 1.2rem;
    font-weight: 800 !important;
    background: #ffffff;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.25);
    &:first-child {
      width: max-content;
      box-shadow: 1px solid #000;
    }
  }
`;

export const SwapInputBox = styled.div`
  width: 100%;
  min-height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: var(--text-black);

  .swapInput__container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    line-height: 10px;
    gap: 5px;
  }
  .swap__select {
    flex: 1;
  }
  .swap__select__top {
    font-size: 0.5rem;
    color: var(--text-light);
  }
  .right {
    text-align: right;
  }
  .swap__select__info {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .swap__token__logo {
      flex: 0.2;
      display: flex;
      background: red;
    }
    .swap__token__name {
      font-size: 0.8rem;
      color: #fff;
      border-right: 1px solid rgba(252, 252, 252, 0.5);
      padding-right: 5px;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
    .swap__token__btn {
      display: flex;
      flex: 0.2;
      gap: 5px;
      span {
        background: rgba(39, 117, 202, 0.19);
        border-radius: 2px;
        width: max-content;
        padding: 3px;
        font-size: 0.5rem;
        color: var(--text-light);
      }
    }
  }
  .swap__price {
    flex: 1;

    .swap__price__balance {
      text-align: right;
      font-size: 1.2rem;
      color: var(--text-light);
      font-weight: 600;
    }
  }
`;
