import styled, { css } from "styled-components";


interface SectionProps {
  orientation: 'ltr' | 'rtl'
}

export const SectionContainer = styled.section`
`

export const SectionDesktop = styled.div<SectionProps>`
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

    order: ${props => props.orientation === 'rtl' && 2};
  }

  .stripes {
    order: ${props => props.orientation === 'rtl' && 1};
  }

  p {
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    max-width: 400px;
    font-weight: 300;
  }
`;
