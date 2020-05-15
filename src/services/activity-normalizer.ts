import { Activity, Activities } from '../redux/activities/activities-types';

class ActivityNormalizer {
  static normalize(activities: Activity[]): Activities {
    const normalized = activities.reduce(
      (obj: Activities, activity: Activity) => {
        obj[activity.id] = activity;
        return obj;
      },
      {},
    );

    return normalized;
  }
}

export default ActivityNormalizer;
