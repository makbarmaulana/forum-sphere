import React from 'react';
import styled from 'styled-components';
import LoginInput from '../components/LoginInput';
import { Logo } from '../components/styled/Logo';

function Loginpage() {
  const loginHandler = () => {
    // TODO: Dispatch Login
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
        <h1>Sign In to your account</h1>
        <LoginInput login={loginHandler} />
      </AuthForm>
    </Main>
  );
}

export default Loginpage;

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
