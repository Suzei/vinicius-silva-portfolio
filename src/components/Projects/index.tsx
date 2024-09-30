import { DataInterface } from "../../interfaces/DataInterface"
import { ProjectContainer, ProjectImage, ProjectInfos, ProjectWrapper } from "./styles"


export function Projects({ data }: { data?: DataInterface[] }) {

  return (
    <ProjectContainer>
      {data?.map(item => (
        <ProjectWrapper>
          <ProjectInfos>
            <div>
              <span>{item.title}</span>
            </div>
            <p>{item.description}</p>
          </ProjectInfos>
          <a href={item.link} target="_blank" >
            <ProjectImage key={item.link} src={item.image} alt={`Imagem da landing page do projeto ${item.title}`} />
          </a>
        </ProjectWrapper>
      ))}

    </ProjectContainer>
  )
}
