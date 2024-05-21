import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import "./styles/fonts.css";
import { GlobalTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Stripes } from "./components/Stripes";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Stripes />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
