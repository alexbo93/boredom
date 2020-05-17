import styled from 'styled-components';
import { HoverAnimation } from 'components/shared/shared.styled';

export const FavouriteListItemContainer = styled.div`
  padding: 0 10px;
  border: 1px solid #999;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 5px;
  min-height: 150px;

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`;

export const FavouritesListItemInfo = styled.p`
  margin-bottom: 5px;
  margin-top: 5px;
  display: grid;
  grid-template-columns: 30px auto;

  i {
    align-self: center;
  }
`;
