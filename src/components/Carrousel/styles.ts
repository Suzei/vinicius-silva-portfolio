import Slider from "react-slick";
import styled from "styled-components";

export const SliderManipulator = styled.div`
display: flex;
flex-direction: column;
  .slick-list { margin: 0 -7px; & .slick-slide > div { padding: 0 10px; } }
  gap: 34px;


`

export const SliderItem = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.orange};;
  height: 200px;

`

export const SlideDetail = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 250px;
gap: 34px;

div:not(:first-child) {
  border: 1px solid ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.yellow};
  padding: 24px;
  font-size: 1.25rem;
  font-weight: 400;

}
  & > :first-child {
    background-color: ${props => props.theme.colors.orange};
  }
`
