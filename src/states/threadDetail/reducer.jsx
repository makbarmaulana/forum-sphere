import { ActionTypes } from './action';

export const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_THREAD_DETAIL:
      return action.payload.threadDetail;
    default:
      return threadDetail;
  }
};
