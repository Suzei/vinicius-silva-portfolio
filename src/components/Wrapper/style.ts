import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      padding: 0 ${(props) => props.theme.spacing.mobile};
    }


    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
       .stripes:first-of-type   {
        display: flex;
      }

      .stripes {
        display: none;
      }
    }

  h1,
    h2, h3, h4 {
    font-family: "Akkordeon", sans-serif;
  }

  h1 {
    color: ${(props) => props.theme.colors.orange};
    font-size: 8.5rem;
    width: 100%;
    font-weight: 400;
  }

  h2 {
    color: transparent;
   -webkit-text-stroke: 2px ${props => props.theme.colors.orange};
    font-size: 5.313rem;
  }

  span,
  p,
  a {
    font-family: "Lato", sans-serif;
  }
`;
