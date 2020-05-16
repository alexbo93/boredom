import React from 'react';
import { ActivitiesListItemModel } from 'pages/dashboard/types';

import {
  ListItemContainer,
  ItemIconContainer,
  ItemVariableInfoContainer,
} from './list-item.styled';

const ActivitiesListItem: React.FC<ActivitiesListItemModel> = ({
  activity,
}) => {
  return (
    <ListItemContainer data-testid='list__item-container'>
      <ItemIconContainer>
        <i className='fas fa-map-marker-alt'></i>
        <span data-testid='description'>{activity.activity}</span>
      </ItemIconContainer>
      <ItemVariableInfoContainer data-testid='accessibility'>
        <span>{activity.accessibility}</span>
      </ItemVariableInfoContainer>
      <ItemVariableInfoContainer data-testid='type'>
        <span>{activity.type}</span>
      </ItemVariableInfoContainer>
      <ItemVariableInfoContainer>
        <span data-testid='participants'>{activity.participants}</span>
      </ItemVariableInfoContainer>
      <ItemVariableInfoContainer>
        <span data-testid='participants'>{activity.price}</span>
      </ItemVariableInfoContainer>
    </ListItemContainer>
  );
};

export default ActivitiesListItem;
