import { Modal } from 'antd';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ImageWrapper from '../../Image';
import {
  TokenListModal,
  TokenListWrapper,
  TokenNetworkWrapper,
  TokenSelectWrapper,
} from './TokenList.style';

const TokenList = () => {
  const [showSelectTokenModal, setShowSelectTokenModal] = useState(false);
  return (
    <>
      <Modal
        visible={showSelectTokenModal}
        onOk={() => setShowSelectTokenModal(!showSelectTokenModal)}
        onCancel={() => setShowSelectTokenModal(!showSelectTokenModal)}
        width="400px"
        mask={true}
        className="model__token__list"
      >
        <div className="modal__wrapper">
          <TokenListModal>
            <h1>Select Token</h1>
            <div className="tokenList__search">
              <div className="search">
                <input type="text" placeholder="Search for a token" />
                <FiSearch className="search__icon" />
              </div>
            </div>
            <TokenListWrapper>
              <TokenNetworkWrapper>
                <div className="network__container">
                  <div className="network">
                    <ImageWrapper
                      src="/images/vefi.png"
                      width="30px"
                      height="30px"
                      alt="vefi"
                    />
                  </div>
                  <div className="network">
                    <ImageWrapper
                      src="/images/vefi.png"
                      width="30px"
                      height="30px"
                      alt="vefi"
                    />
                  </div>
                </div>
              </TokenNetworkWrapper>
              <TokenSelectWrapper>
                <div className="token__wrapper">
                  <div className="token__logo">
                    <ImageWrapper
                      src="/images/vefi.png"
                      width="30px"
                      height="30px"
                      alt="vefi"
                    />
                  </div>
                  <div className="token__info">
                    <div className="token__symbol">BTC</div>
                    <div className="token__name">Bitcoin</div>
                  </div>
                </div>
                <div className="token__wrapper">
                  <div className="token__logo">
                    <ImageWrapper
                      src="/images/vefi.png"
                      width="30px"
                      height="30px"
                      alt="vefi"
                    />
                  </div>
                  <div className="token__info">
                    <div className="token__symbol">BTC</div>
                    <div className="token__name">Bitcoin</div>
                  </div>
                </div>
              </TokenSelectWrapper>
            </TokenListWrapper>
          </TokenListModal>
        </div>
      </Modal>
    </>
  );
};

export default TokenList;
