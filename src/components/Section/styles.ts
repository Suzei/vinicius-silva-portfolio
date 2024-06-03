import styled, { css } from "styled-components";


export const SectionContainer = styled.section`
`

export const SectionDesktop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 400px auto 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;

    h2 {
      text-align: center;
    }

    .stripes {
      order: -1;
    }
  }


  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  h2 {
    font-size: 10rem;
    white-space: nowrap;
    flex: 1;
  }


  p {
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    max-width: 400px;
    font-weight: 300;
    width: 100%;
}
`;
