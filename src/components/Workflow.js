import styled from 'styled-components';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

function Arrow() {
  return (
    <StyledDiv><span>{'>>>>>'}</span></StyledDiv>
  );
}

const StyledDiv = styled.div`
  opacity: 0.05;
  z-index: -5;
  margin: 0;
  padding: 0;
  color: ${GREEN};
  font-family: Lato Black;
  font-size: 30em;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-self: end;

  span {
    margin: 0;
    padding: 0;
  }
`;


export default function Workflow() {
  return (
      <StyledSection>
        <StyledHeader>
          <h1 className="section-header">My Workflow</h1>
          <p className="secondary-text">How I Organize My Time</p>
        </StyledHeader>
        <StyledGrid>
          <StyledAside>
            <StyledNum className="section-header"><p>0</p></StyledNum>
            <span className="nav-main-link font-white">Research and Experiment</span>
            <StyledP className="body-text">I plan the project and test the technology stack. I make all the mistakes at this stage, so I can avoid them when I start coding.</StyledP>
            <Arrow />
          </StyledAside>
          <StyledAside>
            <StyledNum className="section-header"><p>1</p></StyledNum>
            <span className="nav-main-link font-white">Coding and Testing</span>
            <StyledP className="body-text">I start working on the project, while testing along the way. I also do a bit of research at this stage as I encounter different problems.</StyledP>
          </StyledAside>
          <StyledAside>
            <StyledNum className="section-header"><p>2</p></StyledNum>
            <span className="nav-main-link font-white">Deployment and Maintenance</span>
            <StyledP className="body-text">I deploy the project and keep an eye out for its performance in production. This is a fulfilling stage, but it takes a lot of work before getting here.</StyledP>
          </StyledAside>
        </StyledGrid>
      </StyledSection>
  );
}

const StyledHeader = styled.div`
  text-align: center;
  

  h1 {
    margin: 0;
    color: ${GREEN};
  }

  p {
    display: block;
    color: ${BROWN};
    margin: 0.5vh 0 4vh 0;
  }
`;

const StyledSection = styled.section`
  position: relative;
  padding: 10vh 0;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledNum = styled.span`
  color: ${WHITE};
  margin: 50px 0;
  width: 100px;
  height: 100px;
  background-color: ${GREEN};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledIMG = styled.img`
  margin: 50px 0;
  width: 100px;
  height: 100px;
  background-color: ${GREEN};
  border-radius: 20px;
`;

const StyledP = styled.p`
  padding: 0 5vw;
  text-align: center;
`;
