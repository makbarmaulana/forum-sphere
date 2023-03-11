import { api } from '../../utils/api';

export const ActionTypes = {
  GET_THREAD_DETAIL: 'threadDetail/getThreadDetail',
  UP_VOTE_THREAD_DETAIL: 'threadDetail/upVote',
  DOWN_VOTE_THREAD_DETAIL: 'threadDetail/downVote',
  CLEAR_VOTE_THREAD_DETAIL: 'threadDetail/clearVote',
  ADD_COMMENT: 'comment/addComment',
  UP_VOTE_COMMENT: 'comment/upVote',
  DOWN_VOTE_COMMENT: 'comment/downVote',
  CLEAR_VOTE_COMMENT: 'comment/clearVote',
};

export const getThreadDetailActionCreator = (threadDetail) => ({
  type: ActionTypes.GET_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

export const asyncGetThreadDetail = (threadId) => async (dispatch) => {
  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(getThreadDetailActionCreator(threadDetail));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const upVoteThreadDetailActionsCreator = ({ threadId, userId }) => ({
  type: ActionTypes.UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

export const downVoteThreadDetailActionsCreator = ({ threadId, userId }) => ({
  type: ActionTypes.DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

export const clearVoteThreadDetailActionsCreator = ({ threadId, userId }) => ({
  type: ActionTypes.CLEAR_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

export const asyncUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  const prevState = { threadId, userId: authUser.id };

  dispatch(upVoteThreadDetailActionsCreator({ threadId, userId: authUser.id }));

  try {
    await api.upVoteThread(threadId);
    dispatch(upVoteThreadDetailActionsCreator(prevState));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const asyncDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  const prevState = { threadId, userId: authUser.id };

  dispatch(downVoteThreadDetailActionsCreator({ threadId, userId: authUser.id }));

  try {
    await api.downVoteThread(threadId);
    dispatch(downVoteThreadDetailActionsCreator(prevState));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const asyncClearVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  const prevState = { threadId, userId: authUser.id };

  dispatch(clearVoteThreadDetailActionsCreator({ threadId, userId: authUser.id }));

  try {
    await api.clearVoteThread(threadId);
    dispatch(clearVoteThreadDetailActionsCreator(prevState));
  } catch (error) {
    throw new Error(error.message);
  }
};
