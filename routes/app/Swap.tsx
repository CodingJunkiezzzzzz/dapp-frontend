import { SwapHeader, SwapWrapper, Inner, Tab } from '../../styles/Swap.style';
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
      <Inner>
        <Tab>
          <div></div>
          <div></div>
          <div></div>
        </Tab>

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ad itaque molestiae veniam ut delectus doloribus repellat aperiam! Maiores laborum natus doloremque, ea assumenda aut voluptatum exercitationem. Ipsum, autem et.
      </Inner>
    ),
    onOk() {},
  });
};

const Swap = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showConnectModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className='modal'
      >
        
     
      </Modal>

    </>
  );
};

export default Swap;
