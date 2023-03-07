import React from 'react';
import styled from 'styled-components';
import ThreadItem from './ThreadItem';

function ThreadsList({ threads }) {
  return (
    <Cards>
      { threads.map((thread) => <ThreadItem {...thread} key={thread.id} />) }
    </Cards>
  );
}

export default ThreadsList;

const Cards = styled.div`
  position: sticky;
  top: 0;
  min-height: 160vh;
`;
