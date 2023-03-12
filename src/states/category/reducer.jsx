import { ActionTypes } from './action';

export const categoryReducer = (category = null, action = {}) => {
  switch (action.type) {
    case ActionTypes.SET_THREADS_BY_CATEGORY:
      return action.payload.category;
    default:
      return category;
  }
};
