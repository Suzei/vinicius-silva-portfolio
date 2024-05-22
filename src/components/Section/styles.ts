import styled from "styled-components";

export const SectionContainer = styled.section`
padding: 1rem;
`

export const SectionDesktop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    order: -2;
  }

  h2 {
    white-space: nowrap;
    font-size: 10rem;
  }

  p {
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    max-width: 350px;
    font-weight: 300;
  }
`;
