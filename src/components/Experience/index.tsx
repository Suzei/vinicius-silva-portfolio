import { useEffect, useState } from "react";
import { DataInterface } from "../../interfaces/DataInterface";
import { ExperienceContainer, ExperienceDetails, ExperiencePeriod, ExperiencePeriodsWrapper } from "./styles";

export function Experience({ data }: { data?: DataInterface[] }) {

  const [experience, setExperience] = useState<DataInterface | undefined>(data?.[0])

  function HandleExperienceChange(exp: DataInterface) {
    setExperience(exp)
  }


  useEffect(() => {
    if (data) {
      setExperience(data[0])
    }
  }, [])
  return (
    <ExperienceContainer>
      <ExperiencePeriodsWrapper>
        {data?.map(item => (
          <ExperiencePeriod disabled={item.id === experience?.id} onClick={() => HandleExperienceChange(item)}>
            <img src={item.image} alt={`Ícone da empresa`} />
            <span>{item.period}</span>
          </ExperiencePeriod>
        ))}

      </ExperiencePeriodsWrapper>

      <ExperienceDetails>
        <div>
          <strong>{experience?.encharge}</strong>
          <p>{experience?.description}</p>
        </div>
        <h3>{experience?.period}</h3>
      </ExperienceDetails>

    </ExperienceContainer>
  )
}
