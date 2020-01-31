export const persistState = (state, key) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const getPersistedState = key => JSON.parse(localStorage.getItem(key));

export const deletePersistedState = key => localStorage.removeItem(key);
