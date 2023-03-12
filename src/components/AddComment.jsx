import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';
import { Button } from './styled/Button';
import { FormGroup, TextArea } from './styled/Form';

function AddComment() {
  const [formState, onFormChange] = useInput({ content: '' });
  const dispatch = useDispatch();
  const { id: threadId } = useParams();

  const commentHandler = (e) => {
    e.preventDefault();
    dispatch(asyncAddComment({ threadId, content: formState.content }));
  };

  return (
    <FormGroup onSubmit={commentHandler}>
      <TextArea
        name="content"
        value={formState.content}
        onChange={onFormChange}
        height="100px"
      />
      <Button type="submit" margin="0 0 1rem auto">Comment</Button>
    </FormGroup>
  );
}

export default AddComment;
