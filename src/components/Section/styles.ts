import styled, { css } from 'styled-components';
import { ContentTypeEnum } from '.';

interface SectionProps {
  contentType?: ContentTypeEnum;
}

export const SectionContainer = styled.section<SectionProps>`
  display: grid;
  grid-template-columns: 1fr;

  &:nth-child(even) {
    > div:first-child {
      flex-direction: row-reverse;
    }
  }
`;

export const SectionMarker = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  gap: 1rem;

  p {
    color: ${props => props.theme.colors.yellow};
    padding: 1rem 0rem;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export const SectionStripes = styled.div<SectionProps>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  gap: 10px;

  hr {
    visibility: hidden;
    display: none;
  }
  ${props =>
    !props.contentType &&
    css`
      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        hr {
          visibility: visible;
        }
      }
    `}
`;

export const Vl = styled.div`
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    height: 140px;
    width: 0.1px;
    background: ${props => props.theme.colors.yellow};
  }
`;
