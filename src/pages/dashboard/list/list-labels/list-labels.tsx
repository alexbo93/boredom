import React from 'react';

import {
  ListLabelsContainer,
  ItemLabel,
  ItemDescriptionLabel,
} from './list-labels.styled';

import { ActivitiesListLabelsModel } from 'pages/dashboard/types';

const ActivitiesListLabels: React.FC<ActivitiesListLabelsModel> = ({
  onLabelSelected,
}) => (
  <ListLabelsContainer data-testid='list__labels-container'>
    <div></div>
    <ItemDescriptionLabel onClick={() => onLabelSelected('activity')}>
      Activity
      <i className='fas fa-sort-down' />
    </ItemDescriptionLabel>
    <ItemLabel onClick={() => onLabelSelected('accessibility')}>
      Accessibility
      <i className='fas fa-sort-down' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('type')}>
      Type
      <i className='fas fa-sort-down' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('participants')}>
      Participants
      <i className='fas fa-sort-down' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('price')}>
      Price
      <i className='fas fa-sort-down' />
    </ItemLabel>
  </ListLabelsContainer>
);

export default ActivitiesListLabels;
