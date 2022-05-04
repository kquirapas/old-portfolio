import styled from 'styled-components';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function Workflow() {
  return (
      <StyledSection>
        <StyledHeader>
          <h1 className="section-header">Diverse Set of Skills</h1>
          <p className="secondary-text">Get 2 for the price of one</p>
        </StyledHeader>
        <StyledGrid>
          <StyledAside>
            <span className="nav-main-link font-white">Planning</span>
            <StyledLogo>
              <img src="/assets/icons/notion.svg" alt="Notion Logo" />
              <img src="/assets/icons/figma.svg" alt="Figma Logo" />
              <img src="/assets/icons/photoshop.svg" alt="Photoshop Logo" />
            </StyledLogo>
          </StyledAside>
          <StyledAside>
            <span className="nav-main-link font-white">Project Setup</span>
            <StyledLogo>
              <img src="/assets/icons/linux.svg" alt="Linux Logo" />
              <img src="/assets/icons/terminal.svg" alt="Terminal Logo" />
              <img src="/assets/icons/npm.svg" alt="npm Logo" />
              <img src="/assets/icons/yarn.svg" alt="yarn Logo" />
              <img src="/assets/icons/metamask.svg" alt="MetaMask Logo" />
              <img src="/assets/icons/ethereum.svg" alt="Ethereum Logo" />
              <img src="/assets/icons/polygon.svg" alt="Polygon Logo" />
              <img src="/assets/icons/hardhat.svg" alt="Hardhat Logo" />
            </StyledLogo>
          </StyledAside><StyledAside>
            <span className="nav-main-link font-white">Coding</span>
            <StyledLogo>
              <img src="/assets/icons/html.svg" alt="HTML Logo" />
              <img src="/assets/icons/css.svg" alt="CSS Logo" />
              <img src="/assets/icons/javascript.svg" alt="Javascript Logo" />
              <img src="/assets/icons/solidity.svg" alt="Solidity Logo" />
              <img src="/assets/icons/reactjs.svg" alt="ReactJS Logo" />
              <img src="/assets/icons/nextjs.svg" alt="NextJS Logo" />
              <img src="/assets/icons/vim.svg" alt="Vim Logo" />
              <img src="/assets/icons/git.svg" alt="git Logo" />
            </StyledLogo>
          </StyledAside><StyledAside>
            <span className="nav-main-link font-white">Testing</span>
            <StyledLogo>
              <img src="/assets/icons/waffle.svg" alt="Waffle Logo " />
              <img src="/assets/icons/mocha.svg" alt="Mocha Logo" />
            </StyledLogo>
          </StyledAside><StyledAside>
            <span className="nav-main-link font-white">Deployment</span>
            <StyledLogo>
              <img src="/assets/icons/github.svg" alt="Github Logo" />
              <img src="/assets/icons/vercel.svg" alt="Vercel Logo" />
              <img src="/assets/icons/alchemy.svg" alt="Alchemy Logo" />
            </StyledLogo>
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    row-gap: 5vh;
    grid-template-columns: 1fr;
  }

  @media (max-width: 411px) {
    grid-template-columns: 1fr;
  }
`

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledLogo = styled.span`
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  img {
    padding: 10px;
    border-radius: 10px;
    background-color: ${GREEN};

    margin: 20px;
    display: block;
    height: 5vh;
    transition: transform 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
      transform: translateY(-10px) scale(1.1);
    }
  }
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
