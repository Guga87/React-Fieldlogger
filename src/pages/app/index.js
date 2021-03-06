import React from 'react';
import logo from '../../assets/logo.png';
import './index.css';
import '../dashboard/index';
import Dashboard from '../dashboard/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá Mundo Romiotto!
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
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
