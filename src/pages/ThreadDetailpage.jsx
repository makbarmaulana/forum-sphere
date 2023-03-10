import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import Navigation from '../components/styled/Navigation';
import ThreadDetail from '../components/ThreadDetail';
import { asyncGetThreadDetail } from '../states/threadDetail/action';

function ThreadDetailpage() {
  const { threadDetail = null, authUser = null } = useSelector(
    (state) => state,
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  const threadDetailData = {
    ...threadDetail,
    authUser,
  };

  const commentsList = threadDetail.comments
    .map((comment) => ({
      ...comment,
      authUser,
      createdAt: new Date(comment.createdAt),
    }))
    .sort((a, b) => b.createdAt - a.createdAt);

  return (
    <Container>
      <Navigation />
      <Main>
        <ThreadSection>
          <ThreadDetail {...threadDetailData} />
        </ThreadSection>
        <CommentSection>
          <AddComment />
          {commentsList.map((comments) => (
            <Comments {...comments} key={comments.id} />
          ))}
        </CommentSection>
      </Main>
    </Container>
  );
}

export default ThreadDetailpage;

const Container = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  height: 100%;
`;

const ThreadSection = styled.section`
  width: 800px;
  margin: 0 auto;
`;

const CommentSection = styled.section`
  width: 700px;
  margin: 0 auto;
`;
