import styled, { css } from "styled-components";

export const Container = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0 ${(props) => props.theme.spacing.desk};

  ${css`
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      padding: 0 ${(props) => props.theme.spacing.mobile};
    }
  `} h1,
    h2, h3, h4 {
    font-family: "Akkordeon", sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.orange};
    font-size: 21.723rem;
    font-weight: 400;
  }

  span,
  p,
  a {
    font-family: "Lato", sans-serif;
  }
`;
