import React from 'react';

import { ListLabelsContainer } from './list-labels.styled';

import { ActivitiesListLabelsModel } from 'pages/dashboard/types';

const ActivitiesListLabels: React.FC<ActivitiesListLabelsModel> = ({
  onLabelSelected,
}) => (
  <ListLabelsContainer data-testid='list__labels-container'>
    <div></div>
    <div onClick={() => onLabelSelected('activity')}>Activity</div>
    <div onClick={() => onLabelSelected('accessibility')}>Accessibility</div>
    <div onClick={() => onLabelSelected('type')}>Type</div>
    <div onClick={() => onLabelSelected('participants')}>Participants</div>
    <div onClick={() => onLabelSelected('price')}>Price</div>
  </ListLabelsContainer>
);

export default ActivitiesListLabels;
