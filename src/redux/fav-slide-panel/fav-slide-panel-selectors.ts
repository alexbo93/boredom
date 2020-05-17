import { State } from 'redux/types';

export const selectFavourtiesPanelVisible = (state: State) =>
  state.favSlidePanel;
