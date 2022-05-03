import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function Markdown({ content }) {
  return(
    <StyledMarkdown>
      <ReactMarkdown>{ content }</ReactMarkdown>
    </StyledMarkdown>
  );
}

const StyledMarkdown = styled.main`
  img {
    overflow: hidden;
    max-height: 800,x;
    width: auto;
    max-width: 100%;
  }
  
  h1, h2, h3, h3, h4, h5 {
    color: ${GREEN};
    font-family: Lato Black;
    font-size: 34px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  
  h6 {
    margin: 5vh;
    text-align: center;
    color: ${BROWN};
    font-family: Lato Regular;
    font-size: 16px;
    letter-spacing: 3px;
  }

  p {
    margin: 2vh 0 5vh 0;
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

  ol, ul {
    font-family: Lato Regular;
    font-size: 20px;
    margin: 2vh 0 5vh 0;

    li {
      margin: 1vh 0;
    }
  }

  strong {
    color: ${WHITE};
    font-family: Lato Black;
  }

  em, i {
    color: ${WHITE};
    font-family: Lato Regular;
  }

  a {
    text-decoration: none;
    color: ${WHITE};
    font-family: Lato Regular;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    max-height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    border: 1px solid ${GREEN};
    border-left: 2vw solid ${GREEN};
    display: block;
    padding: 3vh 1vw;
    margin: 2vh 0 5vh 0;
    font-family: RobotoMono Regular;
    font-size: 20px;
    background-color: ${BLUE};
    color: ${GREEN};

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
