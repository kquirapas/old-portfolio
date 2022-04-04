import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { projects } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function ExpContent() {
  const headerRef = useRef(null);
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
      <Navbar page={"Experiments"} headerRef={headerRef} />
      <StyledPage>
        <StyledBody>
          <StyledHeader ref={headerRef}>
            <StyledLink to="/" className="nav-main-link"><StyledLess>{"< "}</StyledLess>Go back to Projects</StyledLink>
            <h1 className="page-header">{ projects[idx].name }</h1>
            <h2 className="section-header">{ projects[idx].role}</h2>
            <span className="body-text">{ dateAndChain }</span>
          </StyledHeader>
          <StyledMarkdown>
            <ReactMarkdown>{ projects[idx].content }</ReactMarkdown>
          </StyledMarkdown>
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
`;

const StyledHeader = styled.header`
  margin-bottom: 10vh;
  width: 100%;

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

const StyledMarkdown = styled.main`
  width: 100%;

  img {
    width: 100%;
    overflow: hidden;
  }
  
  h1, h2, h3, h3, h4, h5 {
    color: ${GREEN};
    font-family: Lato Black;
    font-size: 34px;
  }
  
  h6 {
    margin: 0;
    text-align: center;
    color: ${BROWN};
    font-family: Lato Regular;
    font-size: 16px;
    letter-spacing: 3px;
  }

  p {
    margin: 3vh 0;
    text-align: justify;
    line-height: 140%;
    font-family: Lato Regular;
    font-size: 20px;
  }

  blockquote {
    margin: 0 2vw;
    padding: 0 1vw;
    border-left: 5px solid ${WHITE};
    color: ${WHITE};

    p {
      padding: 1vh 0;
      margin: 0;
    }
  }

  code {
    background-color: red;
    color: green;
  }
`;
