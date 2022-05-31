import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DevStack from './DevStack';
import Workflow from './Workflow';
import ProjectPrev from './ProjectPrev';
import { pIdx, projects } from '../content/projects';
import { eIdx, experiments } from '../content/experiments';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';


const NUM_PROJ_TO_SHOW = 2;

export default function Home() {
  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <StyledHeader>
          <StyledAside>
            <span id="headline" className='homepage-header font-green'>Building <span className="font-white">blockchain</span> apps that make <span className="font-white">you</span> the <span className="font-robotoslab font-white">industry leader</span></span>
            <StyledSocials>
              <a href="https://linkedin.com/in/kristian-quirapas-348603213"><img src="/assets/icons/linkedin.svg" alt="LinkedIn Icon" /></a>
              <a href="https://github.com/kquirapas"><img src="/assets/icons/github.svg" alt="Github Icon" /></a>
              <a href="https://www.youtube.com/channel/UCaU88FuhkVKO0PJViRjvTLw"><img src="/assets/icons/youtube.svg" alt="Youtube Icon" /></a>
            </StyledSocials>
            <StyledGroup>
              <p className='body-text'>Resume? Projects? Say no more:</p>
              <span>
                <StyledLink to="/projects" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>View Projects</StyledLink>
                <StyledLink to="/about" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read About Me (Resume)</StyledLink>
              </span>
            </StyledGroup>
            <StyledGroup>
              <p className='body-text'>Want something personal? Check this link:</p>
              <span>
                <StyledLink to="/experiments" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Explore My Experiments</StyledLink>
              </span>
            </StyledGroup>
          </StyledAside>
      </StyledHeader>

      <Navbar page={"Home"} />

      <StyledPage>
        <StyledBody>
          <DevStack />
          <Workflow />

          <StyledSection>
            <StyledSectionHeader>
                <div>
                  <StyledSectionName className="section-header">Worried about my experience?</StyledSectionName>
                  <StyledSecondary className="secondary-text">Check some of these works</StyledSecondary>
                </div>
                <StyledLink to="/projects" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>More Projects</StyledLink>
            </StyledSectionHeader>
            <StyledSectionBody>
              {
                pIdx.slice(0,NUM_PROJ_TO_SHOW).map( i => {
                  return (
                    <StyledProjHolder key={i} >
                      <ProjectPrev key={i} link={`/projects/${i}`} details={projects[i].year + ' - ' + projects[i].network} title={projects[i].name} description={projects[i].description} thumbnail={projects[i].thumbnail} />
                    </StyledProjHolder>
                  )
                })
              }
            </StyledSectionBody>
          </StyledSection>

          <StyledSection>
            <StyledSectionHeader>
                <div>
                  <StyledSectionName className="section-header">Want to see something personal?</StyledSectionName>
                  <StyledSecondary className="secondary-text">See some works I played with</StyledSecondary>
                </div>
                <StyledLink to="/experiments" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>More Experiments</StyledLink>
            </StyledSectionHeader>
            <StyledSectionBody>
              {
                eIdx.slice(0,NUM_PROJ_TO_SHOW).map( i => {
                  return (
                    <StyledProjHolder key={i} >
                      <ProjectPrev key={i} link={`/experiments/${i}`} details={experiments[i].year + ' - ' + experiments[i].network} title={experiments[i].name} description={experiments[i].description} thumbnail={experiments[i].thumbnail}/>
                    </StyledProjHolder>
                  )
                })
              }
            </StyledSectionBody>
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

const StyledBody = styled.main`
  width: 80vw;
`;

const StyledSection = styled.section`
  padding: 10vh 0;
`;

const StyledSocials = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: start;

  img {
    display: block;
    width: 30px;
    margin: 1vw 0.5vw;
    filter: invert(97%) sepia(22%) saturate(34%) hue-rotate(85deg) brightness(117%) contrast(107%);
    transition: transform 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
      transform: translateY(-10px) scale(1.1);
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    img {
      margin: 3vh 2vw;
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const StyledAside = styled.aside`
  box-sizing: border-box;
  padding: 30px;
  max-width: 900px;
  text-align: center;
  box-sizing: border-box;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #headline {
    font-size: 60px;
  }
  
  @media (max-width: 768px) {
    margin-top: 20vh;
    justify-content: start;
    text-align: center;
    align-items: center;

    #headline {
      font-size: 50px;
    }
  }

  @media (max-width: 411px) {
    #headline {
      font-size: 34px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};

  &:hover {
    cursor: pointer;
    color: ${GREEN};
  }
`;


const StyledSectionHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    ${StyledLink} {
      margin-bottom: 5vh;
    }
  }

  @media (max-width: 411px) {

  }
`;

const StyledSectionName = styled.p`
  color: ${GREEN};
  margin: 0;
`;

const StyledSectionBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;

  @media (max-width: 768px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
  }
`;

const StyledProjHolder = styled.div`
  height: 40vh;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
    height: 70vh;
  }

  @media (max-width: 411px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
    height: 70vh;
  }
`;

const StyledSecondary = styled.span`
  display: block;
  margin: 0.5vh 0 4vh 0;
`;

const StyledGreater = styled.a`
  color: ${GREEN};
  padding: 0;
`;

const StyledGroup = styled.span`
  margin: 20px 0;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ${StyledLink} {
      margin: 10px;
    }
  }

  @media (max-width: 768px) {
    span {
      grid-template-columns: 1fr;
    }
  }
`;
