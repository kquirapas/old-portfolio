import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects, pIdx } from '../content/projects';
import { experiments, eIdx } from '../content/experiments';
import { WHITE, GREEN } from '../colors';

const NUM_PROJ_TO_SHOW = Math.min(4, pIdx.length);
const NUM_EXPE_TO_SHOW = Math.min(4, eIdx.length);

export default function Footer() {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledLeft>
          <StyledLogo src="/assets/branding.jpg" />
          <StyledSpan>Kristian Quirapas</StyledSpan>
          <StyledSecondary>Blockchain Developer</StyledSecondary>
        </StyledLeft>
        <StyledRight>
          <StyledGrid>
            <StyledColumn>
              <StyledColumnHead to="/contacts" className="footer-header">Contacts</StyledColumnHead>
              <StyledColumnBody>
                <StyledColumnA className="footer-link" href="https://linkedin.com/in/kristian-quirapas-348603213"><StyledColumnLinkText>LinkedIn Profile</StyledColumnLinkText></StyledColumnA>
                <StyledColumnA className="footer-link" href="https://github.com/kquirapas"><StyledColumnLinkText>Github</StyledColumnLinkText></StyledColumnA>
                <StyledColumnA className="footer-link" href="https://www.youtube.com/channel/UCaU88FuhkVKO0PJViRjvTLw"><StyledColumnLinkText>Youtube Channel</StyledColumnLinkText></StyledColumnA>
              </StyledColumnBody>
            </StyledColumn>
            <StyledColumn>
              <StyledColumnHead to="/projects" className="footer-header">Projects</StyledColumnHead>
              <StyledColumnBody>
                {
                  pIdx.slice(0,NUM_PROJ_TO_SHOW).map(i => {
                    return (
                      <StyledColumnLink key={i} className="footer-link" to={`/projects/${i}`}><StyledColumnLinkText>{ projects[i].name }</StyledColumnLinkText></StyledColumnLink>
                    )
                  })
                }
              </StyledColumnBody>
            </StyledColumn>
            <StyledColumn>
              <StyledColumnHead to="/experiments" className="footer-header">Experiments</StyledColumnHead>
              <StyledColumnBody>
                {
                  pIdx.slice(0,NUM_EXPE_TO_SHOW).map(i => {
                    return (
                      <StyledColumnLink key={i} className="footer-link" to={`/experiments/${i}`}><StyledColumnLinkText>{ experiments[i].name }</StyledColumnLinkText></StyledColumnLink>
                    )
                  })
                }
              </StyledColumnBody>
            </StyledColumn>
            <StyledColumn>
              <StyledColumnHead to="/about" className="footer-header">About</StyledColumnHead>
              <StyledColumnBody>
                <StyledColumnLink className="footer-link" to="/about"><StyledColumnLinkText>Get my Resume</StyledColumnLinkText></StyledColumnLink>
              </StyledColumnBody>
            </StyledColumn>
          </StyledGrid>
        </StyledRight>
      </StyledDiv>
      <StyledCopyright>&copy; Kristian Quirapas. All Rights Reserved</StyledCopyright>
    </StyledFooter>
  );
}


const StyledFooter = styled.footer`
  padding: 0 3vw;

  @media (max-width: 768px) {
    padding: 0 10vw;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  grid-gap: 3vw;
  border-top: 1px solid ${GREEN};
  padding: 10vh 0;

  @media (max-width: 1366px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
  }
`;


const StyledLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const StyledRight = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    row-gap: 4vh;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 411px) {
    grid-template-columns: 1fr;
  }
`;

const StyledColumn = styled.aside`
`;

const StyledColumnHead = styled(Link)`
  margin-bottom: 5vh;
  display: block;
  text-decoration: none;
  color: ${GREEN};

  @media (max-width: 768px) {
    margin-bottom: 2vh;
  }

  @media (max-width: 411px) {
    margin-bottom: 3vh;
  }
`;

const StyledColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  color: ${WHITE};

  a {
    margin-bottom: 5vh;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1f,;

    a {
      margin-bottom: 4vh;
    }
  }

  @media (max-width: 411px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;

    a {
      margin-bottom: 3vh;
    }
  }
`;


const StyledColumnLinkText = styled.p`
  margin: 0;
  transition: transform 0.1s;
`;

const StyledColumnA = styled.a`
  text-decoration: none;
  color: ${WHITE};

  &:hover ${StyledColumnLinkText} {
    transform: translateY(-5px);
    color: ${GREEN};
  }
`;


const StyledColumnLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};

  &:hover ${StyledColumnLinkText} {
    transform: translateY(-5px);
    color: ${GREEN};
  }
`;

const StyledLogo = styled.img`
  min-width: 400px;
  width: 100%;
  border-radius: 10px;
  background-color: ${GREEN};

  @media (max-width: 768px) {
    min-width: 200px;
    height: auto;
  }
`;


const StyledSpan = styled.span`
  margin-top: 20px;
  font-family: Lato Black;
  font-size: 22px;

  color: ${GREEN};
  align-self: start;
`;


const StyledSecondary = styled.p`
  margin: 0;
  font-family: Lato Regular;
  color: ${WHITE};
  letter-spacing: 3px;
  align-self: start;
`;


const StyledCopyright = styled.p`
  padding: 0 0 3vh 0;
  font-family: Lato Regular;
  color: ${GREEN};
  letter-spacing: 3px;
  align-self: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;


