import React from 'react';
import {
  IoChatbubble,
  IoShare,
  IoThumbsDown,
  IoThumbsUp,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { asyncClearVoteThreadDetail, asyncDownVoteThreadDetail, asyncUpVoteThreadDetail } from '../states/threadDetail/action';
import { postedAt } from '../utils/formatDate';
import { Button } from './styled/Button';

function ThreadDetail({
  id,
  title,
  createdAt,
  body,
  upVotesBy,
  downVotesBy,
  comments,
  owner,
  authUser,
}) {
  const dispatch = useDispatch();
  const isToggleUpVote = upVotesBy.includes(authUser.id);
  const isToggleDownVote = downVotesBy.includes(authUser.id);

  const upVoteHandler = () => {
    if (!isToggleUpVote) {
      dispatch(asyncUpVoteThreadDetail(id));
    } else {
      dispatch(asyncClearVoteThreadDetail(id));
    }
  };

  const downVoteHandler = () => {
    if (!isToggleDownVote) {
      dispatch(asyncDownVoteThreadDetail(id));
    } else {
      dispatch(asyncClearVoteThreadDetail(id));
    }
  };
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
        <h5 className="title">{title}</h5>
        <p className="body">{body}</p>
      </CardBody>
      <CardFooter>
        <Button type="button" className="like" onClick={upVoteHandler}>
          <IoThumbsUp style={isToggleUpVote && { color: 'red' }} />
          <p>{upVotesBy.length}</p>
        </Button>
        <Button type="button" className="dislike" onClick={downVoteHandler}>
          <IoThumbsDown style={isToggleDownVote && { color: 'orange' }} />
          <p>{downVotesBy.length}</p>
        </Button>
        <Button type="button" className="comments">
          <IoChatbubble />
          <p>{comments.length}</p>
        </Button>
        <Button type="button" className="share">
          <IoShare />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ThreadDetail;

const Card = styled.div`
  background-color: #1b2730;
  border-radius: 14px;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const CardImage = styled.div`
  width: max-content;
  grid-row: span 2;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

const CardHeader = styled.div`
  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    .username {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }

    .tag {
      color: #838f9c;
      font-size: 14px;
      font-weight: 500;
    }
  }

  .date {
    color: #838f9c;
    font-size: 14px;
    font-weight: 400;
  }
`;

const CardBody = styled.div`
  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .body {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }
`;
const CardFooter = styled.div`
  margin-top: 1.5rem;
  padding: 0 8px;
  grid-column: span 2;
  display: flex;
  align-items: baseline;
  gap: 12px;

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

    :last-child {
      margin-left: auto;
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

    &.comments svg:hover {
      color: lightgreen;
    }

    &.share {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #838f9c;
      border-radius: 8px;
      width: 30px;
      height: 30px;

      :hover {
        cursor: pointer;
        background-color: blueviolet;
        border-color: transparent;
      }
    }
  }
`;
