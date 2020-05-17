import { State } from 'redux/types';

export const selectRandomActivityVisible = (state: State) =>
  state.randomActivityPanel;
