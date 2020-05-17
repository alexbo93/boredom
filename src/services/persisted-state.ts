import { State } from 'redux/types';

export const PERSISTED_STATE = 'persistedState';

type persistedState = {
  [key: string]: any;
};

const whiteList: string[] = ['auth', 'favourites'];

export const getPersistedState: () => any = () => {
  try {
    const serializedState = window.localStorage.getItem(PERSISTED_STATE);
    if (!serializedState) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const persistState = (state: State) => {
  try {
    const stateToPersist: persistedState = {};

    whiteList.forEach((attr: string) => {
      if (!!state[attr as keyof State]) {
        stateToPersist[attr] = JSON.parse(
          JSON.stringify(state[attr as keyof State]),
        );
      }
    });

    window.localStorage.setItem(
      PERSISTED_STATE,
      JSON.stringify(stateToPersist),
    );
  } catch (error) {
    console.error('State could not be persisted: ', error);
  }
};
