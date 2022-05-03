import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { projects } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';
import Markdown from './Markdown';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function ProjContent() {
  const { idx } = useParams();

  const dateAndChain = `${projects[idx].month} ${projects[idx].day}, ${projects[idx].year} | ${projects[idx].network}`;

  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"Projects"} />
      <StyledPage>
        <StyledBody>
          <StyledHeader>
            <StyledLink to="/projects" className="nav-main-link"><StyledLess>{"< "}</StyledLess>Go to Projects</StyledLink>
            <h1 className="page-header">{ projects[idx].name }</h1>
            <h2 className="section-header">{ projects[idx].role}</h2>
            <span className="body-text">{ dateAndChain }</span>
          </StyledHeader>
          <Markdown content={ projects[idx].content } />
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
  width: 50vw;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const StyledHeader = styled.header`
  padding: 20vh 0 0 0;
  margin-bottom: 10vh;
  width: 100%;

  color: ${BROWN};

  h1 {
    margin: 0;
    padding: 5vh 0;
    color: ${WHITE};

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 411px) {
      font-size: 34px;
    }
  }

  h2 {
    margin: 0;
    color: ${GREEN};

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 411px) {
      font-size: 20px;
    }
  }

  span {
    color: ${WHITE};
  }
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

const StyledLess = styled.span`
  color: ${GREEN} !important;
`;

  // @media (max-width: 768px) {
  // }
  //
  // @media (max-width: 411px) {
  // }
