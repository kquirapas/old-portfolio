import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { projects, pIdx } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function Projects() {
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"Projects"} headerRef={headerRef} />
      <StyledPage>
        <StyledBody>
          <StyledHeader ref={headerRef}>
            <h1 className="page-header">Projects</h1>
          </StyledHeader>
          {
            pIdx.map(i => {
              const currProj = projects[i];
              if (i % 2 === 0) {
                // even
                return (
                  <StyledProjSection key={i} >
                    <aside>
                      <StyledAsideHeader>
                        <div>
                          <h1 className="section-header" >{ currProj.name }</h1>
                          <span className="secondary-text">{ currProj.network }</span>
                        </div>
                        <StyledLink to={`/projects/${i}`} className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read more about the Project</StyledLink>
                      </StyledAsideHeader>
                      <p className="body-text">{ currProj.description }</p>
                      <h2 className="nav-main-link">{ currProj.role }</h2>
                      <h3 className="secondary-text">Role</h3>
                    </aside>
                    <StyledProject>
                      <img src={currProj.thumbnail} />
                      <div className="gradient-div-right"></div>
                    </StyledProject>
                  </StyledProjSection>
                )
              }

              return (
                <StyledProjSection key={i} >
                  <StyledProject>
                    <img src={currProj.thumbnail} />
                    <div className="gradient-div-left"></div>
                  </StyledProject>
                  <aside>
                    <StyledAsideHeader>
                      <div>
                        <h1 className="section-header" >{ currProj.name }</h1>
                        <span className="secondary-text">{ currProj.network }</span>
                      </div>
                      <StyledLink to="/" className="nav-main-link"><StyledGreater>{"> "}</StyledGreater>Read more about the Project</StyledLink>
                    </StyledAsideHeader>
                    <p className="body-text">{ currProj.description }</p>
                    <h2 className="nav-main-link">{ currProj.role }</h2>
                    <h3 className="secondary-text">Role</h3>
                  </aside>
                </StyledProjSection>
                )
            })
          }
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
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3vw;
  padding: 20vh 0;

  h1 {
    padding: 0;
    margin: 0;
    color: ${GREEN};
  }

  p {
  }
`;

const StyledProjSection = styled.section`
  padding: 0 0 20vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;

  aside > * {
    color: ${GREEN};
    padding: 0;
    margin: 0;
  }

  aside > p {
    text-align: justify;
    margin: 2vh 0;
    color: ${BROWN};
  }

  h2 {
    color: ${WHITE};
  }
`;

const StyledAsideHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    margin: 0;
    color: ${WHITE};
  }

`;

const StyledGreater = styled.span`
  color: ${GREEN};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};

  &:hover {
    cursor: pointer;
    color: ${GREEN};
  }
`;

const StyledProject = styled.aside`
  position: relative;
  background-color: ${BROWN};

  img {
    width: 100%;
    height: 100%;
  }

  div.gradient-div-right {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
  }

  div.gradient-div-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, rgba(12,28,44,1) 2%, rgba(12,28,44,0) 36%);
  }
`;
