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
    max-height: 100vh;
    overflow: scroll;
    box-sizing: border-box;
    border: 1px solid ${GREEN};
    border-left: 2vw solid ${GREEN};
    display: block;
    padding: 3vh 1vw;
    margin: 2vh 0;
    font-family: RobotoMono Regular;
    font-size: 20px;
    background-color: ${BLUE};
    color: ${BROWN};
  }
`;
