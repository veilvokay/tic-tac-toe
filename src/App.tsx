import React from 'react';
import './App.css';
import { PlayerContextPrivder } from './constants/Player';
import Router from './Router';

function App() {
  return (
    <PlayerContextPrivder>
      <Router />
    </PlayerContextPrivder>
  );
}

export default App;
