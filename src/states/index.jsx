import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import { isPreloadReducer } from './isPreload/reducer';
import { threadsReducer } from './threads/reducers';
import { usersReducers } from './users/reducers';

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducers,
    threads: threadsReducer,
  },
});
