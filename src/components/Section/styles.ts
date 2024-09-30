import styled, { css } from 'styled-components';
import { ContentTypeEnum } from '.';

interface SectionProps {
  contentType: ContentTypeEnum;
}

export const SectionContainer = styled.section<SectionProps>`
  display: grid;
  grid-template-columns: 1fr;
`;

export const SectionMarker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  ${props =>
    props.contentType === ContentTypeEnum.about
      ? css`
          display: flex;
          flex-direction: column;
          width: 70%;
          gap: 5px;
        `
      : css`
          visibility: hidden;
          height: 0;
        `}
`;
