import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import "./styles/fonts.css";
import { GlobalTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Section } from "./components/Section";

function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Section
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et augue sem. Ut id urna luctus tellus lacinia dictum et a turpis. Proin at imperdiet velit, et sodales eros. Fusce tincidunt ex tempor dui placerat."
          title="SOBRE MIM"
          hasStripes />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
