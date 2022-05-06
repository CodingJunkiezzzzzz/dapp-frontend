import { SwapHeader, SwapWrapper, Inner, Tab, NormalInput, InputCon } from '../../styles/Swap.style';
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
import { ModalWrapper } from '../../styles/Modal.style';

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
          width="400px"
          mask={true}
        >
          <div className="modal__wrapper">
            <div className="connect__wallet">
              <div className="wallet__logo">
                <ImageWrapper
                  src="/images/metamask.svg"
                  width="30px"
                  height="30px"
                  alt="metamask"
                />
              </div>
              <div className="wallet__name">Metamask</div>
            </div>
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
        <Inner>
       <div className="header-con">
       <div className="settings-text">Slippage Settings</div>
       </div>
        <Tab>
          <div>{"0.1%"}</div>
          <div>{"0.5%"}</div>
          <div>{"1.0%"}</div>
        </Tab>

              <NormalInput>
              <p>or input  normally</p>
              <InputCon>
              <input type="text" />
              <p>{"0.00%"}</p>
              </InputCon>
              <Button 
              margin='20px 0 0 0'
              bg='#161525'
              label='Save Settings'
              color='#FFFFFF'
              justifyContent='center'
              width='100%'
              borderRadius='10px'
              fontSize='18px'
              fontWeight='700'
              height='40px'
              />
              </NormalInput>

      </Inner>
        </Modal>
      </ModalWrapper>
    </>
  );
};

export default Swap;

