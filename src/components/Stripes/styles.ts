import styled, { css } from "styled-components";

interface StripesProps {
  isSectionStripe: boolean;
}

export const StripesContainer = styled.div<StripesProps>`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 100%;
    }

  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: ${props => (props.isSectionStripe ? '0 30px' : '0')};

  div {
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 100%;
      height: 1px;
    }
    background-color: ${props => props.theme.colors.yellow};
    height: 85%;
    opacity: 70%;
    width: 1px;
  }
`;
