import React from 'react';
import styled from 'styled-components';

function Leaderboards({ leaderboards }) {
  if (!leaderboards) return null;

  return (
    <Container>
      <Header>
        <h3>Leaderboards</h3>
      </Header>
      <List>
        {leaderboards.map(({ user, score }, index) => (
          <li key={user.id}>
            <p className="ranking">
              {index + 1}
              .
            </p>
            <img src={user.avatar} alt={user.name} />
            <p className="name">{user.name}</p>
            <p className="score">{score}</p>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Leaderboards;

const Container = styled.aside`
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  height: max-content;
  max-height: 550px;
  padding: 14px;
  border-radius: 14px;
  background-color: #1b2730;

  button {
    background-color: unset;
    border: unset;
    color: #fff;
    font-size: 14px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 18px;

  h3 {
    font-size: 16px;
    font-weight: 600;
  }
`;

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;

    img {
      width: 35px;
      border-radius: 50%;
    }

    .score {
      margin-left: auto;
    }
  }
`;
