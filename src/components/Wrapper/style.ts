import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  main {
    section:nth-child(even) {
      & > :first-child {
        grid-template-areas: 'tx st tl';

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
          grid-template-areas:
            'tl'
            'st'
            'tx';
        }
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

  span,
  p,
  a,
  strong {
    font-family: 'Lato', sans-serif;
  }
`;
