import { Activities, Activity } from 'redux/activities/activities-types.d';

type selectLabelFn = (orderingAttr: string) => void;

interface ActivitiesListModel {
  idList: string[];
  activities: Activities;
  onLabelSelected: selectLabelFn;
}

interface ActivitiesListItemModel {
  activity: Activity;
}

interface ActivitiesListLabelsModel {
  onLabelSelected: selectLabelFn;
}
