import { useEffect } from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function About() {
  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"About"} />
      <StyledPage>
        <StyledBody>
          <StyledHeader>
            <StyledMotto>
              <StyledWide>Wide in Horizon</StyledWide>
              <StyledDeep>deep<br/>in<br/>skill</StyledDeep>
            </StyledMotto>
          </StyledHeader>
          <StyledSection>
            <img id="img-left" src="/assets/github.jpg" alt="Me" />
            <aside>
              <h1 className="section-header font-white">Hey, I'm K</h1>
              <h6 className="secondary-text font-green">Blockchain Developer</h6>
              <StyledLink href="/assets/kristian_quirapas_resume.pdf" download="Resume" target="_self" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>My Resume</StyledLink>
              <p className="body-text font-brown">I taught myself how to code when I was 9 years old. I learned a lot, but at a slow pace. I wasn't a genius or a prodigy at all. I was merely passionate about learning and building things. I'm also really competitive and harsh with myself, because I hold myself accountable for my life.</p>
              <h2 className="nav-main-link font-white">Computer Science, UP Diliman</h2>
              <h6 className="secondary-text font-green">2018 - 2023</h6>

              <h2 className="nav-main-link font-white">Freelance Developer</h2>
              <h6 className="secondary-text font-green">2015 - Present</h6>

              <h2 className="nav-main-link font-white">Founder and CEO</h2>
              <h6 className="secondary-text font-green">In the future (My life goal)</h6>
            </aside>
            <img id="img-right" src="/assets/github.jpg" alt="Me" />
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
    margin: 5vh 0 0 0;
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

  @media (max-width: 768px) {
    font-size: 34px;
  }
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
      margin: 5vh 0 0 0;
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

  #img-left {
    display: none;
  }

  #img-right {
    display: block;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    #img-left {
      display: block;
    }

    #img-right {
      display: none;
    }
  }
`;

const StyledLink = styled.a`
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
