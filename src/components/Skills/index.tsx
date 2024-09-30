import { useEffect, useState } from "react";
import { DataInterface } from "../../interfaces/DataInterface";
import { Container, SkillItem } from "./styles";
import gsap from "gsap";

export function Skills({ data }: { data?: DataInterface[] }) {

  const [skills, setSkills] = useState<DataInterface>({})


  function HandleSkillSelect(skill: DataInterface) {
    setSkills(skill)

    gsap.fromTo('.description',
      { opacity: 0 }, { opacity: 1, ease: 'elastic' },
    )
  }


  useEffect(() => {
    if (data) {
      setSkills(data[0])
    }
  }, [])

  return (
    <Container>
      <div>
        {data?.map(item => (
          <SkillItem disabled={item.id === skills.id} key={item.id} onClick={() => HandleSkillSelect(item)}>
            {item.title}
          </SkillItem>
        ))}

      </div>

      <div>
        <p className="description" key={skills.description}>{!skills.title ? 'Ao lado, as tecnologias que tenho experiência na área. Para saber mais sobre o manejo das mesmas, selecione com o botão esquerdo do mouse.' : skills?.description?.trim()}
        </p>
      </div>
    </Container>
  )
}
