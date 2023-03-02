import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route index path="/" element={<Homepage />} />
      <Route index path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default App;
