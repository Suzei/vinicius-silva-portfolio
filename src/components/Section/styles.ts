import styled, { css } from "styled-components";


export const SectionContainer = styled.section`

`

export const SectionDesktop = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr auto 1fr;

  grid-template-areas:
    'tl st tx'
  ;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    h2 {
      text-align: center;
    }

    .stripes {
      order: -1;
    }
  }

  h2 {
    font-size: 11rem;
    white-space: nowrap;
    grid-area: tl;

  }


  p {
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    max-width: 400px;
    font-weight: 300;
    width: 100%;
    grid-area: tx;
}
`;
