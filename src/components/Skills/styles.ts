import styled from 'styled-components';
import GridStandard from '../../styles/StandardStyles';

export const Container = styled(GridStandard)``;

export const SkillItem = styled.h3`
  text-transform: uppercase;
  flex-grow: 1;
  padding: 5px;
  min-width: 0;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.yellow};
  font-size: 60px;
  color: ${props => props.theme.colors.yellow};
  font-weight: lighter;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 30px !important;
  }
`;
