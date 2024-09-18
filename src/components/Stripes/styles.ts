import styled from 'styled-components';

interface StripesProps {
  isSectionStripe: boolean;
}

export const StripesContainer = styled.div<StripesProps>`
  grid-area: st;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-self: stretch;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: ${props => (props.isSectionStripe ? '0 30px' : '0')};

  div {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      height: 1px;
      width: 100%;
    }
    background-color: ${props => props.theme.colors.yellow};
    height: 50%;
    opacity: 100%;
    width: 1px;
  }
`;
