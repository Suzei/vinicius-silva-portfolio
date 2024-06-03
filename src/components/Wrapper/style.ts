import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;


  h1,
  h2,
  h3,
  h4 {
    font-family: 'Akkordeon', sans-serif;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 8.75rem;
      align-items: center;
  }

  }
    padding: 0 ${props => props.theme.spacing.mobile};


    h1 {
    color: ${props => props.theme.colors.orange};
    width: 100%;
    font-size: 15.125rem;
    font-weight: 400;
  }

  h2 {
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.colors.orange};
    font-size: 11.594rem;
    font-weight: lighter;
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
