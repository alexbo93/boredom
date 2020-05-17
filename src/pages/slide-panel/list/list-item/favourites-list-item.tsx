import React from 'react';

import { FavouritesListItemModel } from 'pages/slide-panel/slide-panel-types.d';
import {
  FavouriteListItemContainer,
  FavouritesListItemInfo,
  ItemTitleContainer,
} from './favourites-list-item.styled';

const FavouritesListItem: React.FC<FavouritesListItemModel> = ({
  favourite,
  onRemove,
}) => (
  <FavouriteListItemContainer>
    <ItemTitleContainer>
      <h4>{favourite.activity}</h4>
      <i onClick={() => onRemove()} className='fas fa-heart' />
    </ItemTitleContainer>
    <FavouritesListItemInfo>
      <i className='fas fa-percentage' />
      <span>{favourite.accessibility}</span>
    </FavouritesListItemInfo>
    <FavouritesListItemInfo>
      <i className='fas fa-play' />
      <span>{favourite.type}</span>
    </FavouritesListItemInfo>
    <FavouritesListItemInfo>
      <i className='fas fa-user-friends' />
      <span>{favourite.participants}</span>
    </FavouritesListItemInfo>
    <FavouritesListItemInfo>
      <i className='fas fa-euro-sign' />
      <span>{favourite.price}</span>
    </FavouritesListItemInfo>
  </FavouriteListItemContainer>
);

export default FavouritesListItem;
