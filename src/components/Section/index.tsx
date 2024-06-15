import { Carrousel } from "../Carrousel";
import { Skills } from "../Skills";
import { Stripes } from "../Stripes";
import { SectionContainer, SectionDesktop } from "./styles";

interface SectionProps {
  title: string;
  description?: string;
  hasStripes?: boolean;
  orientation?: 'rtl' | 'ltr';
  contentType?: 'carrousel' | 'skills' | 'exp';
}

export function Section({ description, hasStripes = true, title, contentType }: SectionProps) {
  return (
    <SectionContainer>
      <SectionDesktop>
        <h2>{title}</h2>
        {hasStripes && <Stripes isSectionStripe={false} />}
        <p>{description}</p>
      </SectionDesktop>

      {contentType === 'carrousel' && (
        <Carrousel />
      )}

      {contentType === 'skills' && (
        <Skills />
      )}

    </SectionContainer>
  )
}
