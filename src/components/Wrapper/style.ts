import styled, { css } from "styled-components";

export const Container = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0 ${(props) => props.theme.spacing.desk};

  ${css`
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      padding: 0 ${(props) => props.theme.spacing.mobile};
    }
  `} h1,
    h2, h3, h4 {
    font-family: "Akkordeon", sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.orange};
    font-size: 17.5rem;
    width: 100%;
    font-weight: 400;
    text-align: center
  }

  h2 {
    color: transparent;
   -webkit-text-stroke: 0.1px ${props => props.theme.colors.orange};
    font-size: 4.375rem;
  }

  span,
  p,
  a {
    font-family: "Lato", sans-serif;
  }
`;
