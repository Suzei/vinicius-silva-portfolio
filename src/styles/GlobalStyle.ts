import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors['dark-1']};
  }


  h1,
  h2,
  h3,
  h4 {
    font-family: 'Akkordeon', sans-serif;
    white-space: nowrap;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 8.75rem;
    }
  }

`;
