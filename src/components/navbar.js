import React, {useState} from 'react'
import {Link} from 'gatsby'
import styled from "styled-components";
import MenuButton from "./menu-button";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
      setNav(isOpen => !isOpen)
    }
  ;
  return (
    <NavbarRoot>
      <Container>
        <WrapperLargeScreen>
          <LogoLink to="/">Górka Szczereż</LogoLink>
          <NavSeparator/>
          <NavLink to="/news">Aktualności</NavLink>
          <NavSeparator/>
          <NavLink to="/table">Tabela</NavLink>
          <NavSeparator/>
          <NavLink to="/matches">Mecze</NavLink>
          <NavSeparator/>
          <NavLink to="/history">Historia</NavLink>
        </WrapperLargeScreen>
      </Container>

      <WrapperMobile>
        <LogoLink to="/">Górka Szczereż</LogoLink>

        <MenuButton toggleNav={toggleNav} isOpen={isOpen}/>

      </WrapperMobile>

      <MobileMenu isOpen={isOpen}>
        <NavLink to="/">Strona główna</NavLink>
        <NavLink to="/news">Aktualności</NavLink>
        <NavLink to="/table">Tabela</NavLink>
        <NavLink to="/matches">Mecze</NavLink>
        <NavLink to="/history">Historia</NavLink>
      </MobileMenu>
    </NavbarRoot>
  )
};

const NavbarRoot = styled.div`
  background-color: var(--mainBlack);
  color: var(--mainWhite);
`;

const MobileMenu = styled.div`
  @media only screen and (min-width: 992px) { display: none; }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  a { text-decoration: none; };
  transition: var(--mainTransition);
  height: ${props => props.isOpen ? "180px" : "0px"};
  padding-bottom: ${props => props.isOpen ? "1em" : "0"};
  padding-top: ${props => props.isOpen ? "1em" : "0"};
  padding-right: ${props => props.isOpen ? "1em" : "0"};  
  
  overflow: hidden;
`;

const Wrapper = styled.nav`

  background-color: var(--mainBlack);
  color: var(--mainWhite);

  padding: 0 1rem 0 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 3rem;
  font-size: 1.25rem;
  font-weight: 200;
  a {
    text-decoration: none;
  };
`;

const WrapperMobile = styled(Wrapper)`
  justify-content: space-between;
  @media only screen and (min-width: 992px) {
  display: none;
  }
`;

const WrapperLargeScreen = styled(Wrapper)`
  justify-content: flex-end;
  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: 2.2rem;
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  letter-spacing: 0.025rem;
  color: currentColor;
  &:hover,
  &:focus {
    opacity: var(--mainOpacity);
    color: currentColor;
  }
  &:active {
    transform: scale(0.95);
    opacity: var(--mainOpacity);
    color: currentColor;
  }
`;

const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

const NavSeparator = styled.span`
  flex: 0 0 auto;
  margin: 0 0.9375rem;
  background: currentColor;
  opacity: 0.35;
`;


export default Navbar
