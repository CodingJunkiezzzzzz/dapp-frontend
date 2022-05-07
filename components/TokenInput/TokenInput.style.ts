import styled from 'styled-components';
export const SwapInputBox = styled.div`
  width: 100%;
  min-height: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: var(--text-black);
  margin-bottom: 10px;
  .swapInput__container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
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
  .left p {
    margin-bottom: 5px;
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
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }
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
      color: #fff;
      font-weight: 600;

      input {
        background: transparent;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        padding: 0;
        font-weight: 800;
        outline: 0;
        text-align: right;
      }
    }
  }
`;
