import Link from 'next/link';
import Container from '../Container';
import { FooterWrapper } from './Footer.style';
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Container maxWidth="400px">
          <div className="footer__wrapper">
            <Link href="/">Discord</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">Telegram</Link>
          </div>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
