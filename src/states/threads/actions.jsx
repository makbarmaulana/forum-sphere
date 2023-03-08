import { api } from '../../utils/api';

export const ActionTypes = {
  GET_ALL_THREADS: 'threads/getAllThreads',
  ADD_THREAD: 'threads/addThread',
};

export const getAllThreadsActionsCreator = (threads) => ({
  type: ActionTypes.GET_ALL_THREADS,
  payload: {
    threads,
  },
});

export const addThreadsActionsCreator = (thread) => ({
  type: ActionTypes.ADD_THREAD,
  payload: {
    thread,
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

export const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadsActionsCreator(thread));
  } catch (error) {
    throw new Error(error.message);
  }
};
