import { Activities, Activity } from 'redux/activities/activities-types.d';

interface ActivitiesListModel {
  activities: Activities;
  onLabelSelected: () => void;
}

interface ActivitiesListItemModel {
  activity: Activity;
}
