import { Container } from "../../styles/GlobalStyle";
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
  WalletBtn
} from './Header.style'
import LogoImg from '../../assets/logo.png'
import Image from "next/image";
import {FaBars} from 'react-icons/fa'
import {BiMouse} from 'react-icons/bi'
import Link from "next/link";



const Header = () => {



  return (
    <HeaderWrapper>
    <Container>
      <Nav>
        <MobileWrapper>
        <Logo> <Image src={LogoImg} alt="vefidex logo" /></Logo>
        <ButtonCon>
              <FaBars className="icon"/>
        </ButtonCon>
        </MobileWrapper>
        <NavLinks>
          <Div>
            <SubDiv>
              <NavLink>
                <Link href='/'><a>Swap</a></Link>
                </NavLink>
              <NavLink>
                <Link href='/'><a>Bridge</a></Link>
                </NavLink>
              <NavLink>
                <Link href='/'><a>Lend</a></Link>
                </NavLink>
              <NavLink>
                <Link href='/'><a>LaunchPad</a></Link>
                </NavLink>
            </SubDiv>
            <SubDiv>
              <WalletBtn>
                <BiMouse className="icon"/>
                Connect Wallet
              </WalletBtn>
              </SubDiv>
          </Div>
        </NavLinks>
        
      </Nav>
    </Container>
    </HeaderWrapper>
  );
};

export default Header;
