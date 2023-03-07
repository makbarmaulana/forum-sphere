import { api } from '../../utils/api';

export const ActionTypes = {
  GET_ALL_THREADS: 'threads/getAllThreads',
};

export const getAllThreadsActionsCreator = (threads) => ({
  type: ActionTypes.GET_ALL_THREADS,
  payload: {
    threads,
  },
});

export const asyncGetAllThreads = () => async (dispatch) => {
  try {
    const threads = await api.getAllThreads();
    dispatch(getAllThreadsActionsCreator(threads));
  } catch (error) {
    throw new Error(error.message);
  }
};
