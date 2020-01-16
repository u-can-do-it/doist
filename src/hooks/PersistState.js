import { useEffect } from "react";

export const usePersitState = (state, key) => {
  useEffect(() => {
    const persist = () => {
      console.log(state);
      localStorage.setItem(key, JSON.stringify(state));
    };
    persist();
  }, [state]);
};

export const getPersistedState = key => JSON.parse(localStorage.getItem(key));
