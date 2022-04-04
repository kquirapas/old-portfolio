import styled from 'styled-components';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function() {
  return (
    <StyledSection>
      <StyledAside>
        <StyledIMG></StyledIMG>
        <span className="section-header font-green">My Development Stack</span>
        <StyledP className="body-text">I mainly work with Ethereum, but I am looking forward to making some applications with Tezos in the future.</StyledP>
      </StyledAside>
      <aside>insert grid of logos here</aside>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 10vh 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
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
