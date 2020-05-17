import React from 'react';

import { FavouritesListItemModel } from 'pages/slide-panel/slide-panel-types.d';
import { FavouriteListItemContainer } from './favourites-list-item.styled';

const FavouritesListItem: React.FC<FavouritesListItemModel> = ({
  favourite,
  onRemove,
}) => (
  <FavouriteListItemContainer>
    <h4>
      {favourite.activity}
      <i onClick={() => onRemove()} className='fas fa-heart' />
    </h4>
    <p>{favourite.accessibility}</p>
    <p>{favourite.type}</p>
    <p>{favourite.participants}</p>
    <p>{favourite.price}</p>
  </FavouriteListItemContainer>
);

export default FavouritesListItem;
