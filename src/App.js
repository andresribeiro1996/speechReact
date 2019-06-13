import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpeechRecognition from './speechRecognition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <SpeechRecognition />
        </div>
      </header>

    </div>
  );
}

export default App;
