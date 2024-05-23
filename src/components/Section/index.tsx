import { Stripes } from "../Stripes";
import { SectionContainer, SectionDesktop } from "./styles";

interface SectionProps {
  title: string;
  description: string;
  hasStripes?: boolean;
  orientation?: 'rtl' | 'ltr'
}

export function Section({description, hasStripes = true, title, orientation = 'ltr'}: SectionProps) {
  return (
    <SectionContainer>
      <SectionDesktop orientation={orientation}>
        <h2>{title}</h2>
        {hasStripes && <Stripes isSectionStripe={false} />}
        <p>{ description }</p>
    </SectionDesktop>
      </SectionContainer>
    )
}
