import styled from 'styled-components';
export const FooterWrapper = styled.div`
  width: 100%;
  min-height: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff !important;
  backdrop-filter: blur(1px);
  h1 {
    color: #fff;
  }
  .footer__wrapper {
    padding: 20px 0;
    justify-content: center;
    display: flex;
    gap: 20px;

    a {
      color: #fff;
    }
  }
`;
