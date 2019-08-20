import React, {useContext, useReducer} from 'react';

import TodoForm from "./components/TodoForm";
import {usePersistedContext, usePersistedReducer} from "../../commons/hooks/usePersist";
import Store from "./context";
import reducer from "./reducer";
import TodoList from "./components/TodoList";

function TodoPage() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(Store), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch, todos] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // @ts-ignore
    <Store.Provider value={{state, dispatch, todos}}>
      <TodoForm />
      <TodoList />
    </Store.Provider>
  );
}

export default TodoPage;
