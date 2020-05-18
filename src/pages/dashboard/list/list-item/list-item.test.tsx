import React from 'react';
import { render } from '@testing-library/react';

import ActivitiesListItem from './list-item';
import mockActivities from '../../../../utils/test-utils/__mocks__/activities-mock';

const defaultProps = {
  activity: mockActivities['3136729'],
  isFavourite: false,
  onToggleLike: jest.fn(),
};
describe('Activities List Item component', () => {
  it('Should display all params', () => {
    const { getByTestId } = render(<ActivitiesListItem {...defaultProps} />);

    expect(getByTestId('activities-list__like')).toBeDefined();
    expect(getByTestId('description').innerHTML).toContain(
      defaultProps.activity.activity,
    );
    expect(getByTestId('accessibility').innerHTML).toContain(
      defaultProps.activity.accessibility,
    );
    expect(getByTestId('type').innerHTML).toContain(defaultProps.activity.type);
    expect(getByTestId('participants').innerHTML).toContain(
      defaultProps.activity.participants,
    );
    expect(getByTestId('price').innerHTML).toContain(
      defaultProps.activity.price,
    );
  });

  it('Should show a filled heart if activity is favourite', () => {
    const customProps = { ...defaultProps, isFavourite: true };
    const { queryAllByTestId, getByTestId } = render(
      <ActivitiesListItem {...customProps} />,
    );

    expect(getByTestId('filled-heart')).toBeDefined();
    expect(queryAllByTestId('empty-heart').length).toBe(0);
  });

  it('Should show an empty heart if activity is not favourite', () => {
    const { queryAllByTestId, getByTestId } = render(
      <ActivitiesListItem {...defaultProps} />,
    );

    expect(queryAllByTestId('filled-heart').length).toBe(0);
    expect(getByTestId('empty-heart')).toBeDefined();
  });
});
