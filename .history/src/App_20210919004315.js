import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: blue;
  }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <div>
    hello sliceline
    </div>
    
    </>
  );
}

export default App;
