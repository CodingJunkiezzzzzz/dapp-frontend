import { SwapHeader, SwapWrapper, Inner, Tab } from '../../styles/Swap.style';
import { FiRotateCw, FiSettings } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import {
  Button,
  ImageWrapper,
  SwapTokenInfo,
  TokenInput,
} from '../../components';
import { Space } from '../../styles/GlobalStyle';
import { Modal } from 'antd';
import { useState } from 'react';



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
        
     
      </Modal>

    </>
  );
};

export default Swap;


{/* <Inner>
<div className="header-con">
<div className="settings-text">Slippage Settings</div>
 <div className="close-icon"><FaTimes className='icon'/></div>
</div>
 <Tab>
   <div></div>
   <div></div>
   <div></div>
 </Tab>
</Inner> */}
