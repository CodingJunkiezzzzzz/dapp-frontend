import styled from "styled-components";

// type DivProps= {
//     click : any
//  }

export const HeaderWrapper = styled.div`
  width: 100%;
  background: linear-gradient(90.02deg, #000000 5.44%, #161525 54.52%);
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;

 

  @media screen and (max-width: 900px) {
    padding: 0;
    flex-direction:column ;
  
  }
`;
export const Logo = styled.div``;

export const MobileWrapper = styled.div`

    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        padding:10px ;
      width: 100%;
      justify-content:space-between ;
    }


`;

export const ButtonCon = styled.div`
    display:none ;
    align-items:center ;
    justify-content:center ;

  .icon {
    color: #ffff;
    font-size: 25px;
    cursor: pointer;
  }

  @media screen and (max-width:900px){
      display:flex ;
      
  }
`;
export const NavLinks = styled.div`
padding:0 30px ;
flex-grow:2;
color:#fff ;


@media screen and (max-width:900px){
    padding:0px ;
    left:0 ;
    /* left: ${({click}) => (click? 0: '-100%')}; */
    position: fixed ;
    top:0 ;
    background:#fff ;
    width:250px ;
    height:300px ;
}
`;

export const Div = styled.div`
padding:0 20px ;
display:flex ;
align-items:center ;
justify-content: space-between;

@media screen and (max-width:900px){
    flex-direction:column ;
}

`
export const SubDiv = styled.div`
display:flex ;
align-items:center ;

@media screen and (max-width:900px){
    flex-direction:column ;
}
`
export const NavLink= styled.div`
color:#FFFFFF !important;
font-size:21px ;
margin: 0 20px;


`

export const WalletBtn = styled.div` 
display:flex ;
align-items:center ;
background:#1673B9 ;
padding:10px 20px ;
border-radius:20px ;
cursor: pointer;
font-size:18px ;

.icon{
    color: #ffff;
    font-size: 18px;
}
`
