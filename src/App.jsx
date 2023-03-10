import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Addpage from './pages/Addpage';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import ThreadDetailpage from './pages/ThreadDetailpage';
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
        <>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/threads/new" element={<Addpage />} />
          <Route index path="/threads/:id" element={<ThreadDetailpage />} />
        </>
      )}
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default App;
