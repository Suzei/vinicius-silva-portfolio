import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

main {
  section:nth-child(even) {
   & > :first-child {
    grid-template-columns: 1fr 30px 1fr;
    grid-template-areas:
    'tx st tl';
    }
   }
  }

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

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Akkordeon', sans-serif;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
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
