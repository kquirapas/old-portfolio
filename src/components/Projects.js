import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { projects, pIdx } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectPrev from './ProjectPrev';

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
            <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt mi imperdiet tellus semper, sit amet sodales est facilisis. Fusce nec finibus arcu, eget congue odio. Aliquam purus nunc, venenatis sit amet est sed, egestas convallis turpis. Nulla elementum, libero nec consequat iaculis, mauris felis varius augue, iaculis sagittis ipsum turpis eu tortor. Vestibulum vitae massa a metus mollis faucibus. Integer vitae ultricies sem. Sed laoreet arcu in elit molestie, tincidunt tempus nulla tincidunt. Nulla risus magna, tincidunt ut vestibulum a, rhoncus et mi. Vivamus pretium posuere iaculis. Vestibulum in tellus volutpat tellus efficitur eleifend.</p>
          </StyledHeader>
          {
            pIdx.map(i => {
              const currProj = projects[i];
              if (i % 2 === 0) {
                // even
                return (
                  <StyledProjSection key={i} >
                    <aside>
                      <h1 className="section-header" >{ currProj.name }</h1>
                      <span className="secondary-text">{ currProj.network }</span>
                      <p className="body-text">{ currProj.description }</p>
                      <h2 className="nav-main-link">{ currProj.role }</h2>
                      <h3 className="secondary-text">Role</h3>
                    </aside>
                    <ProjectPrev key={i} link={`/projects/${i}`} details={currProj.year + ' - ' + currProj.network} title={currProj.name} description={currProj.description}/>
                  </StyledProjSection>
                )
              }


              // odd: reverse direction if
              return (
                <StyledProjSection key={i} >
                  <ProjectPrev key={i} link={`/projects/${i}`} details={currProj.year + ' - ' + currProj.network} title={currProj.name} description={currProj.description}/>
                  <aside>
                    <h1 className="section-header" >{ currProj.name }</h1>
                    <span className="secondary-text">{ currProj.network }</span>
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
  padding: 10vh 0;

  h1 {
    padding: 0;
    margin: 0;
    color: ${GREEN};
  }

  p {
  }
`;

const StyledProjSection = styled.section`
  margin-bottom: 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3vw;

  aside > * {
    color: ${GREEN};
    padding: 0;
    margin: 0;
  }

  aside > p {
    margin: 2vh 0;
    color: ${BROWN};
  }

  h1 {
    color: ${WHITE};
  }

  h2 {
    color: ${WHITE};
  }
`;
