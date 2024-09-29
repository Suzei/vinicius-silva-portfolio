import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import "./styles/fonts.css";
import { GlobalTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ContentTypeEnum, Section } from "./components/Section";
import Projects from './mocked/projects.json'
import { useEffect, useState } from "react";
import { DataInterface } from "./interfaces/DataInterface";

interface DataArrayProps {
  projects?: DataInterface[]
  skills?: DataInterface[]
  experience?: DataInterface[]
}

function App() {
  const [data, setData] = useState<DataArrayProps>()

  useEffect(() => {
    setData({projects: Projects})
  }, [])

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Section
            description="Atualmente full-stack com 3 anos e meio de carreira no desenvolvimento, com uma faculdade em curso e sempre disposto a pensar soluções que vão colaborar com o sucesso de um grande negócio."
            title="SOBRE MIM"
             />

          <Section
            description="Abaixo, os principais projetos em que colaborei no desenvolvimento, desde landings até aplicações funcionais com React, Native e Node.js"
            title="PROJETOS"
            orientation="rtl"
            contentType={ContentTypeEnum.carrousel}
            data={data?.projects}
          >
          </Section>

          <Section title="HABILIDADES" contentType={ContentTypeEnum.skills} data={data?.skills} />

          <Section title="EXPERIENCIAS" contentType={ContentTypeEnum.exp} data={data?.experience} />

        </main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
