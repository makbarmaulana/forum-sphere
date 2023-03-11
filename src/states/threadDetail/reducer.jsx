import { ActionTypes } from './action';

export const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionTypes.UP_VOTE_THREAD_DETAIL:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
            ? threadDetail.upVotesBy
            : threadDetail.upVotesBy.concat(action.payload.userId),
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return threadDetail;
    case ActionTypes.DOWN_VOTE_THREAD_DETAIL:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
            ? threadDetail.downVotesBy
            : threadDetail.downVotesBy.concat(action.payload.userId),
        };
      }
      return threadDetail;
    case ActionTypes.CLEAR_VOTE_THREAD_DETAIL:
      if (threadDetail.id === action.payload.threadId) {
        return {
          ...threadDetail,
          upVotesBy: threadDetail.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: threadDetail.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return threadDetail;
    default:
      return threadDetail;
  }
};
