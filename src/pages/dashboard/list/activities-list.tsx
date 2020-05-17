import React from 'react';

import ActivitiesListItem from './list-item';
import ActivitiesListLabels from './list-labels';

import { ActivitiesListModel } from '../types';

const ActivitiesList: React.FC<ActivitiesListModel> = ({
  idList,
  activities,
  favourites,
  onLabelSelected,
  onToggleActivityLike,
}) => {
  const getIsFavourite = (id: string) => !!favourites[id];
  const getList = () => {
    return idList.map((activityId: string) => {
      const activity = activities[activityId];
      return (
        <ActivitiesListItem
          activity={activity}
          isFavourite={getIsFavourite(activityId)}
          onToggleLike={onToggleActivityLike}
          key={activityId}
        />
      );
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
