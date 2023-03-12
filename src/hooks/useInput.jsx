import { useState } from 'react';

export const useInput = (defaultValue = {}) => {
  const [state, setState] = useState(defaultValue);

  const onValueChange = ({ target: { name, value } }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return [state, onValueChange, setState];
};
