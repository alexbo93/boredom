import React from 'react';

import ActivitiesListItem from './list-item';
import ActivitiesListLabels from './list-labels';

import { ActivitiesListModel } from '../types';

const ActivitiesList: React.FC<ActivitiesListModel> = ({
  activities,
  onLabelSelected,
}) => {
  const getList = () => {
    const keys = Object.keys(activities);
    return keys.map((activityId: string) => {
      const activity = activities[activityId];
      console.log('activity: ', activity);
      return <ActivitiesListItem activity={activity} key={activity.id} />;
    });
  };

  return (
    <div data-testid='activities-list__list-container'>
      <ActivitiesListLabels onLabelSelected={onLabelSelected} />
      {getList()}
    </div>
  );
};

export default ActivitiesList;
