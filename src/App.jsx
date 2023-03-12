import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const { isPreload = false } = useSelector((state) => state);
  const isAuth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  return (
    <Routes>
      {!isAuth && (
      <>
        <Route path="*" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
      </>
      )}
      {isAuth && (
        <Route index path="/" element={<Homepage />} />
      )}
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default App;
