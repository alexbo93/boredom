import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';

import {
  selectFavourtiesPanelVisible,
  setFavouritesInvisible,
} from 'redux/fav-slide-panel';
import { selectFavourites, removeFavourite } from 'redux/favourites';

import FavouritesList from './list';
import { NotFoundLabel } from 'pages/dashboard/dashboard.styled';
import { MainButton } from 'components/button';

import { FavouritesListTitleClose } from './slide-panel.styled';
import styles from './slide-panel.module.css';

const SlidePanel: React.FC<{}> = () => {
  const isPanelVisible = useSelector(selectFavourtiesPanelVisible);
  const dispatch = useDispatch();
  const setPanelInvisible = () => {
    document.body.removeAttribute('style');
    dispatch(setFavouritesInvisible());
  };
  const favourites = useSelector(selectFavourites);

  const onFavouriteRemove = (id: string) => dispatch(removeFavourite(id));
  const getIsFavouritesEmpty = () => !!Object.keys(favourites).length;

  ReactModal.setAppElement('#root');
  return (
    <div id='modal-container'>
      <ReactModal
        className={styles.slidePanelContentContainer}
        isOpen={isPanelVisible}
        shouldCloseOnOverlayClick={true}
        data-testid='modal'
        onRequestClose={setPanelInvisible}
        onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      >
        <h3>
          Favourites List
          <FavouritesListTitleClose
            onClick={setPanelInvisible}
            className='fas fa-times'
          />
        </h3>
        {getIsFavouritesEmpty() ? (
          <FavouritesList
            favourites={favourites}
            onFavouriteRemove={onFavouriteRemove}
          />
        ) : (
          <NotFoundLabel>You don't have favourites yet!</NotFoundLabel>
        )}
        <MainButton as='button' onClick={setPanelInvisible}>
          Done!
        </MainButton>
      </ReactModal>
    </div>
  );
};

export default SlidePanel;
