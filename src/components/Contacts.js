import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { projects, pIdx } from '../content/projects';
import Navbar from './Navbar';
import Footer from './Footer';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

function ContactPoint({ contact, href, description }) {
  return (
    <div>
      <StyledHead className="section-header font-white" href={href} target="_blank">{ contact }</StyledHead>
      <StyledDesc className="secondary-text font-green">{ description }</StyledDesc>
    </div>
  );
}

const StyledHead = styled.a`
  text-decoration: none;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px !important;
  }
`;

const StyledDesc = styled.p`
  margin: 0;
`;

export default function Contacts() {
  useEffect(() => {
    document.title = 'Kristian Quirapas';
    document.body.style.margin = 0;
    document.body.style.backgroundColor = BLUE;
    document.body.style.color = BROWN;
  }, []);

  return (
    <>
      <Navbar page={"Contacts"} />
      <StyledPage>
        <StyledBody>
          <StyledHeader>
            <h1 className="page-header font-green">Contacts</h1>
            <p className="body-text font-brown">It's nice knowing you're here. You can reach me fastest with email, but feel free to reach me out with all these links.</p>
          </StyledHeader>
          <StyledSection>
            <StyledGrid>
              <ContactPoint contact={"kmquirapas@gmail.com"} href={"mailto:kmquirapas@gmail.com"} description={"Send me an email"} />
              <ContactPoint contact={"LinkedIn"} href={"https://linkedin.com/in/kristian-quirapas-348603213"} description={"Let's connect"} />
              <ContactPoint contact={"Twitter"} href={"https://twitter.com/k_quirapas"} description={"Tweet, tweet, tweet"} />
              <ContactPoint contact={"Github"} href={"https://github.com/kquirapas"} description={"Let's collaborate"} />
              <ContactPoint contact={"Youtube Channel"} href={"https://www.youtube.com/channel/UCaU88FuhkVKO0PJViRjvTLw"} description={"Making content (sometimes)"} />
            </StyledGrid>
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
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3vw;
  padding: 20vh 0;

  color: ${BROWN};

  @media (max-width: 768px) {
    padding: 5vh 0;
    margin-top: 20vh;
    grid-template-columns: 1fr;
  }

  h1 {
    margin: 0;
    color: ${GREEN};

    @media (max-width: 768px) {
      justify-content: start;
      font-size: 50px !important;
    }

    @media (max-width: 411px) {
      font-size: 34px !important;
    }
  }
`;
;

const StyledSection = styled.section`
  width: 100%;
  padding: 0 0 20vh 0;
`;

const StyledGrid = styled.main`
  width: 100%;
  display: grid;
  row-gap: 10vh;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
  }
`;

  // @media (max-width: 768px) {
  // }
  //
  // @media (max-width: 411px) {
  // }
