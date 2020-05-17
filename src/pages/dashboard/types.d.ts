import { Activities, Activity } from 'redux/activities/activities-types.d';

type selectLabelFn = (orderingAttr: string) => void;
type likeMethod = (activity: Activity) => void;

interface ActivitiesListModel {
  idList: string[];
  activities: Activities;
  favourites: Activities;
  onLabelSelected: selectLabelFn;
  onToggleActivityLike: likeMethod;
}

interface ActivitiesListItemModel {
  activity: Activity;
  isFavourite: boolean;
  onToggleLike: likeMethod;
}

interface ActivitiesListLabelsModel {
  onLabelSelected: selectLabelFn;
}

interface ActivityFiltersModel {
  filter: string;
  displayFavs: boolean;
  setFilter: (filter: string) => void;
  toggleDisplayFavs: () => void;
}
