import './App.css';
import React from 'react';
import GamePage from './pages/GamePage';
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';
import Login from './pages/Login';
import EventList from './pages/EventList';
import EventPage from './pages/EventPage';
import {Route, Routes} from 'react-router-dom';
import ProtectView from './pages/ProtectView';
import UpdateEvent from './pages/UpdateEvent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GamePage />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/events/:pk" element={<EventPage />} />
        <Route path="/account/create" element={<SignupPage />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/proview/" element={<ProtectView />} />
        <Route path='/update/event/:pk' element={<UpdateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
