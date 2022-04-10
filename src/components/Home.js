import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DevStack from './DevStack';
import Workflow from './Workflow';
import ProjectPrev from './ProjectPrev';
import { pIdx, projects } from '../content/projects';
import { eIdx, experiments } from '../content/projects';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';


const NUM_PROJ_TO_SHOW = 2;

export default function Home() {
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <StyledHeader ref={headerRef}>
        <StyledGradient>
          <StyledAside>
            <span className='page-header font-green'>Blockchain</span>
            <span className='page-header font-green'>Developer</span>
            <StyledGroup>
              <p className='body-text'>If you're interested to know more, then let me save you some time by giving you these links.</p>
              <span>
                <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>View Projects</StyledLink>
                <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read About Me (Resume)</StyledLink>
              </span>
            </StyledGroup>
            <StyledGroup>
              <p className='body-text'>Formal projects deepen my expertise, but personal projects widen my horizon. Here, have a look</p>
              <span>
                <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Explore My Experiments</StyledLink>
              </span>
            </StyledGroup>
          </StyledAside>
        </StyledGradient>
      </StyledHeader>

      <Navbar page={"Home"} headerRef={headerRef} />

      <StyledPage>
        <StyledBody>
          <Workflow />
          <DevStack />

          <StyledSection>
            <StyledSectionHeader>
                <div>
                  <StyledSectionName className="section-header">Projects</StyledSectionName>
                  <StyledSecondary className="secondary-text">How I Solve Problems</StyledSecondary>
                </div>
                <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>More Projects</StyledLink>
            </StyledSectionHeader>
            <StyledSectionBody>
              {
                pIdx.slice(0,NUM_PROJ_TO_SHOW).map( i => {
                  return (
                    <StyledProjHolder key={i} >
                      <ProjectPrev key={i} link={`/projects/${i}`} details={projects[i].year + ' - ' + projects[i].network} title={projects[i].name} description={projects[i].description}/>
                    </StyledProjHolder>
                  )
                })
              }
            </StyledSectionBody>
          </StyledSection>

          <StyledSection>
            <StyledSectionHeader>
                <div>
                  <StyledSectionName className="section-header">Experiments</StyledSectionName>
                  <StyledSecondary className="secondary-text">How I Solve Problems</StyledSecondary>
                </div>
                <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>More Experiments</StyledLink>
            </StyledSectionHeader>
            <StyledSectionBody>
              {
                pIdx.slice(0,NUM_PROJ_TO_SHOW).map( i => {
                  return (
                    <StyledProjHolder key={i} >
                      <ProjectPrev key={i} link={`/experiments/${i}`} details={projects[i].year + ' - ' + projects[i].network} title={projects[i].name} description={projects[i].description}/>
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

const StyledHeader = styled.header` 
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  background-image: url(/assets/portfolio-picture.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledGradient = styled.div`
  padding: 0 10vw;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
`;

const StyledAside = styled.aside`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const StyledSectionHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSectionName = styled.p`
  color: ${GREEN};
  margin: 0;
`;

const StyledSectionBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;
`;

const StyledProjHolder = styled.div`
  border-radius: 20px;
  overflow: hidden;
  min-height: 40vh;
  max-height: 60vh;
`;

const StyledSecondary = styled.span`
  display: block;
  margin: 0.5vh 0 4vh 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};
  margin-right: 20px;

  &:hover {
    cursor: pointer;
    color: ${GREEN};
  }
`;

const StyledGreater = styled.span`
  color: ${GREEN};
`;

const StyledGroup = styled.span`
  margin: 20px 0;
`;
