import { createGlobalStyle } from 'styled-components';
import { Navbar } from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

function App() {
  return (
    <>
      <Navbar />
      <h2>sliceline</h2>
    </>
  );
}

export default App;
