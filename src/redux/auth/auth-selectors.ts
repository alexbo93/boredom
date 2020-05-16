import { State } from 'redux/types';

export const selectAuth = (state: State) => state.auth;

export const selectUserName = (state: State) => selectAuth(state).nickname;
