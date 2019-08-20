import React, {useContext, useReducer} from 'react';

import TodoForm from "./components/todo-form";
import {usePersistedContext, usePersistedReducer} from "../../commons/hooks/use-persist";
import Store from "./context";
import reducer from "./reducer";
import TodoList from "./components/todo-list";

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
