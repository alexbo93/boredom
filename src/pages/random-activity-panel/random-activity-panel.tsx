import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';

import {
  selectRandomActivityVisible,
  setRandomInvisible,
} from 'redux/random-activity-panel';
import { getRandomActivity, selectRandomActivity } from 'redux/random-activity';

import RandomActivityPanelContent from './random-activity-panel-content';
import { Activity } from 'redux/activities/activities-types';
import { addFavourite } from 'redux/favourites';

import styles from './random-activity-panel.module.css';

const RandomActivityPanel: React.FC<{}> = () => {
  const isPanelVisible = useSelector(selectRandomActivityVisible);
  const randomActivity = useSelector(selectRandomActivity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isPanelVisible) dispatch(getRandomActivity());
  }, [isPanelVisible, dispatch]);

  const setPanelInvisible = () => dispatch(setRandomInvisible());
  const getIsModalVisible = () => isPanelVisible && !!randomActivity;
  const onActivityLike = () => {
    if (randomActivity) dispatch(addFavourite(randomActivity));
  };

  return (
    <ReactModal
      className={styles.randomContentContainer}
      isOpen={getIsModalVisible()}
      onRequestClose={setPanelInvisible}
      shouldCloseOnOverlayClick
    >
      <RandomActivityPanelContent
        activity={randomActivity as Activity}
        likeActivity={onActivityLike}
        closePanel={setPanelInvisible}
      />
    </ReactModal>
  );
};

export default RandomActivityPanel;
