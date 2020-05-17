import React from 'react';

import { FavouritesListModel } from 'pages/slide-panel/slide-panel-types.d';

import { FavouritesListContainer } from './favourites-list.styled';
import FaviouritesListItem from './list-item';

const FavouritesList: React.FC<FavouritesListModel> = ({
  favourites,
  onFavouriteRemove,
}) => (
  <FavouritesListContainer>
    {Object.keys(favourites).map((id: string) => (
      <FaviouritesListItem
        favourite={favourites[id]}
        onRemove={() => onFavouriteRemove(id)}
      />
    ))}
  </FavouritesListContainer>
);

export default FavouritesList;
