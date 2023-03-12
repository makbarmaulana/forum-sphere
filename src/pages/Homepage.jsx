import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../components/styled/Button';
import { asyncLogOut } from '../states/authUser/action';

function Homepage() {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Homepage</h1>
      <Button onClick={() => dispatch(asyncLogOut())}>Log Out</Button>
    </>
  );
}

export default Homepage;
