import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../components/styled/Navigation';
import ThreadDetail from '../components/ThreadDetail';
import { asyncGetThreadDetail } from '../states/threadDetail/action';

function ThreadDetailpage() {
  const { threadDetail = null } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) return null;

  return (
    <Container>
      <Navigation />
      <Main>
        <Section>
          <ThreadDetail {...threadDetail} />
        </Section>
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

const Section = styled.section`
  width: 500px;
  margin: 3rem auto;
  height: 100%;

  h3 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
