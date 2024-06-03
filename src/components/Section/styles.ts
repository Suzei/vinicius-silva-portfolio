import styled, { css } from "styled-components";


export const SectionContainer = styled.section`
`

export const SectionDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
  }

  h2 {
    white-space: nowrap;
    font-size: 10rem;
  }


  p {
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    max-width: 400px;
    font-weight: 300;
  }
`;
