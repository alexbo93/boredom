import { Activity } from 'redux/activities/activities-types';

interface FavouritesListModel {
  favourites: Activities;
  onFavouriteRemove: (id: string) => void;
}

interface FavouritesListItemModel {
  favourite: Activity;
  onRemove: () => void;
}
