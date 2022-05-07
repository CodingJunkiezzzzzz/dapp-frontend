import styled from 'styled-components';
import { useRouter } from 'next/router';
import Button from './Button';
import { usePageQuery } from '../hooks';
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
        font-weight: 600;
        &.active {
          background: var(--text-black);
          color: var(--text-yellow);
          font-weight: 600;
        }
      }
    }
  }
`;
const Toggle = () => {
  const router = useRouter();
  const { slug } = usePageQuery();

  return (
    <>
      <ToggleWrapper>
        <div className="toogleContainer">
          <div className="toggleBtn">
            <div className="btn btn1">
              <Button
                label="Swap"
                borderRadius="20px"
                className={slug === 'swap' && 'active'}
                onClick={() => router.push('/swap')}
              />
            </div>
            <div className="btn btn2">
              <Button
                label="Liquidity"
                borderRadius="20px"
                className={slug === 'liquidity' && 'active'}
                onClick={() => router.push('/liquidity')}
              />
            </div>
          </div>
        </div>
      </ToggleWrapper>
    </>
  );
};

export default Toggle;
