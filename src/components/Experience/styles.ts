import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 50px;
`;

export const ExperiencePeriodsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ExperiencePeriod = styled.button`
  display: flex;
  max-width: 500px;
  width: 100%;
  padding: 0.5rem;
  flex-direction: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.yellow};
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.purple};
    color: ${props => props.theme.colors.yellow};
    transition: ease-in 0.1s;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  span {
    font-size: 100px;
    color: transparent;
    font-family: 'Akkordeon';
    -webkit-text-stroke: 1px ${props => props.theme.colors['dark-1']};
  }
`;

export const ExperienceDetails = styled.div`
  display: flex;
  /* flex-wrap: wrap-reverse; */
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.purple};
  padding: 10px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-wrap: wrap-reverse;
  }

  color: ${props => props.theme.colors.yellow};

  h3 {
    font-size: 7.25rem;
    font-weight: 300;
    color: ${props => props.theme.colors.purple};
  }

  p {
    max-width: 900px;
    font-weight: 300;
  }

  p,
  strong {
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 1rem;
  }
`;
