import React from 'react';
import { Store } from 'redux';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './dashboard';

import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import { shorterActivities } from '../../utils/test-utils/__mocks__/activities-mock';
import ConnectedComponent from '../../utils/test-utils';
import { selectFavourites } from '../../redux/favourites';

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <Dashboard />
  </ConnectedComponent>
);

const activitiesIds = Object.keys(mockedState.activities);

let store: Store;
describe('Activities Dashboard Page (Integration)', () => {
  beforeEach(() => {
    store = configureStore(mockedState);
    // (callApi as any).mockImplementation(mockApi(200, mockedState.activities));
  });

  it('Should display the filters component and the list', () => {
    const { getByTestId } = render(getConnectedComponent(store));

    expect(getByTestId('filter-area')).toBeDefined();
    expect(getByTestId('activities-list__container')).toBeDefined();
  });

  it('Should display 3 results', () => {
    const customState = { ...mockedState, activities: shorterActivities };
    store = configureStore(customState);
    const { getAllByTestId } = render(getConnectedComponent(store));

    const activities = getAllByTestId('list__item-container');
    expect(activities.length).toBe(3);
  });

  it('Should warn whether there are no activities', () => {
    store = configureStore();
    const { container } = render(getConnectedComponent(store));

    expect(container.innerHTML).toContain('No activities to show');
  });

  describe('Pagination', () => {
    it('Should limit results to 10 for each page and show 2 pages for default results in store', () => {
      const { getAllByTestId, container } = render(
        getConnectedComponent(store),
      );

      const activities = getAllByTestId('list__item-container');

      const paginationContainer = container.getElementsByClassName(
        'pagination',
      )[0];
      const pages = paginationContainer.getElementsByTagName('li');
      expect(activities.length).toBe(10);
      expect(pages.length).toEqual(6); // 2 lis for back navigation, 2 for forward navigation and 2 pages
    });

    it('Should show offset page results if last page is selected (3 in this case)', () => {
      const { getAllByTestId, container } = render(
        getConnectedComponent(store),
      );

      let activities = getAllByTestId('list__item-container');
      const paginationContainer = container.getElementsByClassName(
        'pagination',
      )[0];
      const goToLastPage = paginationContainer.getElementsByTagName('li')[5];

      expect(activities.length).toBe(10);
      fireEvent.click(goToLastPage);

      activities = getAllByTestId('list__item-container');
      const active = container.getElementsByClassName('active')[0];

      expect(activities.length).toBe(3);
      expect(active.innerHTML).toContain('2');
    });
  });

  describe('Filtering', () => {
    it('Should show only the activity corresponding to the value in the search field', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );
      const description = mockedState.activities[activitiesIds[0]].activity;
      const searchFilter = getByTestId('filter-activity');

      fireEvent.change(searchFilter, { target: { value: description } });

      const activities = getAllByTestId('list__item-container');
      expect(activities.length).toBe(1);
      expect(getByTestId('description').innerHTML).toEqual(description);
    });

    it('Should show all favourites from store when filtering for favourites', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );
      const favKeys = Object.keys(mockedState.favourites);
      const favFilter = getByTestId('fav-filter');

      fireEvent.click(favFilter);

      const favs = getAllByTestId('list__item-container');
      expect(favs.length).toBe(favKeys.length);
    });
  });

  describe('Ordering', () => {
    it('Should order alphabetically descending activity description by default', () => {
      const { getAllByTestId } = render(getConnectedComponent(store));

      // m is the alpahabetically higher letter in mocked activities
      const expectedDescription = '<span data-testid="description">m</span>';
      const activities = getAllByTestId('list__item-container');
      expect(activities[0].innerHTML).toContain(expectedDescription);
    });

    it('Should change order if activity name label is clicked', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );

      const orderName = getByTestId('order-activity');
      fireEvent.click(orderName);

      const expectedDescription = '<span data-testid="description">a</span>';
      const activities = getAllByTestId('list__item-container');
      expect(activities[0].innerHTML).toContain(expectedDescription);
    });

    it('Should order by accessibility when clicking table label', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );

      const orderName = getByTestId('order-accessibility');
      fireEvent.click(orderName);

      let first = getAllByTestId('accessibility')[0];
      expect(first.innerHTML).toContain(1);

      fireEvent.click(orderName);

      first = getAllByTestId('accessibility')[0];
      expect(first.innerHTML).toContain(0.1);
    });

    it('Should order by type when clickin table label', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );

      const orderName = getByTestId('order-type');
      fireEvent.click(orderName);

      let first = getAllByTestId('type')[0];
      expect(first.innerHTML).toContain('social');

      fireEvent.click(orderName);

      first = getAllByTestId('type')[0];
      expect(first.innerHTML).toContain('busywork');
    });

    it('Should order by participants when clickin table label', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );

      const orderName = getByTestId('order-participants');
      fireEvent.click(orderName);

      let first = getAllByTestId('participants')[0];
      expect(first.innerHTML).toContain(13);

      fireEvent.click(orderName);

      first = getAllByTestId('participants')[0];
      expect(first.innerHTML).toContain(1);
    });

    it('Should order by price when clickin table label', () => {
      const { getByTestId, getAllByTestId } = render(
        getConnectedComponent(store),
      );

      const orderName = getByTestId('order-price');
      fireEvent.click(orderName);

      let first = getAllByTestId('price')[0];
      expect(first.innerHTML).toContain(13);

      fireEvent.click(orderName);

      first = getAllByTestId('price')[0];
      expect(first.innerHTML).toContain(1);
    });
  });

  describe('Favourites', () => {
    it('Should remove a favourite if selected', () => {
      const { getAllByTestId } = render(getConnectedComponent(store));

      // First element of activities is in favourites List
      const likeBtn = getAllByTestId('activities-list__like')[0];
      fireEvent.click(likeBtn);

      const favourites = selectFavourites(store.getState());
      expect(Object.keys(favourites).length).toBe(2);
    });

    it('Should remove a favourite if selected', () => {
      const { getAllByTestId } = render(getConnectedComponent(store));

      // First element of activities is in favourites List
      const likeBtn = getAllByTestId('activities-list__like')[4];
      fireEvent.click(likeBtn);

      const favourites = selectFavourites(store.getState());
      expect(Object.keys(favourites).length).toBe(4);
    });
  });
});
