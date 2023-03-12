import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import { categoryReducer } from './category/reducer';
import { isPreloadReducer } from './isPreload/reducer';
import { leaderboardsReducer } from './leaderboards/reducer';
import { threadDetailReducer } from './threadDetail/reducer';
import { threadsReducer } from './threads/reducers';
import { usersReducers } from './users/reducers';

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducers,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    category: categoryReducer,
    leaderboards: leaderboardsReducer,
  },
});
