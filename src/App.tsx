import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import "./styles/fonts.css";
import { GlobalTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ContentTypeEnum, Section } from "./components/Section";
import Projects from './mocked/projects.json'
import Skills from './mocked/skills.json'
import { useEffect, useState } from "react";
import { DataInterface } from "./interfaces/DataInterface";
import { ExperienceInfo } from "./mocked/experience";

interface DataArrayProps {
  projects?: DataInterface[]
  skills?: DataInterface[]
  experience?: DataInterface[]
}

function App() {
  const [data, setData] = useState<DataArrayProps>()

  useEffect(() => {
    setData({ projects: Projects, skills: Skills, experience: ExperienceInfo })
  }, [])

  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Section
            contentType={ContentTypeEnum.about}
            description="Meu nome é Vinícius Silva (vsilvadev nas redes) e atualmente sou full-stack. Com 3 anos de carreira e uma bagagem extensa de broncas resolvidas, sempre estou disposto a aprender novas tecnologias, com o solene intuito de pensar maior todo dia; cotidiano esse que me permite dar continuidade a minha formação em Análise e Desenvolvimento de Sistemas."
            title="SOBRE MIM"
          />

          <Section
            title="PROJETOS"
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
