import styled from 'styled-components';

export const RandomListItemInfo = styled.div`
  display: grid;
  grid-template-columns: 30% auto;

  @media screen and (max-width: 600px) {
    grid-template-columns: 50% auto;
  }
`;
