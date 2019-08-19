import React from 'react';
import { Button } from 'antd';

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/nav-bar/nav-bar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Button</Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
