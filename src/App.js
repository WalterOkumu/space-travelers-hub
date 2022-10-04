import React from 'react';
import { Routes, Route /* , Navigate */ } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/my-profile" element={<Profile />} />
      {/* <Route path="/rockets" render={() => <Navigate to="/" />} /> */}
    </Routes>
  </>
);

export default App;
