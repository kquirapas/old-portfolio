import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { projects, pIdx } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function Contacts() {
  const headerRef = useRef(null);

  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"Contacts"} headerRef={headerRef} />
      <StyledPage>
        <StyledBody>
          <StyledHeader ref={headerRef}>
          </StyledHeader>
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
;
