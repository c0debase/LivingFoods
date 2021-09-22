import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    backgrond-color: blue;
  }
`

function App() {
  return (
    <>
    <GlobalStyle>
    <div>
    hello sliceline
    </div>
    </GlobalStyle>
    </>
  );
}

export default App;
