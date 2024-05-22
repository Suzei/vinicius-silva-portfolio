import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  max-width: 1090px;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Akkordeon', sans-serif;
  }

  h1 {
    color: ${props => props.theme.colors.orange};
    width: 100%;
    font-size: 30.313rem;
    font-weight: 400;
  }

  h2 {
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.colors.orange};
    font-weight: lighter;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 ${props => props.theme.spacing.mobile};
    h1,
    h2,
    h3,
    h4 {
      font-size: 8.75rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    .stripes:first-of-type {
      display: flex;
    }

    .stripes {
      display: none;
    }
  }

  span,
  p,
  a {
    font-family: 'Lato', sans-serif;
  }
`;
