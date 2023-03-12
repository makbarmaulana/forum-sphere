import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setThreadsByCategory } from '../states/category/action';
import { countThreadsByCategory } from '../utils/categoryCount';

function Trends({ threads }) {
  const [visibleCategories, setVisibleCategories] = useState(10);
  const threadCounts = countThreadsByCategory(threads);
  const dispatch = useDispatch();

  const categories = Object.keys(threadCounts)
    .sort((a, b) => threadCounts[b] - threadCounts[a])
    .slice(0, visibleCategories);

  const handleCategory = (category) => {
    dispatch(setThreadsByCategory(category));
  };

  const handleShowMore = () => {
    setVisibleCategories(visibleCategories > 2 ? 2 : 10);
  };

  return (
    <Container>
      <Header>
        <h3>Trend for you</h3>
      </Header>
      <Category>
        {categories.length <= 0 && <p>No categories found</p>}
        {categories.map((category) => (
          <li key={category}>
            <button
              type="button"
              className="category"
              onClick={() => handleCategory(category)}
            >
              #
              {category}
            </button>
            <p className="count">
              {threadCounts[category]}
              {' '}
              Threads
            </p>
          </li>
        ))}
      </Category>
      {categories.length > 0 && (
      <Footer>
        <button type="button" className="btn-show" onClick={handleShowMore}>
          {visibleCategories <= 2 ? 'Show More' : 'Show Less'}
        </button>
      </Footer>
      )}
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
