import { SwapHeader, SwapWrapper } from '../../styles/Swap.style';
import { FiRotateCw, FiSettings } from 'react-icons/fi';
import {
  Button,
  ImageWrapper,
  SwapTokenInfo,
  TokenInput,
} from '../../components';
import { Space } from '../../styles/GlobalStyle';
import { Modal } from 'antd';
import { useState } from 'react';

const toggleSetting = () => {
  Modal.info({
    content: (
      <div className="inner-modal">
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
};

const Swap = () => {
  const [isConnectModal, setIsConnectModal] = useState(true);

  const showConnectModal = () => {
    setIsConnectModal(true);
  };

  const handleOk = () => {
    setIsConnectModal(false);
  };

  const handleCancel = () => {
    setIsConnectModal(false);
  };

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
              onClick={toggleSetting}
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
                onClick={showConnectModal}
              />
            </div>
          </div>
        </div>
      </SwapWrapper>
      <SwapTokenInfo />
      <Modal
        title="Basic Modal"
        visible={isConnectModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width="400px"
        mask={true}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Swap;
