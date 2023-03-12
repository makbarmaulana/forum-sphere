import React from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { Button } from './styled/Button';
import { FormGroup, LabeledInput } from './styled/Form';

function LoginInput({ login }) {
  const [formState, onFormChange] = useInput({ email: '', password: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login(formState);
  };

  return (
    <FormGroup onSubmit={onSubmitHandler}>
      <LabeledInput
        type="email"
        name="email"
        label="Email"
        placeholder="Enter your Email"
        value={formState.email}
        onChange={onFormChange}
      />
      <LabeledInput
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your Password"
        value={formState.password}
        onChange={onFormChange}
      />
      <Button type="submit" margin="0 auto">
        Sign In
      </Button>
      <Link to="/register">Don&apos;t have an account</Link>
    </FormGroup>
  );
}

export default LoginInput;
