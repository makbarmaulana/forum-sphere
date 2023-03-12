export const ActionTypes = {
  SET_THREADS_BY_CATEGORY: 'threads/setThreadsByCategory',
};

export const setCategoryActionCreator = (category) => ({
  type: ActionTypes.SET_THREADS_BY_CATEGORY,
  payload: {
    category,
  },
});

export const setThreadsByCategory = (category) => (dispatch) => {
  dispatch(setCategoryActionCreator(category));
};
