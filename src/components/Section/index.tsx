import { DataInterface } from "../../interfaces/DataInterface";
import { Carrousel } from "../Carrousel";
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
    <SectionContainer contentType={contentType}>
      <SectionMarker>
        <h2>{title}</h2>
        <SectionStripes>
          <hr />
          <hr />
          <hr />
          <hr />

    {!contentType && (
      <>
        <Vl />
        <Vl />
        <Vl />
        <Vl />
     </>
    )}
        </SectionStripes>

        <p>{description}</p>
      </SectionMarker>

      {contentType === ContentTypeEnum.carrousel && (
        <Carrousel data={data}  />
      )}

      {contentType === ContentTypeEnum.skills && (
        <Skills />
      )}

{
        contentType === ContentTypeEnum.exp && (
          <Experience />
        )
      }
    </SectionContainer>
  )
}
