import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ListLabels from './list-labels';

const defaultProps = {
  onLabelSelected: jest.fn(),
};
describe('Activities List Labels component', () => {
  it('Should display all labels', () => {
    const { getByTestId } = render(<ListLabels {...defaultProps} />);

    expect(getByTestId('order-activity')).toBeDefined();
    expect(getByTestId('order-accessibility')).toBeDefined();
    expect(getByTestId('order-type')).toBeDefined();
    expect(getByTestId('order-participants')).toBeDefined();
    expect(getByTestId('order-price')).toBeDefined();
  });

  it('Should call onLabelSelected method when clicking any of the labels', () => {
    const { getByTestId } = render(<ListLabels {...defaultProps} />);

    const label = getByTestId('order-activity');
    fireEvent.click(label);

    expect(defaultProps.onLabelSelected).toBeCalled();
  });
});
