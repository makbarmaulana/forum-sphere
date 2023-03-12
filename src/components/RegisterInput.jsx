import React from 'react';
import { Link } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { Button } from './styled/Button';
import { FormGroup, LabeledInput } from './styled/Form';

function RegisterInput({ register }) {
  const [formState, onFormChange] = useInput({ name: '', email: '', password: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register(formState);
  };

  return (
    <FormGroup onSubmit={onSubmitHandler}>
      <LabeledInput
        type="text"
        name="name"
        label="Name"
        placeholder="Enter your Name"
        value={formState.name}
        onChange={onFormChange}
      />
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
      <Button type="submit" margin="0 auto">Sign Up</Button>
      <Link to="/login">Have an account?</Link>
    </FormGroup>
  );
}

export default RegisterInput;
