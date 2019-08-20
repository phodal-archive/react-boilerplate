import {useEffect} from "react";

export function usePersistedContext(context: any, key = "state") {
  const persistedContext = localStorage.getItem(key);
  return persistedContext ? JSON.parse(persistedContext) : context;
}

export function usePersistedReducer([state, dispatch]: any, key = "state") {
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [key, state]);
  return [state, dispatch];
}
