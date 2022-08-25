import styled from 'styled-components';
import { GREEN } from '../colors';

export default function DevStack() {
  return (
    <StyledSection>
      <StyledAside>
        <span className="section-header font-green">Modern Web 3 Stack</span>
        <span className="secondary-text font-brown">Perfect for leading the industry</span>
        <StyledLogo>
          <img src="/assets/icons/typescript.svg" alt="Typescript Logo" />
          <img src="/assets/icons/javascript.svg" alt="Javascript Logo" />
          <img src="/assets/icons/reactjs.svg" alt="ReactJS Logo" />
          <img src="/assets/icons/nextjs.svg" alt="NextJS Logo" />
          <img src="/assets/icons/solana.svg" alt="Solana Logo" />
          <img src="/assets/icons/rust.svg" alt="Rust Logo" />
          <img src="/assets/icons/anchor.png" alt="Anchor Logo" />
          <img src="/assets/icons/metamask.svg" alt="MetaMask Logo" />
          <img src="/assets/icons/ethereum.svg" alt="Ethereum Logo" />
          <img src="/assets/icons/solidity.svg" alt="Solidity Logo" />
          <img src="/assets/icons/polygon.svg" alt="Plygon Logo" />
          <img src="/assets/icons/hardhat.svg" alt="Hardhat Logo" />
          <img src="/assets/icons/mocha.svg" alt="Mocha Logo" />
          <img src="/assets/icons/waffle.svg" alt="Waffle Logo" />
          <img src="/assets/icons/alchemy.svg" alt="Alchemy Logo" />
        </StyledLogo>
      </StyledAside>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  padding: 10vh 0;
  display: grid;
  justify-content: center;
`

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 800px;
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
    height: 10vh;
    opacity: 0.8;
    transition: transform 0.2s;
    transition-timing-function: ease-in-out;

    &:hover {
      opacity: 1;
      transform: skew(20deg, -10deg) translateY(-10px) scale(1.1);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 5vh;
    }
  }
`;
