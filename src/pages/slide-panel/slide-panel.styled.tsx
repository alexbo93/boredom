import styled, { css } from 'styled-components';

export const modalStyles = css`
  position: absolute;
  top: 0px;
  left: 100px;
  right: 0px;
  bottom: 0px;
  background: rgb(255, 255, 255);
  overflow: auto;
  outline: none;
  padding: 20px;

  @media (max-width: 600px) {
    left: 40px;
  }
`;
