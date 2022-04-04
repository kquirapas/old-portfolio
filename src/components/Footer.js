import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { projects, pIdx } from '../content/projects';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

const NUM_PROJ_TO_SHOW = 4;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledDiv>
        <StyledLeft>
          <StyledLogo></StyledLogo>
          <StyledSpan>Kristian Quirapas</StyledSpan>
          <StyledSecondary>Blockchain Developer</StyledSecondary>
        </StyledLeft>
        <StyledRight>
          <StyledGrid>
            <StyledColumn>
              <StyledColumnHead to="/" className="footer-header">Contacts</StyledColumnHead>
              <StyledColumnBody>
                <StyledColumnLink className="footer-link" to="/"><StyledColumnLinkText>hotdog@gmail.com</StyledColumnLinkText></StyledColumnLink>
              </StyledColumnBody>
            </StyledColumn>
            <StyledColumn>
              <StyledColumnHead to="/" className="footer-header">Projects</StyledColumnHead>
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
              <StyledColumnHead to="/" className="footer-header">Experiments</StyledColumnHead>
              <StyledColumnBody>
                <StyledColumnLink className="footer-link" to="/"><StyledColumnLinkText>hotdog@gmail.com</StyledColumnLinkText></StyledColumnLink>
              </StyledColumnBody>
            </StyledColumn>
            <StyledColumn>
              <StyledColumnHead to="/" className="footer-header">About</StyledColumnHead>
              <StyledColumnBody>
                <StyledColumnLink className="footer-link" to="/"><StyledColumnLinkText>hotdog@gmail.com</StyledColumnLinkText></StyledColumnLink>
              </StyledColumnBody>
            </StyledColumn>
          </StyledGrid>
          <StyledDescription className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ultricies eleifend. Nam iaculis arcu tristique felis viverra, eu egestas lectus cursus. Fusce odio nisi, malesuada eget tellus at, finibus accumsan est. Cras aliquet est in lectus luctus iaculis. Vestibulum elementum imperdiet ipsum vel euismod. Pellentesque mollis,</StyledDescription>
        </StyledRight>
      </StyledDiv>
      <StyledCopyright>&copy; Kristian Quirapas. All Rights Reserved</StyledCopyright>
    </StyledFooter>
  );
}


const StyledFooter = styled.footer`
  padding: 0 3vw;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-gap: 3vw;
  border-top: 1px solid ${GREEN};
  padding: 10vh 0;
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
`;

const StyledColumn = styled.aside`
`;

const StyledColumnHead = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${GREEN};
  margin-bottom: 10%;
`;

const StyledColumnBody = styled.div`
  display: flex;
  flex-direction: column;
  color: ${WHITE};

  a {
    margin-bottom: 10%;
  }
`;


const StyledColumnLinkText = styled.p`
  margin: 0;
  transition: transform 0.1s;
`;

const StyledColumnLink = styled(Link)`
  text-decoration: none;
  color: ${WHITE};

  &:hover ${StyledColumnLinkText} {
    transform: translateY(-5px);
    color: ${GREEN};
  }
`;

const StyledDescription = styled.p`
  
`;


const StyledLogo = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: ${GREEN};
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
`;


