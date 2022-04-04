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

const StyledContent = styled.div`
  height: 100%;
  color: ${WHITE};
  padding: 2vw;
  background-color: rgba(12, 28, 44, 0.5);
  transition: background-color 0.1s;

  &:hover {
    background-color: rgba(12, 28, 44, 1);
  }
`;

const StyledDetails = styled.p`
  margin: 0;
`;

const StyledTitle = styled.p`
  margin: 0;
`;

const StyledDescription = styled.p`
  margin: 0;
`;
