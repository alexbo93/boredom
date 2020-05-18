import React from 'react';
import { render } from '@testing-library/react';

import ActivitiesList from './activities-list';

import mockedActivities, {
  mockFavourites,
} from '../../../utils/test-utils/__mocks__/activities-mock';

const defaultProps = {
  activities: mockedActivities,
  idList: Object.keys(mockedActivities),
  favourites: mockFavourites,
  onLabelSelected: jest.fn(),
  onToggleActivityLike: jest.fn(),
};

describe('Activities List component', () => {
  it('Should display the container, the filters and the list', () => {
    const { getByTestId, getAllByTestId } = render(
      <ActivitiesList {...defaultProps} />,
    );

    expect(getByTestId('activities-list__container')).toBeDefined();
    expect(getAllByTestId('list__item-container').length).toBe(13);
    expect(getByTestId('list__labels-container')).toBeDefined();
  });

  it('There should be as many favourites as there are in store', () => {
    const { container } = render(<ActivitiesList {...defaultProps} />);

    const favourites = container.getElementsByClassName('fas fa-heart');
    const storeFavourites = mockFavourites;
    expect(favourites.length).toEqual(Object.keys(storeFavourites).length);
  });
});
