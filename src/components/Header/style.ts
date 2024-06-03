import styled from "styled-components";
import Player from "../../assets/player-larger.png";

export const Container = styled.header`
  display: grid;
  min-height: 600px;
  width: 100%;

  background: url(${Player}) no-repeat;
  background-position-x: -150px;
  background-position-y: -0px;
  background-size: 500px;

  align-items: end;
  grid-auto-flow: column;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 99px;
    background-position-x: 80px;
    background-position-y: -0px;
  }

`;

export const SocialMedia = styled.div`
  &:nth-child(2) {
    display: none;

    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      align-items: flex-end;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;

`;

export const SocialMediaTopic = styled.div`

@media (max-width: ${props => props.theme.breakpoints.tablet}) {
  flex-direction: row-reverse;
}

    display: flex;
    gap: 8.32px;

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
`



export const Resume = styled.p`
  &:nth-child(4) {
display: none;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: flex;
      align-items: flex-end;
    }
  }

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
`


export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;


  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
  }
`;

export const HeaderResume = styled.div`
  display: grid;
  gap: 15px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`
