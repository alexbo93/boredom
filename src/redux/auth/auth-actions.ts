export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const setUser = (payload: string) => ({
  type: SET_USER,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
