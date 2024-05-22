import { Stripes } from "../Stripes";
import { SectionContainer, SectionDesktop } from "./styles";

interface SectionProps {
  title: string;
  description: string;
  hasStripes?: boolean;
}

export function Section({description, hasStripes = true, title}: SectionProps) {
  return (
    <SectionContainer>
      <SectionDesktop>
        <h2>{title}</h2>
        {hasStripes && <Stripes isSectionStripe={false} />}
        <p>{ description }</p>
    </SectionDesktop>
      </SectionContainer>
    )
}
