import { SwapHeader, SwapWrapper } from '../../styles/Swap.style';
import { FiRotateCw, FiSettings } from 'react-icons/fi';
import {
  Button,
  ImageWrapper,
  NetworkChain,
  SwapTokenInfo,
  TokenInput,
} from '../../components';
import { ModalWrapper, Space } from '../../styles/GlobalStyle';
import { Modal } from 'antd';
import { useState } from 'react';

const Swap = () => {
  const [isConnectModal, setIsConnectModal] = useState(true);
  const [isSlipageModal, setIsSlipageModal] = useState(false);

  return (
    <>
      <SwapWrapper>
        <div className="swap__container">
          <SwapHeader>
            <div className="icon">
              <FiRotateCw className="ico" />
            </div>
            <div>Vefi Dex</div>
            <div
              className="icon"
              style={{
                background: 'transparent',
                boxShadow: 'none',
                color: '#fff',
              }}
              onClick={() => setIsSlipageModal(!isSlipageModal)}
            >
              <FiSettings />
            </div>
          </SwapHeader>
          <TokenInput />
          <div>
            <Space>
              <div className="space__wrapper">
                <ImageWrapper
                  src="/images/toggle.svg"
                  width="30px"
                  height="30px"
                  alt="toggle"
                />
              </div>
            </Space>
            <TokenInput />
            <Space />
            <div className="swap__button">
              <Button
                label="Connect Wallet"
                padding="15px"
                borderRadius="20px"
                bg="var(--btn-blue)"
                hoverBg="var(--text-black)"
                onClick={() => setIsConnectModal(!isConnectModal)}
              />
            </div>
          </div>
        </div>
      </SwapWrapper>
      <SwapTokenInfo />
      <ModalWrapper>
        {/* Connect Wallet */}
        <Modal
          visible={isConnectModal}
          onOk={() => setIsConnectModal(!isConnectModal)}
          onCancel={() => setIsConnectModal(!isConnectModal)}
          width="350px"
          mask={true}
        >
          <div className="modal__wrapper">
            <NetworkChain
              src="/images/metamask.svg"
              width="30px"
              height="30px"
              alt="metamask"
              label="Metamask"
            />
            <NetworkChain
              src="/images/trustwallet.svg"
              width="30px"
              height="30px"
              alt="Trustwallet"
              label="Trustwallet"
            />
            <NetworkChain
              src="/images/vefi.svg"
              width="30px"
              height="30px"
              alt="Vefinetwork"
              label="Vefinetwork"
            />
            <NetworkChain
              src="/images/wallet.svg"
              width="30px"
              height="30px"
              alt="Wallet"
              label="Wallet"
            />
            <NetworkChain
              src="/images/coin98.svg"
              width="30px"
              height="30px"
              alt="Coin98"
              label="Coin98"
            />
            <NetworkChain
              src="/images/phantom.svg"
              width="30px"
              height="30px"
              alt="Phantom"
              label="Phantom"
            />
          </div>
        </Modal>
        {/* Slippage Setting */}
        <Modal
          visible={isSlipageModal}
          onOk={() => setIsSlipageModal(!isSlipageModal)}
          onCancel={() => setIsSlipageModal(!isSlipageModal)}
          width="400px"
          mask={true}
        >
          place the butons here
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default Swap;
