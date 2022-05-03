import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

export default function ProjectPrev({ details, title, description, link, thumbnail }) {
  console.log(thumbnail);

  return (
    <StyledContainer thumbnail={thumbnail} to={link}>
      <StyledContent>
        <StyledDetails className="secondary-text">{ details }</StyledDetails>
        <StyledTitle className="section-header">{ title }</StyledTitle>
        <StyledBody className="body-text">{ description }</StyledBody>
      </StyledContent>
    </StyledContainer>
  );
}


const StyledBody = styled.div`
`;

const StyledContainer = styled(Link)`
  box-sizing: border-box;
  border: 3px solid ${GREEN};
  padding: 3vh 3vw;
  display: block;
  text-decoration: none;
  // background-image: url(${props => props.thumbnail});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;

  transition: border 0.1s;
  
  &:hover {
    color: ${GREEN};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 10px solid ${WHITE};

    ${StyledBody} {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 3vh 5w;
  }

  @media (max-width: 411px) {
    padding: 3vh 5vw;
  }
`;

const StyledDetails = styled.p`
  margin: 0;
`;

const StyledTitle = styled.p`
  margin: 0;
  margin-bottom: 2vh;
`;

const StyledContent = styled.div`
  color: ${WHITE};
`;
