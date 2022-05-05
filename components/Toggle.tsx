import styled from 'styled-components';
import Button from './Button';

const ToggleWrapper = styled.div`
  width: 200px;
  margin: 0px auto;
  background: #fff;
  margin-top: 20px;
  border-radius: 15px;

  .toggleBtn {
    display: flex;
    padding: 2px;

    .btn {
      border-radius: 5px;
      width: 50%;
      cursor: pointer;

      button {
        width: 100%;
        background: transparent;
        &.active {
          border: 2px solid var(--text-yellow);
          background: var(--text-black);
          color: var(--text-light);
        }
      }
    }
  }
`;
const Toggle = () => {
  return (
    <>
      <ToggleWrapper>
        <div className="toogleContainer">
          <div className="toggleBtn">
            <div className="btn btn1">
              <Button label="Swap" borderRadius="20px" className="active" />
            </div>
            <div className="btn btn2">
              <Button label="Liquidity" borderRadius="20px" className="" />
            </div>
          </div>
        </div>
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
