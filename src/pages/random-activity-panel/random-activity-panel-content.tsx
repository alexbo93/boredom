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
      <h1>Quick Fun!</h1>
      <LikeTitleContainer>
        <h4>{activity.activity}</h4>
        <Tooltip placement='top' overlay={<span>Like me!</span>}>
          <i onClick={onLike} className='far fa-heart' />
        </Tooltip>
      </LikeTitleContainer>
      <RandomListItemInfo>
        <strong>Accessibility</strong>
        <span>{activity.accessibility}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Type</strong>
        <span>{activity.type}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Participants</strong>
        <span>{activity.participants}</span>
      </RandomListItemInfo>
      <RandomListItemInfo>
        <strong>Price</strong>
        <span>{activity.price}</span>
      </RandomListItemInfo>
      <MainButton as='button' onClick={() => closePanel()}>
        I'm done!
      </MainButton>
    </>
  );
};

export default RandomActivityPanelContent;
