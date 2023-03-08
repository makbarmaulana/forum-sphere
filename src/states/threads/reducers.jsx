import { ActionTypes } from './actions';

export const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_THREADS:
      return action.payload.threads;
    case ActionTypes.ADD_THREAD:
      return [action.payload.thread, ...threads];
    default:
      return threads;
  }
};
