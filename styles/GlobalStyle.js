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
  transition: all 0.5s ease;
  font-weight:600 ;
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
  background: url('/images/dex_bg.svg') no-repeat;
  background-position: bottom top;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .container {
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    filter: blur(80px);
  }
`;
export default GlobalStyle;
