import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';

import {
  selectFavourtiesPanelVisible,
  setFavouritesInvisible,
} from 'redux/fav-slide-panel';
import { selectFavourites, removeFavourite } from 'redux/favourites';
import styles from './slide-panel.module.css';

import FavouritesList from './list';
import { NotFoundLabel } from 'pages/dashboard/dashboard.styled';

const SlidePanel: React.FC<{}> = () => {
  const isPanelVisible = useSelector(selectFavourtiesPanelVisible);
  const dispatch = useDispatch();
  const setPanelInvisible = () => dispatch(setFavouritesInvisible());
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
      >
        <h3>Favourites List</h3>
        {getIsFavouritesEmpty() ? (
          <FavouritesList
            favourites={favourites}
            onFavouriteRemove={onFavouriteRemove}
          />
        ) : (
          <NotFoundLabel>You don't have favourites yet!</NotFoundLabel>
        )}
      </ReactModal>
    </div>
  );
};

export default SlidePanel;
