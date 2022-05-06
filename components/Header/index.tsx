import { Container } from '../../styles/GlobalStyle';
import {
  Nav,
  Logo,
  ButtonCon,
  MobileWrapper,
  HeaderWrapper,
  NavLinks,
  Div,
  SubDiv,
  NavLink,
  WalletBtn,
} from './Header.style';
import LogoImg from '../../assets/logo.png';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { BiMouse } from 'react-icons/bi';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // console.log('clicked')
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <MobileWrapper>
            <Logo>
              {' '}
              <Image src={LogoImg} alt="vefidex logo" />
            </Logo>
            <ButtonCon>
              <FaBars className="icon" onClick={handleClick} />
            </ButtonCon>
          </MobileWrapper>
          <NavLinks click={click}>
            <Div>
              <SubDiv>
                <NavLink>
                  <Link href="/swap">
                    <a>Swap</a>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link href="/">
                    <a>Bridge</a>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link href="/">
                    <a>Lend</a>
                  </Link>
                </NavLink>
                <NavLink>
                  <Link href="/">
                    <a>LaunchPad</a>
                  </Link>
                </NavLink>
              </SubDiv>

              <WalletBtn>
                <BiMouse className="icon" />
                Connect Wallet
              </WalletBtn>
            </Div>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
