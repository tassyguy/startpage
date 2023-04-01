import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuItemBase from './components/MenuItemBase';
import Section from './components/Section';
import Home from './pages/Home';
import ControlPanel from './pages/ControlPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <Home/>
      <ControlPanel/>
      <MenuItemBase/>
      <Section/>
    </div>
  );
}

export default App;
