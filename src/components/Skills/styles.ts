import styled from 'styled-components';
import GridStandard from '../../styles/StandardStyles';

export const Container = styled(GridStandard)`
  p {
    line-height: 1.5;
    font-size: 1.5rem;
    transition: ease-in-out 1s;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;

export const SkillItem = styled.button`
  text-transform: uppercase;
  flex-grow: 1;
  padding: 5px;
  min-width: 0;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.yellow};
  font-size: 60px;
  color: ${props => props.theme.colors.yellow};
  font-family: 'Akkordeon';
  background-color: transparent;
  font-weight: lighter;
  cursor: pointer;

  &:disabled {
    background-color: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors['dark-1']};
    transition: ease-in 0.2s;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 30px !important;
  }
`;
