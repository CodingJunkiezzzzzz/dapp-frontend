import styled from 'styled-components';

export const TokenListModal = styled.div`
  width: 100%;

  h1 {
    color: var(--text-white);
    font-size: 1.8rem;
  }
  .tokenList__search {
    width: 100%;
  }
  .search {
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(
      190.57deg,
      rgba(255, 255, 255, 0.56) 19.25%,
      rgba(248, 248, 255, 0.71) 54.39%,
      rgba(255, 255, 255, 0.59) 90.02%
    );
    color: rgba(255, 248, 248, 1);
    justify-content: space-between;
    padding: 4px;
    border-radius: 8px;
    border: 0.5px solid rgba(255, 248, 248, 0.1);
    input {
      width: 90%;
      padding: 5px;
      background: transparent;
    }
    .search__icon {
      margin-right: 10px;
    }
  }
`;
export const TokenListWrapper = styled.div`
  max-height: 280px;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
`;
export const TokenNetworkWrapper = styled.div`
  width: 40px;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.2);

  text-align: center;
  ::-webkit-scrollbar {
    display: none;
  }
  .network__container {
    height: 100%;
  }
  .network {
    padding: 2px 0;
    display: flex;
    cursor: pointer;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: rgba(27, 30, 36, 0.8);
    }
  }
`;

export const TokenSelectWrapper = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  .token__wrapper {
    display: flex;
    gap: 10px;
    align-items: center;
    background: rgba(27, 30, 36, 0.2);
    border: 0.5px solid rgba(255, 248, 248, 0.1);
    border-left: 0px;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:last-child {
      border-bottom-right-radius: 10px;
    }
    &:nth-child(odd) {
      border-bottom: 0px;
      border-top: 0px;
    }
    &:first-child {
      border-top-right-radius: 10px;
      border-top: 0.5px solid rgba(255, 248, 248, 0.1);
    }
    &:last-child {
      border-bottom: 0.5px solid rgba(255, 248, 248, 0.1);
    }
    &:nth-child(even) {
      border-top-right-radius: 0px;
    }
    &:hover {
      background: rgba(27, 30, 36, 0.8);
      color: var(--text-yellow);
    }

    .token__symbol {
      text-transform: uppercase;
    }
    .token__name {
      font-size: small;
      text-transform: capitalize;

      font-weight: 200;
    }
    .token__logo {
      display: flex;
      img {
        object-fit: contain;
      }
    }
  }
`;
