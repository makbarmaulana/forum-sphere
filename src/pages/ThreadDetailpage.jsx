import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Comments from '../components/Comments';
import Navigation from '../components/styled/Navigation';
import ThreadDetail from '../components/ThreadDetail';
import { asyncGetThreadDetail } from '../states/threadDetail/action';

function ThreadDetailpage() {
  const {
    threadDetail = null,
    authUser = null,
  } = useSelector((state) => state);
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

  const commentsList = threadDetail.comments.map((comment) => ({
    ...comment,
    authUser,
  }));

  return (
    <Container>
      <Navigation />
      <Main>
        <ThreadSection>
          <ThreadDetail {...threadDetailData} />
        </ThreadSection>
        <CommentSection>
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
