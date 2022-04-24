import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { projects, pIdx } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function About() {
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"About"} headerRef={headerRef} />
      <StyledPage>
        <StyledBody>
          <StyledHeader ref={headerRef}>
            <StyledMotto>
              <StyledWide>Wide in Horizon</StyledWide>
              <StyledDeep>deep<br/>in<br/>skill</StyledDeep>
            </StyledMotto>
          </StyledHeader>
          <StyledSection>
            <aside>
              <h1 className="section-header font-white">Hey, I'm K</h1>
              <h6 className="secondary-text font-green">Blockchain Developer</h6>
              <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>My Resume</StyledLink>
              <p className="body-text font-brown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ultricies eleifend. Nam iaculis arcu tristique felis viverra, eu egestas lectus cursus. Fusce odio nisi, malesuada eget tellus at, finibus accumsan est. Cras </p>
              <h2 className="nav-main-link font-white">Computer Science, UP Diliman</h2>
              <h6 className="secondary-text font-green">Batch 2023</h6>
            </aside>
            <img src="/assets/github.jpg" alt="A Picture of Me" />
          </StyledSection>
        </StyledBody>
      </StyledPage>
      <Footer />
    </>
  );
}

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const StyledBody = styled.div`
  width: 80vw;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
  padding: 20vh 0 0 0;

  color: ${BROWN};

  h1 {
    color: ${WHITE};
  }

  h2 {
    margin: 0;
    color: ${GREEN};
  }

  span {
    color: ${WHITE};
  }
`;
;

const StyledMotto = styled.div`
  font-size: 100px;
  text-align: center;
`;

const StyledWide = styled.div`  
  font-family: Lato Black;
  color: ${WHITE};
`;

const StyledDeep = styled.div`
  font-family: Lato Regular;
  color: ${GREEN};
`;

const StyledSection = styled.section`
  padding: 0 0 20vh 0;
  display: grid;
  grid-gap: 5vw;
  
  grid-template-columns: 1fr 1fr;
  
  aside {
    h1 {
      margin: 0;
    }

    h2 {
      margin: 3vh 0 0 0;
    }

    h6 {
      margin: 0;
    }

    p {
      margin: 0;
    }
  }

  img {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${WHITE};
  margin-right: 20px;
  margin: 3vh 0;

  &:hover {
    cursor: pointer;
    color: ${GREEN};
  }
`;

const StyledGreater = styled.span`
  color: ${GREEN};
`;
