import logo from './logo.svg';
import './App.css';
import React from 'react';
import GamePage from './pages/GamePage';
import Home from './pages/Home';
import PlayerPage from './pages/PlayerPage';
import EventList from './pages/EventList';
import EventPage from './pages/EventPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
