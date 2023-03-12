import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../components/Header';
import Leaderboards from '../components/Leaderboards';
import { Button } from '../components/styled/Button';
import ThreadsList from '../components/ThreadsList';
import Trends from '../components/Trends';
import { setThreadsByCategory } from '../states/category/action';
import { asyncPopulateStates } from '../states/shared/actions';

function Homepage() {
  const {
    authUser = null,
    category = null,
    threads = [],
    users = [],
    leaderboards = null,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    dispatch(asyncPopulateStates());
  }, [dispatch]);

  const filteredThreads = threads
    .map((thread) => ({
      ...thread,
      user: users.find((user) => user.id === thread.ownerId),
      authUser,
    }))
    .filter((thread) => thread.title.toLowerCase().includes(keyword.toLowerCase()))
    .filter((thread) => category === null || thread.category === category);

  const handleClearFilter = () => {
    dispatch(setThreadsByCategory(null));
    setKeyword('');
  };

  return (
    <Container>
      <Header keyword={keyword} setKeyword={setKeyword} />
      <Main>
        <Trends threads={threads} />
        <ThreadContainer>
          {keyword && (
          <p>
            {filteredThreads.length}
            {' '}
            thread found for &quot;
            {keyword}
            &quot;
            {category && (
            <>
              {' '}
              in
              {' '}
              <strong>
                #
                {category}
              </strong>
            </>
            )}
          </p>
          )}
          {category && (
            <Button margin="1rem 0" onClick={handleClearFilter}>
              clear filter
            </Button>
          )}
          <ThreadsList threads={filteredThreads} />
        </ThreadContainer>
        <Leaderboards leaderboards={leaderboards} />
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
