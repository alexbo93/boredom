import { Activity } from 'redux/activities/activities-types.d';

interface RandomActivityPanelContentModel {
  activity: Activity;
  likeActivity: Function;
  closePanel: Function;
}
