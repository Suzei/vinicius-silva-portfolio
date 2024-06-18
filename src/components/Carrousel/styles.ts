import styled from "styled-components";
import GridStandard from "../../styles/StandardStyles";

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

export const SlideDetail = styled(GridStandard)`
grid-template-rows: 250px;

  & > :first-child {
    background-color: ${props => props.theme.colors.orange};
  }
`
