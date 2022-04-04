import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function ProjectPrev({ details, title, description, link }) {
  return (
    <StyledContainer to={link}>
      <StyledContent>
        <StyledDetails className="secondary-text">{ details }</StyledDetails>
        <StyledTitle className="section-header">{ title }</StyledTitle>
        <StyledDescription className="body-text">{ description }</StyledDescription>
        <span className="body-text">Read More About This Project</span>
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: grey;
  height: 100%;
`;

const StyledDetails = styled.p`
  margin: 0;
`;

const StyledTitle = styled.p`
  color: ${WHITE};
  margin: 0;
  margin-bottom: 2vh;
`;

const StyledDescription = styled.p`
  margin: 0;
`;

const StyledContent = styled.div`
  box-sizing: border-box;
  height: 100%;
  color: ${WHITE};
  padding: 2vw;
  background-color: rgba(12, 28, 44, 0.5);
  transition: background-color 0.1s, padding 0.1s;
  transition-timing-function: ease-in-out;

  span {
    padding: 0;
    margin: 0;
    display: none;
  }

  &:hover {
    background-color: ${GREEN};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      display: block;
    }
  }

  &:hover ${StyledDescription} {
    visibility: none;
    display: none;
  }
`;

