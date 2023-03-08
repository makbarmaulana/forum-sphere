import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { asyncAddThread } from '../states/threads/actions';
import { Button } from './styled/Button';
import { FormGroup, Input, TextArea } from './styled/Form';

function AddThread() {
  const [formState, onFormChange] = useInput({
    title: '',
    body: '',
    category: '',
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addThread = (e) => {
    e.preventDefault();
    dispatch(asyncAddThread(formState))
      .then(() => navigate('/'))
      .catch((error) => setErrorMsg(error.message));
  };

  return (
    <FormGroup onSubmit={addThread}>
      {errorMsg && <p>{errorMsg}</p>}
      <Input
        type="text"
        name="title"
        placeholder="Title"
        value={formState.title}
        onChange={onFormChange}
      />
      <Input
        type="text"
        name="category"
        placeholder="Category"
        value={formState.category}
        onChange={onFormChange}
      />
      <TextArea
        name="body"
        placeholder="Desciptions"
        value={formState.body}
        onChange={onFormChange}
        height="150px"
      />
      <Button type="submit" margin="0 auto">
        ADD
      </Button>
    </FormGroup>
  );
}

export default AddThread;
