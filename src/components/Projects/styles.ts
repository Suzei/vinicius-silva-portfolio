import styled from 'styled-components';

export const ProjectContainer = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  & :nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  color: ${props => props.theme.colors.yellow};

  span {
    font-family: 'Akkordeon', sans-serif;
    font-size: 3.5rem;
    text-transform: uppercase;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ProjectInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
  }

  p {
    font-weight: 300;
    max-width: 350px;
    line-height: 1.5;
  }
`;

export const ProjectImage = styled.img`
  height: 275px;
  border: 3px solid ${props => props.theme.colors.yellow};
  object-fit: contain;
  width: 555px;
`;
