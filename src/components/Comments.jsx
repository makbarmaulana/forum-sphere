import React from 'react';
import styled from 'styled-components';
import { IoThumbsDown, IoThumbsUp } from 'react-icons/io5';
import { postedAt } from '../utils/formatDate';
import { Button } from './styled/Button';

function Comments({
  content, createdAt, upVotesBy, downVotesBy, owner,
}) {
  return (
    <Card>
      <CardImage>
        <img src={owner.avatar} alt={owner.name} />
      </CardImage>
      <CardHeader>
        <span>
          <p className="username">{owner.name}</p>
          <p className="tag">
            @
            {owner.id}
          </p>
        </span>
        <p className="date">{postedAt(createdAt)}</p>
      </CardHeader>
      <CardBody>
        <p className="body">{content}</p>
      </CardBody>
      <CardFooter>
        <Button type="button" className="like">
          <IoThumbsUp />
          <p>{upVotesBy.length}</p>
        </Button>
        <Button type="button" className="dislike">
          <IoThumbsDown />
          <p>{downVotesBy.length}</p>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Comments;

const Card = styled.div`
  background-color: #1b2730;
  border-radius: 14px;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const CardImage = styled.div`
  width: max-content;
  grid-row: span 2;

  img {
    width: 40px;
    border-radius: 50%;
  }
`;

const CardHeader = styled.div`
  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .username {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }

    .tag {
      color: #838f9c;
      font-size: 12px;
      font-weight: 500;
    }
  }

  .date {
    color: #838f9c;
    font-size: 12px;
    font-weight: 400;
  }
`;

const CardBody = styled.div`
  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: unset;

    :hover {
      text-decoration: underline;
    }
  }

  .body {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
`;
const CardFooter = styled.div`
  margin-top: 0.8rem;
  padding: 0 8px;
  grid-column: span 2;
  display: flex;
  align-items: baseline;
  gap: 12px;

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    gap: 6px;
    height: 100%;
    font-size: 18px;
    background-color: transparent;
    padding: unset;
    cursor: unset;

    p {
      font-size: 18px;
      font-weight: 400;
    }

    svg {
      cursor: pointer;
    }

    :hover {
      background-color: unset;
    }

    &.like {
      svg:hover {
        color: red;
      }
    }

    &.dislike svg:hover {
      color: orange;
    }
  }
`;
