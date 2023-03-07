import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import ThreadsList from '../components/ThreadsList';
import Trends from '../components/Trends';
import { fetchingUsersAndThreads } from '../states/shared/actions';

function Homepage() {
  const {
    authUser = null,
    threads = [],
    users = [],
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser,
  }));

  return (
    <Container>
      <Header />
      <Main>
        <Trends threads={threads} />
        <ThreadContainer>
          <ThreadsList threads={threadsList} />
        </ThreadContainer>
        <Leaderboard />
      </Main>
    </Container>
  );
}

export default Homepage;

const Container = styled.aside`
  height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 0.5rem 2rem 0 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const ThreadContainer = styled.div`
  height: 100%;
  position: relative;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Leaderboard = styled.aside`
  border: 1px solid blue;
  height: max-content;
  `;
