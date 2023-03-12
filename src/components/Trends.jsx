import React from 'react';
import styled from 'styled-components';

function Trends({ threads }) {
  const categories = [...new Set(threads.map((thread) => thread.category))];

  return (
    <Container>
      <Header>
        <h3>Trend for you</h3>
      </Header>
      <Category>
        {categories.map((category) => (
          <li key={category}>
            <button type="button" className="category">
              #
              {category}
            </button>
            <p className="count">
              1
              {' '}
              Threads
            </p>
          </li>
        ))}
      </Category>
      <Footer>
        <button type="button" className="btn-show">
          Show More
        </button>
      </Footer>
    </Container>
  );
}

export default Trends;

const Container = styled.aside`
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

const Category = styled.ul`
  li {
    list-style: none;

    .category {
      font-size: 16px;
      font-weight: 400;
    }

    .count {
      color: #ffffff6f;
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  .btn-show {
    margin: 0 auto;
    color: #00aeef;
  }
`;
