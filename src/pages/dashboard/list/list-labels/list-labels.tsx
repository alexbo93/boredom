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
    <ItemDescriptionLabel onClick={() => onLabelSelected('activity')}>
      Activity
    </ItemDescriptionLabel>
    <ItemLabel onClick={() => onLabelSelected('accessibility')}>
      Accessibility
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('type')}>Type</ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('participants')}>
      Participants
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('price')}>Price</ItemLabel>
  </ListLabelsContainer>
);

export default ActivitiesListLabels;
