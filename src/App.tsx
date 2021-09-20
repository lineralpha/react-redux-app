import React from 'react';
import logo from './logo.svg';
// import { Counter } from './components/Counter';
import './App.css';
import NewCounter from './components/NewCounter';
import ShowDogs from './components/ShowDogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    </header>
        <NewCounter />
        <ShowDogs />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <footer>
            <span>Learn </span>
            <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                React
            </a>
            <span>, </span>
            <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Redux
            </a>
            <span>, </span>
            <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Redux Toolkit
            </a>
            ,<span> and </span>
            <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                React Redux
            </a>
        </footer>
    </div>
  );
}

export default App;
