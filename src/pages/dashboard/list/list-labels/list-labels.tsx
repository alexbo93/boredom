import React from 'react';

import {
  ListLabelsContainer,
  ItemLabel,
  ItemDescriptionLabel,
  ListLabel,
  ListIcon,
} from './list-labels.styled';

import { ActivitiesListLabelsModel } from 'pages/dashboard/types';

const ActivitiesListLabels: React.FC<ActivitiesListLabelsModel> = ({
  onLabelSelected,
}) => (
  <ListLabelsContainer data-testid='list__labels-container'>
    <div></div>
    <ItemDescriptionLabel onClick={() => onLabelSelected('activity')}>
      <ListLabel>
        Activity
        <i className='fas fa-sort-down' />
      </ListLabel>
      <ListIcon className='fas fa-snowboarding' />
    </ItemDescriptionLabel>
    <ItemLabel onClick={() => onLabelSelected('accessibility')}>
      <ListLabel>
        Accessibility
        <i className='fas fa-sort-down' />
      </ListLabel>
      <ListIcon className='fas fa-percentage' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('type')}>
      <ListLabel>
        Type
        <i className='fas fa-sort-down' />
      </ListLabel>
      <ListIcon className='fas fa-play' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('participants')}>
      <ListLabel>
        Participants
        <i className='fas fa-sort-down' />
      </ListLabel>
      <ListIcon className='fas fa-user-friends' />
    </ItemLabel>
    <ItemLabel onClick={() => onLabelSelected('price')}>
      <ListLabel>
        Price
        <i className='fas fa-sort-down' />
      </ListLabel>
      <ListIcon className='fas fa-euro-sign' />
    </ItemLabel>
  </ListLabelsContainer>
);

export default ActivitiesListLabels;
