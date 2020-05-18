import React from 'react';
import { Store } from 'redux';
import { render } from '@testing-library/react';

import ActivitiesList from './activities-list';

import configureStore from '../../../redux/store';
import { mockedState } from '../../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../../utils/test-utils';
import { ActivitiesListModel } from '../types';
import { selectFavourites } from '../../../redux/favourites';

const defaultProps = {
  activities: mockedState.activities,
  idList: Object.keys(mockedState.activities),
  favourites: mockedState.favourites,
  onLabelSelected: jest.fn(),
  onToggleActivityLike: jest.fn(),
};

const getConnectedComponent = (
  store: Store,
  props: ActivitiesListModel = defaultProps,
) => (
  <ConnectedComponent store={store}>
    <ActivitiesList {...props} />
  </ConnectedComponent>
);
let store = configureStore(mockedState);

describe('Posts List component', () => {
  it('Should display the container, the filters and the list', () => {
    const { getByTestId, getAllByTestId } = render(
      getConnectedComponent(store),
    );

    expect(getByTestId('activities-list__container')).toBeDefined();
    expect(getAllByTestId('list__item-container').length).toBe(13);
    expect(getByTestId('list__labels-container')).toBeDefined();
  });

  it('There should be as many favourites as there are in store', () => {
    const { container } = render(getConnectedComponent(store));

    const favourites = container.getElementsByClassName('fas fa-heart');
    const storeFavourites = selectFavourites(store.getState());
    expect(favourites.length).toEqual(Object.keys(storeFavourites).length);
  });
});
