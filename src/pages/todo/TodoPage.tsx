import React, {useContext, useReducer} from 'react';

import TodoForm from "./components/TodoForm";
import {usePersistedContext, usePersistedReducer} from "../../commons/hooks/usePersist";
import TodoStore from "./context";
import reducer from "./reducer";
import TodoList from "./components/TodoList";

function TodoPage() {
  // create a global store to store the state
  const globalStore = usePersistedContext(useContext(TodoStore), "state");

  // `todos` will be a state manager to manage state.
  const [state, dispatch, todos] = usePersistedReducer(
    useReducer(reducer, globalStore),
    "state" // The localStorage key
  );

  return (
    // @ts-ignore
    <TodoStore.Provider value={{state, dispatch, todos}}>
      <TodoForm />
      <TodoList />
    </TodoStore.Provider>
  );
}

export default TodoPage;
