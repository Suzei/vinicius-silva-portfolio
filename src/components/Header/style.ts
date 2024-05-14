import styled from "styled-components";
import Romero from "../../assets/romero.png";

export const Container = styled.header`
  display: grid;
  background: url(${Romero}) 200px no-repeat;
  background-position: top left;
  background-position-x: -60px;
  padding-top: 122px;
  width: 100%;

  span {
    display: inline-block;
    color: ${(props) => props.theme.colors.yellow};
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

export const SocialMedia = styled.div`
  display: grid;
  justify-content: flex-end;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 8.32px;
  }

  svg {
    color: ${(props) => props.theme.colors.orange};
  }

  a {
    font-size: 1rem;
    color: ${(props) => props.theme.colors["gray-1"]};
    font-weight: lighter;
  }
`;
