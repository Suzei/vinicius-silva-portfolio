import styled from "styled-components";
import Romero from "../../assets/romero.png";

export const Container = styled.header`
  display: grid;
  background: url(${Romero}) no-repeat;
  background-position-x: -90px;
  background-position-y: 20px;
  background-size: 350px;
  padding-top: 99px;
  width: 100%;

  span {
    display: block;
    color: ${(props) => props.theme.colors.yellow};
    font-size: 1.25rem;
    font-weight: 300;
    margin-top: 30px;
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
