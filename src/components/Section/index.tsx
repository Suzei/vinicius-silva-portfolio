import { DataInterface } from "../../interfaces/DataInterface";
import { Projects } from "../Projects";
import { Experience } from "../Experience";
import { Skills } from "../Skills";
import { SectionContainer, SectionMarker, SectionStripes, Vl } from "./styles";

export enum ContentTypeEnum {
  'carrousel',
  'skills',
  'exp'
}

interface SectionProps {
  title: string;
  description?: string;
  orientation?: 'rtl' | 'ltr';
  contentType?: ContentTypeEnum;
  data?: DataInterface[],
}

export function Section({ description, title, contentType, data }: SectionProps) {
  return (
    <SectionContainer>
      <SectionMarker>
        <h2>{title}</h2>
        <SectionStripes contentType={contentType}>
          <hr />
          <hr />
          <hr />
          <hr />
        </SectionStripes>

        <p>{description}</p>
      </SectionMarker>

      {contentType === ContentTypeEnum.carrousel && (
        <Projects data={data} />
      )}

      {contentType === ContentTypeEnum.skills && (
        <Skills data={data} />
      )}

      {
        contentType === ContentTypeEnum.exp && (
          <Experience />
        )
      }
    </SectionContainer>
  )
}
