import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
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
        <StyledNavLink to="/projects" className="nav-main-link"><span className="material-symbols-rounded font-green">work</span>{ getNavLink("Projects") }</StyledNavLink>
        <StyledNavLink to="/experiments" className="nav-main-link"><span className="material-symbols-rounded font-green">science</span>{ getNavLink("Experiments") }</StyledNavLink>
        <StyledNavLink to="/contacts" className="nav-main-link"><span className="material-symbols-rounded font-green">waving_hand</span>{ getNavLink("Contacts") }</StyledNavLink>
        <StyledNavLink to="/about" className="nav-main-link"><span className="material-symbols-rounded font-green">person</span>{ getNavLink("About") }</StyledNavLink>
        <section className="body-text font-green text-bold"><p onClick={toggleNav}><span className="material-symbols-rounded font-green">cancel</span></p></section>
      </StyledOverlay>
    )
  }

  return (
    <>
      <StyledMobileNav>
        <div>
          <span id="logo" className="material-symbols-rounded font-green">psychology</span>
          <StyledMobileLink to="/" className="body-text font-white">Kristian Quirapas</StyledMobileLink>
        </div>
        <div id="mobile-nav-logo" onClick={toggleNav} className="nav-main-link font-white"><span id="logo" className="material-symbols-rounded font-green">menu</span></div>
      </StyledMobileNav>
      <StyledNav className="nav" ref={navbar}>
        <StyledLogoLink to="/">
          <span id="logo" className="material-symbols-rounded font-green">psychology</span>
          <StyledSpan>
            <StyledBrand className="nav-logo">Kristian Quirapas</StyledBrand>
            <StyledSecondary className="secondary-text font-green">Blockchain Developer</StyledSecondary>
          </StyledSpan>
        </StyledLogoLink>
        <StyledDiv2>
          <StyledNavLink to="/projects" className="nav-main-link"><span className="material-symbols-rounded font-green">work</span>{ getNavLink("Projects") }</StyledNavLink>
          <StyledNavLink to="/experiments" className="nav-main-link"><span className="material-symbols-rounded font-green">science</span>{ getNavLink("Experiments") }</StyledNavLink>
          <StyledNavLink to="/contacts" className="nav-main-link"><span className="material-symbols-rounded font-green">waving_hand</span>{ getNavLink("Contacts") }</StyledNavLink>
          <StyledNavLink to="/about" className="nav-main-link"><span className="material-symbols-rounded font-green">person</span>{ getNavLink("About") }</StyledNavLink>
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
      padding: 20px;
      align-self: right;

      span {
        font-size: 30px;
      }
    }

    p:hover {
      cursor: pointer;

      span {
        color: ${WHITE};
      }
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
    display: flex;
    align-items: center;
  }

  #mobile-nav-logo {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    span {
      font-size: 30px;
    }

    &:hover {
      cursor: pointer;

      span {
        color: ${WHITE};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const StyledMobileLink = styled(Link)`
  padding-left: 2vw;
  color: ${WHITE};
  font-size: 20px;
  text-decoration: none;
`

const StyledNav = styled.nav`
  background-color: rgba(12, 28, 44, 0.8); // BLUE

  display: none;

  #logo {
    font-size: 50px;
  }

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

const StyledNavLink = styled(StyledLink)`
  display: flex;
  align-items: center;
  margin: 0 20px;

  color: ${BROWN};

  &:hover ${HiddenEmphasis} {
    visibility: visible;
    color: ${GREEN};
  }

  span {
    margin-right: 2px;
  }
`;

const StyledSecondary = styled.span`
`;
