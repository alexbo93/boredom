import { css } from 'styled-components';

export const HoverAnimation = css`
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    transform: scale(1.3);
  }
`;
