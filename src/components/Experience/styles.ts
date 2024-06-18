import styled from "styled-components";
import Ball from './../../assets/example.png'


export const Container = styled.div`
display: grid;
grid-template-columns: 1fr;
gap: 64px;

  & > :first-child {
    display: flex;
    width: 100%;
    gap: 30px;
}

& > :nth-child(2) {
  display: flex;
  gap: 154px;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(	231,167,39, 30%);
  height: 120px;
  z-index: 7;

  h2 {
    color: ${props => props.theme.colors.yellow};
    font-weight: 500;
    -webkit-text-stroke: 0;
  }
}
`
export const ExpItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.orange};
  width: 100%;
  padding-right: 10px;
  flex-grow: 1;
  min-width: 0;

  picture {
    border: 2px solid black;
    background: url(${Ball}) center no-repeat;
    background-size: cover;
    min-width: 180px;
  }

  h3 {
    font-size: 100px;
    font-weight: 500;
    color: transparent;
    -webkit-text-stroke: 2px ${props => props.theme.colors["dark-1"]};
  }


`

export const ExpDetails = styled.div`
  color: ${props => props.theme.colors.yellow};
  line-height: 1.5;
  padding: 25px;

`
