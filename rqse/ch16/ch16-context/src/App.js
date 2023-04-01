import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

function App() {
  return (
   <GlobalStyle/>
  );
}

export default App;
