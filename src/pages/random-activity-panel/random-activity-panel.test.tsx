import React from 'react';
import { Store } from 'redux';
import { mock } from 'jest-mock-extended';
import { render, fireEvent } from '@testing-library/react';

import RandomActivityPanel from './random-activity-panel';

import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../utils/test-utils';

import { ApiClient } from '../../services/api-client';
import { selectFavourites } from '../../redux/favourites';

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <RandomActivityPanel />
  </ConnectedComponent>
);

const returnPromise = new Promise((resolve: any, reject: any) =>
  resolve([mockedState.favourites]),
);
const apiClient = mock<ApiClient>();
apiClient.getRandomActivity.mockReturnValue(returnPromise);

let store: Store;
describe('Activities Dashboard Page (Integration)', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
  });

  it('Should not show the modal if panel is not enabled', () => {
    const { queryAllByTestId } = render(getConnectedComponent(store));

    expect(queryAllByTestId('random-activity__title').length).toBe(0);
  });

  it('Should fetch the random activity and display the content if panel is enabled', async () => {
    const customState = {
      ...mockedState,
      randomActivityPanel: true,
      randomActivity: null,
    };
    const customStore = configureStore(customState);
    const { findByTestId, getByTestId } = render(
      getConnectedComponent(customStore),
    );

    const title = await findByTestId('random-activity__title');
    expect(title).toBeDefined();
    expect(getByTestId('random-description')).toBeDefined();
    expect(getByTestId('random-accessibility')).toBeDefined();
    expect(getByTestId('random-type')).toBeDefined();
    expect(getByTestId('random-participants')).toBeDefined();
    expect(getByTestId('random-price')).toBeDefined();
  });

  it('Should close the modal if hte button to do so is clicked', async () => {
    const customState = { ...mockedState, randomActivityPanel: true };
    const customStore = configureStore(customState);
    const { findByTestId, getByTestId, queryAllByTestId } = render(
      getConnectedComponent(customStore),
    );

    let title = await findByTestId('random-activity__title');
    expect(title).toBeDefined();

    const closeBtn = getByTestId('random-close__button');
    fireEvent.click(closeBtn);

    expect(queryAllByTestId('random-activity__title').length).toBe(0);
  });

  it('Should add the random activity to favourites', async () => {
    const customState = {
      ...mockedState,
      randomActivityPanel: true,
      favourites: {},
    };
    const customStore = configureStore(customState);
    const { findByTestId } = render(getConnectedComponent(customStore));

    let likeBtn = await findByTestId('random-like__button');
    fireEvent.click(likeBtn);

    const favourites = selectFavourites(customStore.getState());
    const mockedFavourite = mockedState.randomActivity.id;
    expect(favourites[mockedFavourite]).toBeDefined();
  });
});
