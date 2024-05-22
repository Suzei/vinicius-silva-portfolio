import { StripesContainer } from "./styles";

export function Stripes({isSectionStripe}: { isSectionStripe: boolean }) {
    return (
        <StripesContainer isSectionStripe={isSectionStripe} className="stripes">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
        </StripesContainer>
    )
}
