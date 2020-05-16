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
    keys.map((activityId: string) => {
      const activity = activities[activityId];
      return <ActivitiesListItem activity={activity} key={activity.id} />;
    });
  };

  return (
    <div data-testid='activities-list__list-container'>
      <ActivitiesListLabels onLabelSelected={onLabelSelected} />
      {activities.length ? getList() : 'No activities to show'}
    </div>
  );
};

export default ActivitiesList;
