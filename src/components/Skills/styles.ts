import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;

  & > :first-child {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }

  & > :nth-child(2) {
    border: 1px solid ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.yellow};
    padding: 24px;
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const SkillItem = styled.h3`
  text-transform: uppercase;
  flex-grow: 1;
  padding: 5px;
  min-width: 0;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.yellow};
  font-size: 60px;
  color:${props => props.theme.colors.yellow};
  font-weight: lighter;

`
