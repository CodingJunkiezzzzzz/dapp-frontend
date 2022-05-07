import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}
/* ::-webkit-scrollbar {
                display: none;
            } */
:root{
  --text-white:#fff;
  --link-hover:#46AEFC;
  --btn-blue:#1673B9;
  --input-dark:#0C0B16;
  --text-yellow:#FFEB82;
  --text-black:#161525;
  --text-light:#C6C3C3;
  
}

body {
  margin: 0;
  font-family: 'Montserrat','Poppins', sans-serif;
  font-size:14px;
  font-weight:600 ;
  .ant-modal-mask {
    background: rgba(0, 0, 0, 0.3) !important;
    backdrop-filter: blur(3px);
  }
  .ant-modal-content {
    top: 20px;
  }
  .modal-confirm-content {
    margin-left: 0px;
  }
  .anticon-info-circle {
    display: none;
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-header {
    color: var(--text-light);
  }
  .ant-modal-content,
  .ant-modal-header {
    background: var(--text-black);
    color: var(--text-white) !important;
    border: 1px solid rgba(218, 218, 218, 0s);
  }
  .ant-modal-content {
    border-radius: 10px;
  }
  .ant-modal-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .anticon {
    background: #fff;
    border-radius: 50%;
    padding: 5px;
    color: var(--text-black) !important;
  }
  .ant-model-body{
      padding:24px;
    }
  .modal__wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    justify-content:space-between ;
  } 
  }


a{
  text-decoration: none;
}
h1{
  font-family:'Montserrat' ;
}
h2{
  font-family:'Poppins' ;
}
input{
  outline:none ;
  border:none ;
}
p{
  margin:0 ;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  margin-left: auto;
  margin-right: auto;
`;
export const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  color: ${(props) => (props.color ? props.color : '')};
`;

export const LayoutWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url('/images/bg.svg') no-repeat;
  background-position: bottom top;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .container {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.03),
      rgba(0, 0, 0, 0.7)
    );
    width: 100%;
    height: 600px;
    position: absolute;
    bottom: 0;
  }
`;

export const Space = styled.div`
  margin: 10px 0;
  text-align: center;

  .space__wrapper {
    img {
      cursor: pointer;
    }
  }
`;
export const ModalWrapper = styled.div``;
export const ConnectWallet = styled.div`
  display: flex;
  background: rgba(27, 30, 36, 0.2);
  border: 0.5px solid rgba(255, 248, 248, 0.35);
  border-radius: 15px;
  width: 49%;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  transition: all 0.3s;
  font-size: 0.9rem;
  margin-bottom: 8px;
  &:hover {
    border: 1px solid var(--text-yellow);
    color: var(--text-yellow);
  }
`;

export default GlobalStyle;
