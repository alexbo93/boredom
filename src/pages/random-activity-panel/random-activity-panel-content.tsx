import React from 'react';
import Tooltip from 'rc-tooltip';

import { RandomActivityPanelContentModel } from './types';
import { RandomListItemInfo } from './random-activity-panel.styled';
import { LikeTitleContainer } from 'components/container';
import { MainButton } from 'components/button';

const RandomActivityPanelContent: React.FC<RandomActivityPanelContentModel> = ({
  activity,
  likeActivity,
  closePanel,
}) => {
  const onLike = () => {
    likeActivity();
    closePanel();
  };
  return (
    <>
      <h1 data-testid='random-activity__title'>Quick Fun!</h1>
      <LikeTitleContainer>
        <h4 data-testid='random-description'>{activity.activity}</h4>
        <Tooltip placement='top' overlay={<span>Like me!</span>}>
          <i
            data-testid='random-like__button'
            onClick={onLike}
            className='far fa-heart'
          />
        </Tooltip>
      </LikeTitleContainer>
      <RandomListItemInfo>
        <strong>Accessibility</strong>
        <span data-testid='random-accessibility'>{activity.accessibility}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Type</strong>
        <span data-testid='random-type'>{activity.type}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Participants</strong>
        <span data-testid='random-participants'>{activity.participants}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Price</strong>
        <span data-testid='random-price'>{activity.price}</span>
      </RandomListItemInfo>
      <MainButton
        as='button'
        data-testid='random-close__button'
        onClick={() => closePanel()}
      >
        I'm done!
      </MainButton>
    </>
  );
};

export default RandomActivityPanelContent;
