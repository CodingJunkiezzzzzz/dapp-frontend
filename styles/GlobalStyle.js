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
    background: rgba(0,0,0,0.3) !important;
    backdrop-filter:blur(3px) ;
  }
  .ant-modal-content{
    top:50px;
  }
  .modal-confirm-content{
    margin-left: 0px
  }
  .anticon-info-circle{
    display:none
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
export default GlobalStyle;
