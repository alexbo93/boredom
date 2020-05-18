import React from 'react';
import { Store } from 'redux';
import { render, fireEvent, findByTestId } from '@testing-library/react';

import Login from './login';

import configureStore from '../../redux/store';
import { mockedState } from '../../utils/test-utils/__mocks__/state-mock';
import ConnectedComponent from '../../utils/test-utils';
import { selectAuth, selectUserName } from '../../redux/auth';

const getConnectedComponent = (store: Store) => (
  <ConnectedComponent store={store}>
    <Login />
  </ConnectedComponent>
);

let store: Store;
describe('Activities Dashboard Page (Integration)', () => {
  beforeEach(() => {
    store = configureStore();
  });

  it('Should display the title, the input and the button of the form', () => {
    const { getByTestId } = render(getConnectedComponent(store));

    const btn = getByTestId('login-form__submit');
    expect(getByTestId('login-form')).toBeDefined();
    expect(getByTestId('login-form__title')).toBeDefined();
    expect(getByTestId('login-form__input')).toBeDefined();
    expect((btn as HTMLButtonElement).disabled).toBeTruthy();
  });

  describe('Error Labels', () => {
    it('Should display an error label if name has less than 3 chars', async () => {
      const { findByTestId, getByTestId } = render(
        getConnectedComponent(store),
      );

      const input = getByTestId('login-form__input');
      fireEvent.change(input, { target: { value: 'fo' } });
      fireEvent.blur(input);

      const errorLabel = await findByTestId('login-form__error-label');
      expect(errorLabel).toBeDefined();
    });

    it('Should display an error label if name contains numbers', async () => {
      const { findByTestId, getByTestId } = render(
        getConnectedComponent(store),
      );

      const input = getByTestId('login-form__input');
      fireEvent.change(input, { target: { value: 'correctWithNumber543' } });
      fireEvent.blur(input);

      const errorLabel = await findByTestId('login-form__error-label');
      expect(errorLabel).toBeDefined();
    });

    it('Should display an error label if name contains special chars', async () => {
      const { findByTestId, getByTestId } = render(
        getConnectedComponent(store),
      );

      const input = getByTestId('login-form__input');
      fireEvent.change(input, { target: { value: 'correctWithSpec&%$&' } });
      fireEvent.blur(input);

      const errorLabel = await findByTestId('login-form__error-label');
      expect(errorLabel).toBeDefined();
    });
  });

  it('Set the user name to the auth store attribute when login is completed', () => {
    const { getByTestId } = render(getConnectedComponent(store));
    const nickName = 'correctUserName';

    const input = getByTestId('login-form__input');
    fireEvent.change(input, { target: { value: nickName } });

    const btn = getByTestId('login-form__submit');
    fireEvent.click(btn);

    expect(selectUserName(store.getState())).toEqual(nickName);
  });

  it('Should warn if the user accessed login page being already logged in', () => {
    const customStore = configureStore(mockedState);
    const { getByTestId } = render(getConnectedComponent(customStore));

    expect(getByTestId('already-logged__title')).toBeDefined();
  });
});
