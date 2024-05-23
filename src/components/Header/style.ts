import styled from "styled-components";
import Player from "../../assets/player-larger.png";

export const Container = styled.header`
  display: grid;
  min-height: 600px;
  background: url(${Player}) no-repeat;
  background-position-x: 80px;
  background-position-y: -0px;
  background-size: 500px;
  padding-top: 99px;
  width: 100%;
  align-items: flex-end;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;


  div {
    display: flex;
    gap: 8.32px;
  }

  svg {
    color: ${props => props.theme.colors.orange};
  }

  a {
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 0.813rem;
    }

    font-size: 0.688rem;
    color: ${props => props.theme.colors['gray-1']};
    font-weight: lighter;
  }
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  p {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.625rem;
      margin-top: 30px;
    }

    display: flex;
    text-align: left;
    color: ${props => props.theme.colors.yellow};
    font-size: 1.25rem;
    font-weight: 300;
    max-width: 375px;
    width: 100%;
  }
`;
export const HeaderResume = styled.div`
  display: grid;
  gap: 15px;
  flex-direction: column;
`
