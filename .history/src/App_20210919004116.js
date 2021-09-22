import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
  }
`

function App() {
  return (
    <div>
    hello sliceline
    </div>
  );
}

export default App;
