import styled from 'styled-components';
import { BLUE, BROWN, WHITE, GREEN } from '../colors';

function App({ children }) {
  document.title = "Kristian Quirapas"
  document.body.style.margin = 0;
  return (
    <Main>
      <H1 className="section-header">Kristian Quirapas</H1>
      <span className="secondary-text">Blockchain Developer</span>
      <P className="body-text">Hey, my name's K. I'm a software engineer who builds web-based blockchain applications</P>
      <A href="https://linkedin.com/in/kristian-quirapas-348603213" target="_blank" className="nav-main-link">LinkedIn</A>
      <A href="https://twitter.com/k_quirapas" target="_blank" className="nav-main-link">Twitter</A>
      <A href="https://www.youtube.com/channel/UCaU88FuhkVKO0PJViRjvTLw" target="_blank" className="nav-main-link">Youtube</A>
    </Main>
  );
}

const Main = styled.main`
  background-color: #0B1741;
  color: white;
  box-sizing: border-box;
  padding: 10vw;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

const H1 = styled.h1`
  color: ${GREEN};
  text-align: center;
  margin: 0;
`;

const P = styled.p`
  max-width: 500px;
  color: ${BROWN};
  text-align: center;
  margin: 1vh 0;
`;

const A = styled.a`
  text-decoration: none;
  color: ${WHITE};
  cursor: pointer;
  border: 1px solid ${GREEN};
  text-align: center;
  margin: 2vh 0;
  padding: 15px 30px;
  border-radius: 10px;
  transition: background 0.1s;

  &:hover, &:active {
    background-color: ${GREEN};
  }
`;


export default App;
