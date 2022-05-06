import styled from 'styled-components';

export const SwapWrapper = styled.div`
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  min-height: 380px;
  border-radius: 20px;
  position: relative;
  .swap__container {
    padding: 20px 30px;
  }

  .swap__button {
    width: 100%;

    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      width: 90%;
      border: 1.5px solid var(--text-yellow);
      font-size: 1rem;
      color: #fff;
      font-weight: 600;
    }
  }
`;

export const SwapHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 600;
  margin-bottom: 5px;
  margin-bottom: 15px;

  .icon {
    color: #000;
    font-size: 1.2rem;
    font-weight: 800 !important;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    background: #fff;
    padding: 3px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);

    .ico {
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export const Inner = styled.div`
  .settings-text {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 34px;
    color: #ffffff;
  }
  .close-icon {
    border-radius: 50%;
    background: #ffffff;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 18px;
      font-weight: 30px;
    }
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  div {
    width: 145px;
    height: 40px;
    background: #25233a;
    border-radius: 15px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NormalInput = styled.div`
  margin-top: 20px;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const InputCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #25233a;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;

  input {
    background: transparent;
    flex-grow: 2;
    height: inherit;
  }
  p {
    display: flex;
    align-items: center;
  }
`;
