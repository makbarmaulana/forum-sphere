import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import RegisterInput from '../components/RegisterInput';
import { Logo } from '../components/styled/Logo';
import { asyncRegister } from '../states/users/actions';

function Registerpage() {
  const dispatch = useDispatch();

  const registerHandler = (registerForm) => {
    dispatch(asyncRegister(registerForm));
  };

  return (
    <Main>
      <Greeting>
        <h1>Welcome to</h1>
        <Logo />
        <h2>Cuitter</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
          nemo reprehenderit at porro nisi officiis minus obcaecati ipsa
          consectetur quasi.
        </p>
      </Greeting>
      <AuthForm>
        <h1>Create an account</h1>
        <RegisterInput register={registerHandler} />
      </AuthForm>
    </Main>
  );
}

export default Registerpage;

const Main = styled.main`
  min-width: 320px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 2fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Greeting = styled.section`
  border: 1px solid red;
  padding: 3rem 2rem;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  h2 {
    margin: 0.5rem auto;
  }

  p {
    margin-top: 3rem;
  }
`;

const AuthForm = styled.section`
  border: 1px solid red;
  padding: 3rem 2rem;
  text-align: center;

  h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 3rem;
  }
`;
