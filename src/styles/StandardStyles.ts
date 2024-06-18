import styled from "styled-components";


const GridStandard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px;

  & > :first-child {
    display: flex;
    flex-wrap: wrap;
    gap: 34px;
  }

  & > :nth-child(2) {
    border: 1px solid ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.yellow};
    padding: 24px;
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export default GridStandard
