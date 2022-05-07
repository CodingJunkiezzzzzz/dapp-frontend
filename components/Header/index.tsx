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
} from './Header.style';
import { FaBars } from 'react-icons/fa';
import { BiMouse } from 'react-icons/bi';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../Button';
import ImageWrapper from '../Image';

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
              <Link href="/">
                <a>
                  <ImageWrapper
                    src="/images/logo.png"
                    width="100%"
                    height="40px"
                    alt="vefidex"
                  />
                </a>
              </Link>
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
              <Button
                label="Connect Wallet"
                bg="#1673b9"
                borderRadius="20px"
                padding="5px 15px"
                color="#fff"
                hoverColor="var(--text-yellow)"
                icon={<BiMouse className="icon" />}
              />
            </Div>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
