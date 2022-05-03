import { useEffect, useState, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

const HiddenEmphasis = styled.span`
  visibility: hidden;
`;

const VisibleEmphasis = styled.span`
  color: ${GREEN};
`;

const StyledNavLinkText = styled.span`
  color: ${WHITE};
`;

export default function Navbar({ page }) {
  const navbar = useRef(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  function getNavLink(text) {
    if (text.toLowerCase() !== page.toLowerCase()) {
      return (
        <>
          <HiddenEmphasis>{"> "}</HiddenEmphasis>
          {text}
          <HiddenEmphasis>{" <"}</HiddenEmphasis>
        </>
      );
    }
    
    return (
      <>
        <VisibleEmphasis>{"> "}</VisibleEmphasis>
          <StyledNavLinkText>{ text }</StyledNavLinkText>
        <VisibleEmphasis>{" <"}</VisibleEmphasis>
      </>
    );
  }

  const toggleNav = () => {
    console.log('toggle');
    setShowMobileNav(prevShowMobileNav => !prevShowMobileNav);
  }

  useEffect(() => {
    return () => {
    };
  }, []);


  if (showMobileNav) {
    return (
      <StyledOverlay>
        <StyledNavLink to="/" className="nav-main-link">{ getNavLink("Home") }</StyledNavLink>
        <StyledNavLink to="/projects" className="nav-main-link">{ getNavLink("Projects") }</StyledNavLink>
        <StyledNavLink to="/experiments" className="nav-main-link">{ getNavLink("Experiments") }</StyledNavLink>
        <StyledNavLink to="/contacts" className="nav-main-link">{ getNavLink("Contacts") }</StyledNavLink>
        <StyledNavLink to="/about" className="nav-main-link">{ getNavLink("About") }</StyledNavLink>
        <section className="body-text font-green text-bold"><p onClick={toggleNav}>x</p></section>
      </StyledOverlay>
    )
  }

  return (
    <>
      <StyledMobileNav>
        <span className="body-text font-white">Kristian Quirapas</span>
        <div onClick={toggleNav} className="nav-main-link font-white">=</div>
      </StyledMobileNav>
      <StyledNav className="nav" ref={navbar}>
        <StyledLogoLink to="/">
          <StyledLogo>
          </StyledLogo>
          <StyledSpan>
            <StyledBrand className="nav-logo">Kristian Quirapas</StyledBrand>
            <StyledSecondary className="secondary-text">Blockchain Developer</StyledSecondary>
          </StyledSpan>
        </StyledLogoLink>
        <StyledDiv2>
          <StyledNavLink to="/projects" className="nav-main-link">{ getNavLink("Projects") }</StyledNavLink>
          <StyledNavLink to="/experiments" className="nav-main-link">{ getNavLink("Experiments") }</StyledNavLink>
          <StyledNavLink to="/contacts" className="nav-main-link">{ getNavLink("Contacts") }</StyledNavLink>
          <StyledNavLink to="/about" className="nav-main-link">{ getNavLink("About") }</StyledNavLink>
        </StyledDiv2>
      </StyledNav>
    </>
  );
}

const StyledOverlay = styled.main`
  padding: 10vh 5vw;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${BLUE};
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;


    p {
      align-self: right;
    }
  }

  section { 
    p {
      padding: 20px;
    }
    p:hover {
      color: ${WHITE};
      cursor: pointer;
    }
  }
`;

const StyledMobileNav = styled.nav`
  z-index: 999;
  display: none;
  background-color: ${BLUE};
  border-bottom: 1px solid ${GREEN};
  color: white;
  box-sizing: border-box;
  padding: 2vh 5vw;
  width: 100vw;
  position: fixed;
  top: 0;

  flex-direction: center;
  justify-content: space-between;
  align-items: center;

  div {
    display: block;
    user-select: none;
    border: 1px solid ${GREEN};
    border-radius: 5px;
    padding: 0.25em 0.5em;

    &:hover {
      background-color: ${GREEN};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledNav = styled.nav`
  background-color: rgba(12, 28, 44, 0.8); // BLUE

  display: none;

  @media (min-width: 768px) {
    display: block;
    z-index: 999;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2vh 1vw;
    box-sizing: border-box;

    transition: border 0.5s, background-color 0.5s;
    transition-timing-function: ease-in-out;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0 20px;
`;

const StyledBrand = styled.div`
  color: ${WHITE};
`;

const StyledDiv2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogoLink = styled(StyledLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:visited {
    color: ${WHITE};
  }
`;

const StyledLogo = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${GREEN};
  border-radius: 10px;
`;

const StyledNavLink = styled(StyledLink)`
  margin: 0 20px;

  color: ${BROWN};

  &:hover ${HiddenEmphasis} {
    visibility: visible;
    color: ${GREEN};
  }
`;

const StyledSecondary = styled.span`
  color: ${BROWN};
`;
