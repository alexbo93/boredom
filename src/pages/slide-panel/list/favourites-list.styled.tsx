import styled from 'styled-components';

export const FavouritesListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;
