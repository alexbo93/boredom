import React from 'react';
import { ActivitiesListItemModel } from 'pages/dashboard/types';

import {
  ListItemContainer,
  ItemIconContainer,
  ItemVariableInfoContainer,
  ItemDescriptionContainer,
} from './list-item.styled';

const ActivitiesListItem: React.FC<ActivitiesListItemModel> = ({
  activity,
  isFavourite,
  onToggleLike,
}) => {
  const onLike = () => onToggleLike(activity);
  return (
    <ListItemContainer data-testid='list__item-container'>
      <ItemIconContainer onClick={onLike} data-testid='activities-list__like'>
        {isFavourite ? (
          <i className='fas fa-heart' />
        ) : (
          <i className='far fa-heart' />
        )}
      </ItemIconContainer>
      <ItemDescriptionContainer>
        <span data-testid='description'>{activity.activity}</span>
      </ItemDescriptionContainer>
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
        <span data-testid='price'>{activity.price}</span>
      </ItemVariableInfoContainer>
    </ListItemContainer>
  );
};

export default ActivitiesListItem;
