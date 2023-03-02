import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import { isPreloadReducer } from './isPreload/reducer';

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
  },
});
