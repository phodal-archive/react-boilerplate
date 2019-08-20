import React, {useContext, useReducer} from 'react';

import './App.css';
import Navbar from "./components/nav-bar/nav-bar";
import {usePersistedContext, usePersistedReducer} from "./commons/hooks/use-persist";
import Store from "./pages/contact/context";
import reducer from "./pages/contact/reducer";

function App() {
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
      <div className="App">
        <Navbar></Navbar>
      </div>
    </Store.Provider>
  );
}

export default App;
