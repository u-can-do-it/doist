export const usePersitState = (state, key) =>
  localStorage.setItem(key, JSON.stringify(state));

export const getPersistedState = key => JSON.parse(localStorage.getItem(key));
